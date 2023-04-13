## Roadmap

In the interest of transparency, we want to share details of our roadmap, so that others can see our priorities and make plans based off the work we are doing.

Here are some things that OctoFlutter plans to do in the future. If you have feedback on what we should do, you can submit an issue or contact us via email.

### 1、More Powerful
  * Provide more widgets in Glue, and improve the test cases for Glue.
  * Support some third-party libraries based on CanvasRenderingContext2D to run in OctoFlutter.
  * Open JSBinding capability for developers. MethodChannel is Asynchronous communication, and synchronous communication can be implemented more directly through JSBinding. Enable developers to integrate their own capabilities into OctoFlutter.

### 2、Upgrade Flutter
After Flutter 4.0 Released, OctoFlutter will upgrade the Flutter its dependent.

### 3、Better Development Experience
  * Providing a more friendly development environment，the current way of working tends to preview and debug UI in web browsers, but sometime, there may be slight differences between Mobile and Web presentation. In the future, connecting Mobile and Webpack will enable real-time debugging from Mobile.
  * WidgetInspector is very important for developing and debugging complex Widget tree. Due to lead into bloated code implementation in Glue and the support behind Glue, its current priority is relatively low.
  * The documentation support for Octo Widgets, Octo extensions will also be an important part of OctoFlutter in the future, which requires the Api documents similar to Flutter.

### 4、Performance Optimization Related
  * As more widgets are supported, the size of framework. js also expands. we need to regulate the size of framework.js.
  * Provide Engine performance statistics, support the analysis of UI and Raster thread time consumption similar to Flutter.
  * Provide more sliding components similar to OctoListView, providing developers with more choices and selecting suitable sliding components in specific scenarios.
  * Impeller migration. Currently, OctoFlutter is based on the Skia graphics engine for rendering, and will be migrated when Impeller is perfect.