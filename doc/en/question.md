### FAQ && ATTENTION

### FAQ

#### Q1:How to troubleshoot the error reported by a widget?
Check from the following steps:
1.Check whether the widget is imported from @octofletter/flutter. Take Text as an example. If there is no import, it may be recognized as Text in VSCode.
2.Check whether the widget is used in the appropriate scenario, such as using Expend Widget directly without putting it in the Widget such as Row or Column. In addition, compare the native Flutter to determine whether it is a bug of octoflutter.
3.Check whether the widget is used in the correct BuildContext, such as Scaffold.of (context)..., and ensure that there is a Scaffold widget in the Parent of the widget tree where this context is located.

#### Q2:There are some widgets with similar capabilities. How to choose them?
1.In the case of Image/OctoImage, choose OctoImage. The image loading library in the App is docked behind OctoImage, and the strategies such as image download and cache are reused. OctoListView is smoother than ListView when list length less then a certain amount. In addition, OctoNestedScrollView fixes some bugs in NestedScrollView. The use of OctoRepaintBoundary needs special attention. It applies RasterCache on the basis of RepaintBoundary, which is more suitable for scenes with complex subtrees but infrequent changes. For example, a row is nested inside a horizontal SingleChildScrollView, and there are many complex widgets inside the row, but they are all unchanged. At this time, an OctoRepaintBoundary can be nested outside the row to improve the performance of sliding.
2.Select in a way that reduces the complexity of the widget tree as much as possible. For example, there is no need to set another padding outside a container. It is directly implemented by using the padding attribute of the container itself.

#### Q3:How to understand the properties and usage of a widget, or how to quickly find a widget to achieve the desired effect?
OctoFlutter's widgets are basically TS versions of Flutter widgets, which can be learned from Flutter.

#### Q4:How to build your own dynamic capability based on OctoFlutter?
You can refer to the project implementation under example, which can dynamic load AppBundle with make request from development machine. Developers need to build their own AppBundle resource management platform and handle the version control of framework.zip and appbundle.zip. Generally speaking, the higher Framework version(fv) can be compatible for the lower with the same Engine version number (ev) . If the Engine version number (ev) is upgraded, the issued AppBundle needs to be fully upgraded (compiled based on the new octofletter version). The Engine version and Framework version that an AppBundle depends on can be viewed through ev and fv in manifest.json in appbundle.zip.

### ATTENTION
#### A1:Carefully consider the use of dynamic capabilities
OctoFlutter has dynamic capability, but it is not recommended to use it. If it needs to be used, developers need to understand the control risks of some application markets for dynamic distribution.

#### A2:Widget capability is not completely equivalent to Flutter
At present, OctoFlutter is still in the stage of gradual improvement. It has covered most of the widgets of Flutter, but it is not completely equivalent to Flutter. Before use, weigh whether the existing widgets can meet your needs.

#### A3:Ensure that the octoflutter series npm packages used are all the same version
Please explicitly depend on a certain version of the octoflutter series npm package in your project, such as x.y.z, and do not use ~x.y.z or ^x.y.z.

If your project depend on the x.y.z version of @octoflutter/flutter, then your @octoflutter/cli, @octoflutter/dartsdk, and all other packages of the octoflutter series should have a same version number x.y.z.