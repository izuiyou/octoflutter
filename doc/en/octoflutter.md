## A New Type Flutter Framework Designed In TypeScript —— OctoFlutter

### 1.Prelude
Our Team has been tried dynamic flutter in a way similar to React-Native. As the complexity of business scenarios increases, the support in some aspects is gradually becoming inadequate. This implementation of separating business logic from UI rendering is bound to be difficult to do. For example: ListView.builder is not smooth enough in response to fast scrolling, when encountering the demand for a long list.

Plus, Dart's ecosystem is not as rich as TypeScript/JavaScript, if we can bring flutter to TypeScript/JavaScript ecosystem, a lot of npm package can be used. We should solve the performance bottleneck caused by the frequent communication of old solution (similar to React-Native), also consider make flutter dynamic, and cross to TypeScript ecosystem. How to solve this problem ?

We decided to find a new way and put forward a new idea, make a hybrid of Flutter Web and Flutter Mobile. At that time, Flutter 2.2 was stable released, We decided to explore a mini-program framework based on Flutter Web that can work with a part of JS/TS ecosystem and can run in an independent environment (similar to Flutter Mobile Engine) on the mobile device (Not WebView).

### 2.Route
After the new idea is determined, it is necessary to explore the specific route to make it work, which can be divided into several points from top to bottom.

#### 2.1 We must provide a consistent development experience same as flutter, keep the original API, build a TypeScript Flutter Widget with the same name.

Widgets in Flutter basically become prototype functions after Dart2js compilation. Provide the TS version of Flutter Widgets for developers, and need to associate these Widgets with the prototype functions that truly represent these capabilities in the framework. For example, after compilation, the Flutter Text Widget may have become a prototype function. The TS version of the Text Widget we provide must be associated with this prototype function, so that the TS version of the Text has real vitality.

#### 2.2 Create a new rendering mode, convert RenderTree into LayerTree, and transfer it to the Engine through JSBinding.

The underlying rendering support required by Flutter Web for the Render tree is implemented in flutter_web_sdk. It implements two rendering mode: html and canvas. Considering the performance and the implementation cost of the mobile device, we decided to redevelop the canvas mode. The main reason is that the html tags compiled by the html mode are too complex. On the other hand, canvas is the wasm version of skia, which is convenient for us to simulate the implementation of canvas on mobile. In this way, we can provide another new rendering mode based on the canvas mode.

#### 2.3 Support the newly built rendering mode and provide the Engine for rendering.
Here we can refer to the implementation of Flutter Mobile Engine. The only difference between us and Flutter Mobile is the language. We need to build the JS Runtime corresponding to the Dart Runtime. In addition, Flutter Web itself is a single thread model. We need to change the thread model into a way consistent with Flutter Mobile, and support external textures, platform channels, etc.

### 3.Dissect
After the route map is determined, the problems should be disassembled one by one to explore the possibility of solve the key core problems according to the ability of team members.

#### 3.1 Provide TS version of the Flutter Widget for developers, and make it work with the js generated after the compilation of the Flutter framework. This part is called Glue. The purpose of Glue is very clear. It provides the TS version of API consistent with Flutter. The key difficulty is to associate with the prototype function of the corresponding widget in the js generated after the compilation of the Flutter framework. This process involves the following issues.

* 3.1.1 How to keep the prototype function you want to keep?
The size of js files compiled from Flutter Web project is relatively large. In order to consider size compression, we must use release to enable dart2js to enable the highest level of optimization and generate the smallest js file. However, since dart2js does not support proguard keep, we must implement proguard keep of custom rules to keep the functions and variables we care about.

* 3.1.2 How to keep the prototype function output in a stable scope?
Generally, in profile and release mode, the prototype functions in the compiled js are mounted in different scopes, such as A, B, and C. (This part is related to the implementation of dart2js. Each version may have some differences.) If you go through the Flutter upgrade, and then compile after the upgrade, whether a widget is still in the original corresponding scope. For example, in Flutter 2.2, the constants and enumerations compiled by the corresponding dart2js will always be stored in the scope of C, but after upgrading to Flutter 2.10, the constants and enumerations are no longer completely concentrated in the scope of C. This is affected by the implementation of dart2js version, so we must modify dart2js, maintain our own naming rules, and mount the classes we want to keep to the specified scope.

* 3.1.3 How to maintain the same generics as Dart?
Take Animation as an example. In the process of dart2js, its generic types are processed by Rti module, and the type specified by the implementation class determines that it becomes a certain type. If we want to maintain the same experience as Flutter, we need to build generics on Glue. This process is a little complicated, so we won't start here. The main difficulties of Glue are the above problems. In the actual implementation process, there will be a series of detailed problems, such as: how to quickly and effectively counter the Tree-Shaking of dart2js? We need to preserve the properties and functions of various widgets and API classes, and even some classes may optimize the functions originally implemented in the parent class into the subclass during compilation due to the existence of multi-level inheritance.

#### 3.2 The task of providing developers with the same TS version of widgets as Flutter on Glue has been completed. However, the prototype functions it relies on are all concentrated in the Flutter framework. Whether the framework can be separated and made into an npm package together with Glue to enter the front-end development ecosystem is another big problem.

* 3.2.1 how to peel flutter framework？
This is a very critical issue. Generally, our business code will match the Flutter framework code and flutter_web_sdk is compiled together and finally compiled into the body of the dartProgram function. When the compiled js is loaded and executed, the business code will also be executed. What we expect is to separate the Flutter framework from the business code, so that the runApp function provided by Glue for developers is consistent with the runApp function experience provided by Flutter. This problem is also easy to solve. We can use the root container to occupy the space. Subsequent business calls to the runApp function provided by Glue are actually just to refresh the widget tree in the root container.

* 3.2.2 How to build a new rendering mode?
As mentioned earlier, we are transforming based on the canvas pattern. It is also feasible to implement the canvas pattern directly, but it is impossible to build LayerTree and process RasterCache like Flutter Mobile. So in order to make the Engine obtain a complete LayerTree structure, the entire SceneBuilder, Scene, and EngineLayer have independent implementations, which are supported by JSBinding in the bottom engine. At the same time, in order to reduce the dependence on html as much as possible and avoid taking the path of implementing a simplified version of web browser, we need to remove this part of capabilities related to dom and css. These modifications are mainly concentrated on flutter_web_sdk. Of course, there are more than these, as well as CanvasKit download initialization and Flutter Web processing font-related logic.

#### 3.3 Now we need the lowest level of environment support, which can be roughly divided into JS Runtime, CanvasKit API Binding, some Web standard APIs, events, thread models, Platform Channels, etc.

* 3.3.1 JS Runtime
Here, we use V8 on Android, and we also transform it on the basis of J2V8, providing the ability to customize the registration of Java Binding classes to the V8 Runtime. It is convenient for some capabilities to be provided directly from the Java. For example, for XMLHttpRequest, in addition to the default implementation built in the framework, developer can implement it self, and can effectively reuse the network request framework in the native app. On iOS, we use JSCore to implement it.

* 3.3.2 CanvasKit API Binding
This part mainly simulates the API of CanvasKit. Because CanvasKit is the wasm version of Skia, the implementation of this part is relatively easy. Basically, the answer can be found from the implementation of CanvasKit itself.

* 3.3.3 Some Web standard APIs
Some mechanisms in Flutter Web that rely on browser capabilities to implement need to be supplemented. These browser capabilities are basically Web standards. We only need to implement them according to standards, such as setTimeout. We can implement their capabilities at the bottom level through JSBinding.

* 3.3.4 TouchEvent
The implementation of the event itself is not difficult. There are two ways to implement it. One is to set event listening for the element of the root node. When the Platform receives the event, it converts it into a standard Web Touch event callback to the element. The subsequent process will convert the data format to the framework through PointerBinding in Flutter Web. The other is similar to Flutter Mobile. When the Platform receives the event, it directly assembles the data in the form of PointerDataPacket, and then passes it to the framework. In comparison, the latter has undergone less data conversion and is a better one.

* 3.3.5 Thread Model
This part can basically refer directly to the implementation of the Flutter Mobile Engine to ensure that the JS Runtime is provided in the UI thread, and a similar task priority mechanism is provided to ensure that when Vsync is triggered, the micro task is suspended first, then the logic related to UI rendering is executed, then the event is passed to framework, and finally the execution of the micro task is resumed. At the same time, the same frame pipeline mechanism as the Flutter Mobile Engine should be provided. Because the SceneBuilder is implemented at the bottom level through JSBinding, the complete LayerTree can be obtained at the bottom level. The LayerTree generated by each frame will be inserted into the pipeline in the UI thread for the Raster thread to consume. The Raster thread processes the Preroll and Paint of LayerTree, rasterizes them, and then sends the command to the GPU, and finally the SwapBuffer appears on the screen. The important point of IO thread is to share texture with Raster thread, which is mainly used for image decoding and uploading to generate texture. In this way, the step of uploading texture is omitted during actual rendering, which will improve rendering efficiency.

* 3.3.6 Platform Channels
This part is actually to replace the channel between Dart and Platform with the channel between JS and Platform. Like Flutter Mobile, we can provide FlutterPlugin to meet the business's dependence on Platform capabilities.

### 4、The birth of OctoFlutter
In terms of the core issues of disassembly, the lowest level of capabilities is the simplest for us, because we can refer to the implementation of Flutter Mobile Engine, and most of the questions can be answered. Secondly, the peel of flutter framework is more about clarifying the logic and modifying the flutter_web_sdk source code looks huge, but its difficulty is controllable. The most uncertain factor is the implementation of Glue, mainly because the core issues behind it all point to the modification of dart2js. After the study of dart2js, we explored a feasible solution, so we began to formally build this framework. This framework is internally named OctoFlutter, and its implementation is basically based on the above problems.

OctoFlutter Architecture:
<img src="../octoflutter_architecture.png">
Next, I will elaborate on the key points of the whole framework from bottom to top.

#### 4.1 Embedder
This part is related to the capabilities of the platform (Android, iOS), mainly providing the Engine with basic capabilities such as thread creation, event loop, Vsync signal, surface rendering, keyboard input, accessibility service, etc.

#### 4.2 Engine
This part is highly similar to the implementation idea of Flutter Mobile Engine, such as thread model, Platform Channels, shared texture, Frame Pipeline, RasterCache and other mechanisms. The differences are basically caused by the differences between Dart and JS, such as JS Runtime and the channel implementation between JS and Platform. Based on the modified rendering method of the canvas mode, octoflutter reduces the difference between Web and Mobile, and only supports some standard Web APIs.

#### 4.3 Framework
This part is actually include flutter_web_sdk and flutter framework,  compiled by dart2js. flutter_web_sdk is equivalent to the implementation of Flutter Engine on the Web, but the rendering mode of octoflutter based on the canvas mode has weakened the impact of this part. It has removed the impact of dom and css and changed the initialization process. In addition to fixing some bugs in the Flutter framework. In addition, the life cycle management, routing and communication of AppBundle are also added.

#### 4.4 Glue
Glue is mainly used to provide developers with TS version and Flutter consistent Widgets, which connect with the prototype function of Keep in the framework, and finally exist as a npm package. In addition, it also provides some scaffolding tools and packages related to development.

#### 4.5 Development
Developer can use the octoflutter series npm package, and write TS in the way of flutter. During the development process, UI debugging can be carried out in the browser. Through the scaffolding tool, the compiled business app.js and resources can be packaged into a zip file. The framework.js, the fragmented js and the built-in Icon font file will be packaged into framework.zip, and distributed to mobile devices for operation through the applet resource management platform.

Example Code:
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

UI display in web mode：

<img src="../example_web.png" height = "500px">

UI display in mobile mode：

<img src="../example_mobile.jpg" height = "500px">

### 5、More Then Flutter
#### 5.1 Multi-AppBundle Shared Engine
Flutter itself does not support multi-appbundle, that is, a compilation product can only be run in an independent engine. In some independent business scenarios, this can meet the requirements. However, if you enter a scenario where the native page and Flutter business frequently alternate, you will encounter a headache, or all businesses will be concentrated in one Flutter product, The switch between the native page and the Flitter page is controlled uniformly by routing. Either each service is independent, and then different engines are created. Obviously, the latter is too expensive. The former limits the flexibility of independent appbundle. Is there a way to share the engine and allow different appbundle to load/unload flexibly.

We solved this problem in OctoFlutter. On the basis of Flutter, we do something for AppBundle, which represents a certain business. We need to manage the life cycle of AppBundle well. At the same time, because each business has different requirements for containers (for example, some businesses need full screen, and some businesses are pop-up windows), we need to properly transform the PlatformPlugin to bind the currently active containers. At the same time, AppBundlePlugin is provided to register the capabilities required by a specific business. It only plays a role in this business. The original FlutterPlugin is equivalent to a common capability for all businesses. In this way, the engine has two startup modes. The exclusive mode will destroy the engine when the business container is closed. The shared mode can survive until it is actively destroyed. During the survival period, it can support multiple different AppBundle startup/exit. In addition, resource isolation and code isolation between businesses need to be considered.

#### 5.2 Octo Extension
OctoFlutter provides a series of extension widgets, which we call Octo Extension. Part of them is to make up for the ecosystem deficiency of Flutter and integrate commonly used third-party libraries (such as Lottie). The other part is to provide widgets with unique capabilities. For example, OctoRepaintBoundary provides the ability to directly enable subtrees to generate RasterCache, allowing developers to control by themselves. OctoImage supports developers to reuse the existing image loading capabilities of native apps. These extensions will be compiled with the flutter framework and exist in the framework.zip in the form of fragments.

#### 5.3 Integrate Into JS/TS Ecosystem
In fact, various third-party capabilities that are independent of html and based on JS/TS can be run in OctoFlutter, and even developers can inject their own implementation capabilities into JS Runtime.

### 6、Defect
#### 6.1 Take into account the existing ecosystem of Flutter
Crossing to the JS/TS ecosystem will increase the cost of introducing some excellent third-party capabilities in the original Dart ecosystem. They must be integrated into the Octo extension by OctoFlutter framework developers, compiled with the framework, and implemented with the corresponding Glue. Fortunately, we have achieved forward compatibility for the incremental compilation of the framework, and will not lead to the issue that the new framework release affects the old business.

#### 6.2 Flutter upgrade
Flutter is keep updating. Whether it is repairing existing bugs or providing new capabilities, only by continuously following the upgrade of Flutter can OctoFlutter keep up with the pace of Flutter. Fortunately, we are only doing the prototype function keep at the API level. As long as the input parameters of Flutter's widget remain unchanged, Glue will not change. However, each upgrade still needs to verify the API of all widgets. This part of work needs to be followed up by static analysis through the program, automatic completion of verification, change prompt, etc. The upgrade of Flutter is also likely to be accompanied by the upgrade of dart2js. Pay attention to whether the internal implementation changes of dart2js will affect the stability of prototype functions and the ability to customize proguard rules.

#### 6.3 Slightly degraded performance
The experience of OctoFlutter is the intermediate state of Flutter Web and Flutter Mobile, which is closer to Mobile. After all, the release version of Flutter Mobile is AOT, which has many advantages over JS. Fortunately, V8 is powerful enough, and the actual difference is also hard to detect. In addition, we also modified V8 to support the controlled GC of the new generation, and the new generation of GC is performed in the free time of UI thread to reduce the stagnation caused by GC.

