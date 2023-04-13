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

import android.content.Intent
import android.text.TextUtils
import cn.xiaochuankeji.octoflutter.embedding.engine.plugins.FlutterPlugin
import cn.xiaochuankeji.octoflutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding
import cn.xiaochuankeji.octoflutter.plugin.common.MethodCall
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel.MethodCallHandler
import example.octoflutter.WebActivity

/**
 * Created by liujian on 2023/3/10.
 */
class RouterPlugin : FlutterPlugin, MethodCallHandler {

    private val channel: String = "example.plugins/router"
    private var methodChannel: MethodChannel? = null
    private var binding: FlutterPluginBinding? = null

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "open" -> {
                val url: String? = call.arguments as String?
                if (!TextUtils.isEmpty(url) && binding != null) {
                    val intent: Intent =
                        Intent(binding!!.applicationContext, WebActivity::class.java)
                    intent.putExtra("url", url)
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    binding!!.applicationContext.startActivity(intent)
                }
            }
            else -> result.notImplemented()
        }
    }

    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        this.binding = binding
        if (methodChannel == null) {
            methodChannel = MethodChannel(binding.binaryMessenger, channel)
            methodChannel?.setMethodCallHandler(this)
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        methodChannel?.setMethodCallHandler(null)
        methodChannel = null
        this.binding = null
    }


}