## 常见问题及注意事项

### 常见问题

#### Q1:某个Widget使用报错，该如何排查？
从以下几步排查：<br>
1:检查是否从@octoflutter/flutter中import了这个Widget，以Text为例，如果没有import，可能会被识别成VSCode中的Text<br>
2:检查是否在合适的场景使用该Widget，如：直接使用Expend，没有将其放到Row、Column等Widget中，另外可以对比原生Flutter以确定是否是octoflutter的bug<br>
3:检查是否在正确的BuildContext中使用该Widget，如：Scaffold.of(context)...，需要确保此context所在Widget树的Parent中有Scaffold Widget存在。

#### Q2:存在部分能力相似的Widget，该如何选择？
1:如果是Image/OctoImage这种情况，尽量采用以Octo开头的，OctoImage背后对接了App中的图片加载框架，复用了图片下载、缓存等策略。在数据量小于一定量时，OctoListView会比ListView更加顺滑。另外像OctoNestedScrollView是修复了NestedScrollView的一些Bug。OctoRepaintBoundary的使用需要特别注意，它在RepaintBoundary的基础上应用了RasterCache，比较适合子树较为复杂但是不经常变化的场景，例如：一个横向的SingleChildScrollView里面嵌套一个Row，Row内部有很多复杂的Widget，但都是不变的，此时可以在Row外面嵌套一个OctoRepaintBoundary，提升滑动时的性能。

2:按照尽可能降低Widget树复杂度的方式去选择，例如：一个Container外面就没有必要再套一个Padding，直接用Container本身的padding属性去实现。

#### Q3:如何了解某个Widget的属性以及使用方法，或者如何快速找到实现想要效果的Widget？
OctoFlutter的Widget基本上都是Flutter Widget的TS版本，可以从Flutter中了解。

#### Q4:如何基于OctoFlutter搭建自己的动态化能力？
可以参考example下的工程实现，example工程实现了动态请求开发机上的AppBundle。开发者需要自行搭建自己的AppBundle资源管理平台，处理好framework.zip和appbundle.zip的版本控制。一般来说，同Engine版本号（ev）下面的高版本Framework（fv）可以向低版本fv兼容，如果Engine版本号（ev）升级，下发的AppBundle需要全量升级（基于新的octoflutter版本去编译），一个AppBundle所依赖的Engine版本和Framework版本可以通过appbundle.zip中的manifest.json中的ev、fv查看。


### 注意事项

#### A1:慎重考量使用动态化能力
OctoFlutter具备动态化的能力，但不推荐使用，如需使用，开发者需了解某些应用市场对于动态下发的管控风险。

#### A2:Widget能力不完全等价于Flutter
目前OctoFlutter还处于逐渐完善的阶段，已经涵盖了Flutter绝大部分Widget，但并不是全面等价于Flutter，使用前权衡现有的Widget是否能满足你的需求。

#### A3:确保使用的octoflutter系列npm package都是同一版本
在你的项目中请明确的依赖octoflutter系列npm package的某一个版本，例如：x.y.z，不要使用～x.y.z或^x.y.z 。
如果你的项目依赖了@octoflutter/flutter的x.y.z版本，那么你的@octoflutter/cli、@octoflutter/dartsdk以及其它所有octoflutter系列的package，版本号都应该为x.y.z。
