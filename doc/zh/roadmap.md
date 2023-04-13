## Roadmap

为了提高透明度，我们希望分享我们路线图的细节，以便其他人能够看到我们的优先事项，并根据我们正在做的工作制定计划。<br>

这里列出未来OctoFlutter计划要做的一些事情，如果您对我们应该做什么有反馈意见，可以通过提交issue，或邮件联系我们。

### 1、能力拓展相关
  * 进一步补充胶水层Api，提供更多能力的Widget，并完善胶水层的测试用例。
  * 实现对CanvasRenderingContext2D支持，为了OctoFlutter进一步向前端生态发展，支持一些基于CanvasRenderingContext2D的三方库能在OctoFlutter中运行。
  * 开放JSBinding注册能力给开发者。MethodChannel本身是异步通信，通过JSBinging可以更加直接的实现同步通信。让开发者可以将自有的能力整合到OctoFlutter中使用。

### 2、升级依赖的Flutter版本
Flutter升级到4.0以后，OctoFlutter会做一次升级。持续引入Flutter新增的能力，以及同步Flutter Fix的Bug。

### 3、开发体验相关
  * 提供更加友好的开发环境，目前的工作方式倾向于UI开发在Web浏览器中预览调试，但实际上可能Mobile与Web展现存在细微差异，未来打通Mobile和Webpack，实现从Mobile实时调试。
  * WidgetInspector对于开发调试复杂界面来说非常重要，由于需要在胶水层引入臃肿的代码实现以及胶水层背后的支持，所以目前的优先级较低。
  * 拓展Widget的文档支持，未来Octo拓展也会是OctoFlutter很重要的组成部分，这部分需要建立类似于Flutter的Api文档。

### 4、性能优化相关
 * 随着支持的Widget越多，framework.js的大小也越发膨胀，减小主framework.js的体积。
 * 开放Engine性能统计数据，支持类Flutter的UI、Raster线程耗时分析。
 * 提供更多类似OctoListView的滑动组件，给开发者提供更多选择，在特定场景选择合适的滑动组件。
 * Impeller迁移，目前OctoFlutter基于Skia图形引擎进行渲染，待Impeller成熟后进行迁移。
