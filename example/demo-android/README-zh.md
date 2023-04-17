### Android 集成
 !> 注意: 以下文档都是假设您已经具备一定的 Android 开发经验。
这篇教程，讲述了如何将 `OctoFlutter` 集成到 Android 工程。

#### 简易集成

1.创建一个Android工程<br>
2.本地集成
   * 复制 `octoflutter.jar` 到你的项目`libs`目录下.<br>
   !> 你可以在 [这里](../../artifact/android/octoflutter.jar) 找到它
   * 配置 build.gradle
   ```shell
   api files('libs/octoflutter.jar')
   ```
3.Maven 集成 (可选)
  * 查询 [Maven Centeral OctoFlutter 版本](https://central.sonatype.com/artifact/io.github.izuiyou/octoflutter)
     * 配置 the build.gradle
     ```shell
     api 'io.github.izuiyou:octoflutter:0.0.1'
     ```
4.实现 `ImageDataProvider` , 你可以参考本工程的 [FrescoImageProvider](./support/src/main/java/com/example/support/FrescoImageProvider.java)<br>
5.实现 `Ambient` , 你可以参考本工程的 [LocalAndRemoteAmbientImpl](./support/src/main/java/com/example/support/local/LocalAndRemoteAmbientImpl.java)<br>
6.继承 `AbsBundleSupport` , 你可以参考本工程的 [AppBundleSupportImpl](./support/src/main/java/com/example/support/AppBundleSupportImpl.java)<br>
7.继承 `AbsOctoFlutterActivity`, 你可以参考本工程的 [AppBundleActivity](./app/src/main/java/example/octoflutter/AppBundleActivity.kt)<br>
8.如果你想在手机上调试js需要额外实现`DevEnvSupplier` 和 `DevEnvProvider` , 你可以参考本工程的 [AppBundleDevSupplier](./support/src/main/java/com/example/support/AppBundleDevSupplier.java)<br>

#### 高阶集成

一般来说，在`octoflutter.jar`中`cn.xiaochuankeji.support`目录下所有的源码都可以自己去实现，这种方式可以让你更灵活的去管理Engine和Activity等，但需要实现的逻辑也更多，你需要实现`OctoFlutterSupport`以及它背后关联的`HttpCallProvider`、`ImageDataProvider`、`OctoResourceSettings`、`OctoJsWatcher`等，`OctoResourceSettings`主要为Engine提供js内容以及资源文件。

#### 注意事项
 * octoflutter最小支持版本为5.0，即minSdk >= 21。
 * octoflutter不包含x86架构，请使用真机测试。