/*
 * BSD 2-Clause License
 *
 * Copyright (c) 2023, The OctoFlutter Authors. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package example.octoflutter.plugins

import cn.xiaochuankeji.octoflutter.embedding.engine.FlutterEngine
import cn.xiaochuankeji.octoflutter.isolate.AppBundle
import example.octoflutter.platformview.ExamplePlatformViewAppBundlePlugin

/**
 * Created by liujian on 2023/3/10.
 */
object PluginRegister {

    fun plugins4Engine(engine: FlutterEngine) {
        if (!engine.plugins.has(HttpPlugin::class.java)) {
            engine.plugins.add(HttpPlugin())
        }

        if (!engine.plugins.has(RouterPlugin::class.java)) {
            engine.plugins.add(RouterPlugin())
        }
    }

    fun plugins4AppBundle(appBundle: AppBundle) {
        if (!appBundle.has(VideoAppBundlePlugin::class.java)) {
            appBundle.add(VideoAppBundlePlugin())
        }

        if (!appBundle.has(ExamplePlatformViewAppBundlePlugin::class.java)) {
            appBundle.add(ExamplePlatformViewAppBundlePlugin())
        }
    }

}