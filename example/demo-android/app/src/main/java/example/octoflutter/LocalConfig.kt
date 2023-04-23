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

package example.octoflutter

import android.net.Uri
import cn.xiaochuankeji.octoflutter.embedding.engine.FlutterEngine
import cn.xiaochuankeji.octoflutter.runtime.OctoVersion
import cn.xiaochuankeji.support.appbundle.BundleConfig
import cn.xiaochuankeji.support.appbundle.BundleInfo
import cn.xiaochuankeji.support.appbundle.FwkInfo
import com.example.support.local.LocalAndRemoteAmbientImpl

/**
 * Created by liujian on 2023/3/8.
 */
object LocalConfig {

    private val fwkInfo: FwkInfo =
        FwkInfo("", "d2a64011b6577f4883dde071b3026980", 9, OctoVersion.VERSION)

    const val kBundleOctopack = "octoflutter_octopack_test"
    const val kBundleTransparent = "octoflutter_transparent_test"

    fun createBundleInfo(bundle: String, md5: String, config: BundleConfig): BundleInfo {
        return BundleInfo("", md5, bundle, FlutterEngine.EngineMode.SHARED, fwkInfo, config);
    }

    fun createUri(bundle: String, transparent: Boolean): Uri {
        var target = "flutter://$bundle/main"
        if (transparent) {
            target += "?transparent=1"
        }
        return Uri.parse(target)
    }

    fun injectLocalConfig(ambient: LocalAndRemoteAmbientImpl) {
        ambient.setFwkInfo(fwkInfo)

        ambient.addBundleInfo(
            createBundleInfo(
                kBundleOctopack,
                "18e9e62eb1092bfb319cd32aad4aed19",
                BundleConfig()
            )
        )

        ambient.addBundleInfo(
            createBundleInfo(
                kBundleTransparent,
                "ae61c129e27f6f224287aae07f464fe8",
                BundleConfig()
            )
        )
    }


}