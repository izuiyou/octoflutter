### Android Integration
 !> Note: The following documents assume that you already have some experience with Android development.
This tutorial describes how to integrate `OctoFlutter` into your Android project.

#### Simple Integration

1.Create an Android project<br>
2.Local integration
   * Copy `octoflutter.jar` to your project's `libs` directory.<br>
   !> you can find it [here](./support/libs/octoflutter.jar)
   * Configure the build.gradle
   ```shell
   api files('libs/octoflutter.jar')
   ```
3.Implement `ImageDataProvider` , you can refer to [FrescoImageProvider](./support/src/main/java/com/example/support/FrescoImageProvider.java) in this project.<br>
4.Implement `Ambient` , you can refer to [LocalAndRemoteAmbientImpl](./support/src/main/java/com/example/support/local/LocalAndRemoteAmbientImpl.java) in this project.<br>
4.Inherit `AbsBundleSupport` , you can refer to [AppBundleSupportImpl](./support/src/main/java/com/example/support/AppBundleSupportImpl.java) in this project.<br>
5.Inherit `AbsOctoFlutterActivity`, you can refer to [AppBundleActivity](./app/src/main/java/example/octoflutter/AppBundleActivity.kt) in this project.<br>
6.If you want to debug js on mobile, implement `DevEnvSupplier` & `DevEnvProvider` , you can refer to [AppBundleDevSupplier](./support/src/main/java/com/example/support/AppBundleDevSupplier.java) in this project.<br>

#### Advanced Integration

Generally speaking, the code in package `cn.xiaochuankeji.support` can be implemented by yourself, if you want to. In this way, you need implement `OctoFlutterSupport` and what `OctoFlutterSupport` needs, such as `HttpCallProvider`、`ImageDataProvider`、`OctoResourceSettings`、`OctoJsWatcher`, implement `OctoResourceSettings` to provide js content and assets to Engine. You can manage the Engine and Activity yourself.

#### Attention
 * The minimum supported Android version is 5.0，minSdk >= 21。
 * octoflutter's abi does not contain x86, use it on real mobile device。