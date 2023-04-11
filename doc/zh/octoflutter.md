## 面向TS生态的新型Flutter框架——OctoFlutter

### 一、背景
在OctoFlutter诞生之前，我们曾尝试过RN Like的方案去实践Flutter的动态化，随着业务场景复杂度的提升，在某些方面的支持逐渐显得有些力不从心，这种业务逻辑与UI渲染分离的实现方案注定有些事情很难做，例如：当遇到超长列表需求时，ListView.builder这种方式在响应快速滑动的过程中不够流畅。

再加上Dart生态的不足，如果能打通JS/TS生态，前端多年沉淀的各种package可以得到运用。团队对于动态化能力有比较强的诉求。我们既要解决RN Like方案频繁通信带来的性能瓶颈，又要解决动态化问题，还期望能面向TS生态，如何才能解决这个问题？

我们决定另辟蹊径，提出一种新的构想，打造一种Flutter Web与Flutter Mobile的结合体，同时解决这三大问题。彼时恰逢Flutter 2.2发布时，Flutter Web版本逐渐稳定，我们决定基于Flutter Web探索出一种能兼容JS/TS部分生态，且能在移动端（非WebView）的独立环境（类似Flutter Mobile Engine）运行的小程序框架。

### 二、实现路径
新的构想确定之后，需要去探索具体的实现路径，从上而下依次可以分为这么几个要点。

#### 2.1 必须提供一致的开发体验，保持API一致，即构建TS版本的Flutter Widget。
Flutter中的Widget在经历dart2js编译之后，基本上都变成了原型函数。面向开发者提供TS版本的Flutter Widget，而且需要让这些Widget与framework中真正代表这些能力的原型函数进行关联。例如：Flutter Text Widget在编译之后，可能已经变成了某个原型函数，我们提供的TS版本的Text Widget，必须要关联上这个原型函数，这样才能使TS版本的Text具备真正的活力。

#### 2.2 打造新的渲染模式，将RenderTree转化成LayerTree，通过JSBinding传递给底层。
Flutter Web关于Render树所需要的底层渲染支撑都是在flutter_web_sdk中实现，它实现了html和canvaskit两种渲染方案，考虑到性能以及移动端的实现成本，我们决定在canvaskit模式上进行改造，主要是因为html模式编译出的html标签过于复杂，另一方面canvaskit是skia的wasm版本，便于我们在移动端去模拟canvaskit的实现。这样我们基于canvaskit模式可以提供另一种新的渲染模式。

#### 2.3 支撑新构建的渲染模式，提供渲染的Engine层。
这里我们可以参考Flutter Mobile Engine的实现，我们跟Flutter Mobile的区别无非是语言不同，我们需要构建与Dart Runtime对应的JS Runtime。另外就是Flutter Web本身是单线程模型，我们要把线程模型改造成跟Flutter Mobile一致的线程模型，以及对外接纹理、Platform Channels等的支持。

### 三、问题拆解
实现路径确定之后就要逐一拆解问题，探索关键核心问题基于现有资源实现的可能性。

#### 3.1 面向开发者提供TS版本的Flutter Widget，背后衔接flutter framework编译后生成的js，这部分我们称之为胶水层。胶水层的目的很明确，提供跟Flutter一致的TS版本的API，关键难点在于跟flutter framework编译后生成的js中对应Widget的原型函数进行关联。这个过程会涉及到以下问题。

* 3.1.1 如何Keep想要保留的原型函数？

Flutter Web项目编译成js文件的体积是比较庞大的，为了考虑体积压缩，我们必须使用release的方式让dart2js去开启最高级别的优化，生成体积最小的js文件。但是由于dart2js不支持混淆Keep，我们必须实现自定义规则的混淆Keep，保留住我们关心的函数，变量等。

* 3.1.2 如何让原型函数输出在稳定的作用域？

通常在profile和release模式下，编译出来的js中的原型函数都挂载在不同的作用域下，如A，B，C。（这部分跟dart2js的实现方式有关，每个版本可能有些差异。）如果经历flutter升级，升级之后再编译，某个Widget是否还在原来对应的作用域下。例如，在Flutter 2.2的时候，对应的dart2js编译出来的常量、枚举会始终存放到C这个作用域下，但升级到Flutter 2.10的版本之后，常量、枚举不再完全集中在C这个作用域下。这是受dart2js版本实现方案的影响，所以我们必须修改dart2js，维护好自己的命名规则，将我们想保留的类挂载到指定的作用域。

* 3.1.3 如何保持与Dart一致的泛型？

以Animation为例，在dart2js的过程中，其泛型经过Rti模块处理，由实现类指定类型决定其成为某一确定的类型。如果我们想保持跟Flutter一致的体验，我们需要在胶水层构建出泛型，这个过程有些复杂，在此先不展开。 胶水层主要的难点在以上这几个问题，实际实现过程中还会遇到一系列的细节问题，例如：如何快速有效的反dart2js的Tree-Shaking？我们要保留各种Widget以及API类的属性及函数，甚至有些类由于多层继承关系的存在，可能会在编译时将原本在父类中实现的函数优化到子类中。

#### 3.2 上面算是完成了胶水层面向开发者提供与Flutter一致的TS版本Widget能力的任务，但是它依赖的这些原型函数都集中在flutter framework中，能否将framework剥离出来，与胶水层一起做成npm package，进入前端开发生态，是另一个比较大的问题。

* 3.2.1 如何剥离出flutter framework？

这是一个非常关键的问题，通常情况下，我们的业务代码会和flutter framework代码以及flutter_web_sdk一起编译，最终编译到dartProgram函数体内部，当编译后的js加载执行时，业务代码也随之启动。而我们期望的是单独把flutter framework剥离出来，不受业务代码的影响，让胶水层面向开发者提供的runApp函数就跟Flutter提供的runApp函数体验一致。这个问题也容易解决，我们可以采用根容器占位的方式去实现，后续业务调用胶水层提供的runApp函数其实只是去刷新根容器内的Widget树。

* 3.2.2 如何构建新的渲染模式？

前面已经提到了，我们是基于canvaskit模式进行改造，如果直接采用canvaskit模式去实现也是可行的，但是没办法像Flutter Mobile那样构建LayerTree以及处理RasterCache，所以为了让底层获得完整的LayerTree结构，整个SceneBuilder、Scene、EngineLayer都有独立的实现，通过JSBinding在底层Engine提供支撑。同时为了尽可能减少对html的依赖，避免走上了实现简化版Web浏览器的道路，我们需要摘除dom、css相关的这部分能力，这些修改主要集中在flutter_web_sdk中完成。当然摘除的远不止这些，还有CanvasKit下载初始化及Flutter Web处理字体相关的逻辑等。

#### 3.3 现在就差最底层的环境支撑了，大致可以分为JS Runtime、CanvasKit API Binding、部分Web标准API、事件、线程模型、Platform Channels等。

* 3.3.1 JS Runtime

这里在Android上我们采用V8，同时也在J2V8的基础上进行改造，提供能自定义注册Java Binding类到V8Runtime的能力，方便部分能力直接从Java层提供，例如：对于XMLHttpRequest除了框架内置的默认实现外，我们可以开放给开发者自己去实现，可以有效的复用原生App中的网络请求框架。iOS上我们采用JSCore去实现。

* 3.3.2 CanvasKit API Binding

这部分主要是模拟CanvasKit的API，由于CanvasKit是skia的wasm版本，这一部分的实现相对比较容易，基本上都能从CanvasKit本身的实现中找到答案。

* 3.3.3 部分Web标准API

Flutter Web中某些依赖浏览器能力去实现的机制需要得到补全，这部分浏览器能力基本上都是Web标准，我们只需要按照标准去实现即可，例如：setTimeout，我们可以通过JSBinding在底层实现其能力。

* 3.3.4 事件

事件的实现本身不难，有两种方式去实现，一种是通过给根节点的Element设置事件监听，当Platform接受到事件后，转换成标准的Web Touch事件回调给Element，后续的流程就会通过Flutter Web中的PointerBinding进行数据格式转换最终给到framework。另一种是跟Flutter Mobile类似，当Platform接受到事件后就直接组装成PointerDataPacket形式的数据，然后传递给framework。相比较来说，后一种方案经历了更少的数据转换，是更优秀的方案。

* 3.3.5 线程模型

这部分基本上可以直接参考Flutter Mobile Engine的实现，保证在UI线程提供JS Runtime，提供类似的任务优先级机制，保证Vsync触发时，先暂停微任务，再执行UI渲染相关的逻辑，然后回调事件，最后恢复微任务执行。同时也要提供跟Flutter Mobile Engine一样的Frame Pipeline机制，由于SceneBuilder是通过JSBinding在底层实现，所以可以在底层获取完整的LayerTree，每一帧产生的LayerTree会在UI线程被塞进Pipeline，供Raster线程去消耗。Raster线程处理LayerTree的Preroll和Paint，进行光栅化，然后将命令发送给GPU，最终SwapBuffer上屏。IO线程比较重要的一点就是要跟Raster线程共享纹理，主要用在图片解码上传生成纹理，这样在实际绘制的时候省去了上传纹理的步骤会提高绘制的效率。

* 3.3.6 Platform Channels

这部分其实就是把Dart跟Plaform之间的信道换成了JS跟Platform之间的信道实现。我们可以像Flutter Mobile一样提供FlutterPlugin，满足业务对Platform能力的依赖。

### 四、OctoFlutter框架的诞生
从拆解的这些核心问题来说，最底层的能力对我们来说是最简单的，因为我们可以参考Flutter Mobile Engine的实现，绝大多数问题都可以找到答案。其次对于flutter framework的剥离，更多在于理清逻辑，修改flutter_web_sdk源码，看起来很庞大，其实难度可控。最不确定的因素就是胶水层的实现，主要是关于它的核心问题背后都指向对dart2js的修改。经过对dart2js的研究，我们探索出了可行的方案，于是我们开始正式构建这套框架。这套框架我们内部命名为OctoFlutter，它的实现基本上也是围绕上面的几大问题细化展开的。

OctoFlutter架构图:
<img src="../octoflutter_architecture.png">
接下来把整个框架的关键点从下到上，做一些详述。
#### 4.1 Embedder
这部分与平台（Android、iOS）能力相关，主要为上层提供线程创建、事件循环、Vsync信号、Surface渲染、键盘输入、无障碍服务等基础能力。

#### 4.2 Engine
这部分跟Flutter Mobile Engine实现思路保持高度相似，像线程模型、Platform Channels、共享纹理、Frame Pipline、RasterCache等机制。不同点基本上是因为Dart、JS这两种语言差异所引起的，如：JS Runtime、与Platform之间的信道实现。octoflutter基于canvaskit模式改造后的渲染方式，缩小了Web和Mobile上的差异，仅需支持部分标准的Web API。

#### 4.3 Framework
这部分实际上是flutter_web_sdk和flutter framework两部分代码通过dart2js编译后的产物。flutter_web_sdk相当于是Flutter Engine在Web上的实现，但是octoflutter基于canvaskit模式改造后的渲染方式削弱了这一层的影响，它移除了dom、css相关的影响以及改变了初始化流程。flutter framework中除了修复Flutter本身的一些bug。除此之外还增加了AppBundle的生命周期管理、路由、通信等。

#### 4.4 Glue
胶水层主要面向开发者提供TS版跟Flutter一致的Widget，背后衔接framework中Keep的原型函数，最终以npm package的形式存在。另外还提供一些开发相关的脚手架工具和生态package等。

#### 4.5 业务开发
开发者最终接触到的是octoflutter系列的npm package，然后以Flutter的方式去写TS，开发过程中，可以在浏览器中进行UI调试，通过脚手架工具，可以编译出的业务app.js以及资源打包成业务zip，framework.js和分片的js以及内置的Icon字体文件会打包成framework.zip，通过小程序资源管理平台，分发至移动设备运行。

示例代码：
   ```shell
import {Color} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  Column,
  CrossAxisAlignment,
  Key,
  MainAxisAlignment,
  MaterialApp,
  runApp,
  Scaffold,
  State,
  StatefulWidget,
  StatelessWidget,
  SystemUiOverlayStyle,
  Text,
  ThemeData,
  Widget,
  Image,
  TextStyle,
  FloatingActionButton,
  Icon,
  Icons,
} from '@octoflutter/flutter'

class _MyHomePageState extends State<MyHomePage> {
  _counter = 0

  _incrementCounter = () => {
    this.setState(() => {
      this._counter++
    })
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text(this.widget.title),
        systemOverlayStyle: new SystemUiOverlayStyle({
          statusBarColor: Color.fromARGB(255, 103, 78, 167),
        }),
      }),
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.asset('icon.png', {width: 100, height: 100}),
            new Text('You have pushed the button this many times:', {
              style: new TextStyle({
                fontSize: 14,
                color: Colors.black87,
              }),
            }),
            new Text(`${this._counter}`, {
              style: new TextStyle({
                fontSize: 14,
                color: Colors.black87,
              }),
            }),
          ],
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: this._incrementCounter,
      }),
    })
  }
}

class MyHomePage extends StatefulWidget {
  public readonly title: string

  constructor(args: {title: string; key?: Key}) {
    super({key: args.key})
    this.title = args.title
  }

  createState(): State<StatefulWidget> {
    return new _MyHomePageState()
  }
}

class MyApp extends StatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args)
  }

  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: 'OctoFlutter Demo',
      theme: new ThemeData({
        primarySwatch: Colors.blue,
      }),
      home: new MyHomePage({title: 'OctoFlutter Demo Home Page'}),
    })
  }
}

function main() {
  runApp(new MyApp())
}
  ```

Web中UI调试显示：

<img src="../example_web.png" height = "500px">

移动端显示：

<img src="../example_mobile.jpg" height = "500px">

### 五、不止于Flutter
#### 5.1 多AppBundle共享Engine
Flutter本身是不支持多业务的，即某一次编译产物只能在一个独立的Engine中去运行，在某些独立闭环的业务场景中，这是能满足需求的，但如果进入一个原生页面与Flutter业务频繁交替的场景，就会遇到一个头疼的问题，要么所有的业务都集中在一个Flutter产物中去，通过路由统一控制原生页面与Flutter页面切换，要么每个业务独立，然后去开不同的Engine，显然后者开销过大，前者又限制了业务互相独立的灵活性，有没有一种方式既能共享Engine，又能让不同的业务灵活装载/卸载。

我们在OctoFlutter去解决了这个问题，在Flutter的基础上，架构一层AppBundle，它代表某一个业务，我们需要管理好AppBundle的生命周期，同时因为每个业务对于容器的需求不同（比如：有的业务需要全屏，有的业务是弹窗），我们要适当的改造PlatformPlugin以绑定当前正在活动的容器等。同时提供了AppBundlePlugin，针对某个具体业务所需要的能力进行注册，它只在这个业务中发挥作用。原有的FlutterPlugin相当于是面向所有业务提供的通用能力。这样Engine有两种启动模式，独占模式会在业务容器关闭时销毁Engine，共享模式可以一直存活直到主动销毁，存活期间可支持多个不同AppBundle启动/退出。此外还需要考虑业务间的资源隔离和代码隔离等。

#### 5.2 Octo拓展
OctoFlutter提供了一系列的拓展Widget，我们称之为Octo拓展，其中一部分是为了弥补flutter生态上的不足，将常用的第三方库（例如Lottie）内置集成。另一部分是为了提供特有能力的Widget，例如：OctoRepaintBoundary提供了直接启用子树产生RasterCache逻辑，让开发者也可以自行管控，OctoImage背后支持开发者复用原生App已有的图片加载能力。这些拓展会跟随flutter framework一起编译，以分片的形式存在于framework.zip中。

#### 5.3 融入JS/TS生态
事实上各种与html无关且基于JS/TS的第三方能力都可以在OctoFlutter中运行，甚至开发者还可以向JS Runtime注入自己的实现能力。

### 六、缺陷
#### 6.1 兼顾Flutter现有生态
跨越到JS/TS生态，会让原本Dart生态中一些优秀的第三方能力引入成本变高了，它们必须由OctoFlutter框架开发者集成到Octo拓展中，随framework一起编译，并实现其相应的胶水层，好在我们对framework增量编译做到了向前兼容，不会引来新framework发版影响旧业务的问题。

#### 6.2 Flutter的升级
Flutter一直在持续迭代，无论是修复已有的bug，还是提供新的能力，唯有能持续同步跟随Flutter升级，才能保持OctoFlutter始终能跟上Flutter的步伐。好在我们只是做API级别的原型函数Keep，只要Flutter的Widget入参不变，胶水层就不用变，但每次升级还是少不了对所有Widget的API进行校验，这部分工作后续需要通过程序进行静态分析，自动化完成校验、变化提示等。Flutter的升级也很可能伴随着dart2js的升级，要关注dart2js内部实现变化，是否会影响原型函数的稳定性以及自定义混淆规则的能力。

#### 6.3 略微下降的性能
OctoFlutter的体验是Flutter Web和Flutter Mobile的中间态，更接近于Mobile。Flutter Mobile的release版本毕竟是AOT的，相对于JS来说有不少优势，好在V8足够强大，实际上的差异也很难察觉，另外我们还修改V8，实现了对新生代的可控GC，在UI线程空余时间去进行新生代GC，减少GC引起的卡顿。