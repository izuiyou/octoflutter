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

import android.text.TextUtils
import cn.xiaochuankeji.octoflutter.embedding.engine.plugins.FlutterPlugin
import cn.xiaochuankeji.octoflutter.plugin.common.MethodCall
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel.MethodCallHandler
import okhttp3.*
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject
import java.io.IOException

/**
 * Created by liujian on 2023/3/10.
 */
class HttpPlugin : FlutterPlugin, MethodCallHandler {

    private val channel: String = "example.plugins/http"
    private var methodChannel: MethodChannel? = null
    private val okHttpClient: OkHttpClient = OkHttpClient()

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "post" -> {
                val url: String? = call.argument<String>("url");
                val params: String? = call.argument<String>("para…ms")
                if (TextUtils.isEmpty(url)) {
                    result.error("-1", "url is empty", null)
                    return
                }
                val builder = Request.Builder()
                if (!TextUtils.isEmpty(params)) {
                    val jsonObject = JSONObject(params!!)
                    val requestBody = jsonObject.toString()
                        .toRequestBody("application/json; charset=utf-8".toMediaTypeOrNull())
                    builder.post(requestBody)
                }
                builder.url(url!!)
                okHttpClient.newCall(builder.build()).enqueue(object : Callback {
                    override fun onFailure(call: Call, e: IOException) {
                        result.error("-2", "request onFailure", e.message)
                    }

                    @Throws(IOException::class)
                    override fun onResponse(call: Call, response: Response) {
                        if (response.code == 200) {
                            result.success(response.body!!.string())
                        } else {
                            result.error("${response.code}", "", null)
                        }
                    }
                })
            }
            "get" -> {
                val url: String? = call.argument<String>("url");
                val params: String? = call.argument<String>("params")
                if (TextUtils.isEmpty(url)) {
                    result.error("-1", "url is empty", null)
                    return
                }
                val builder = Request.Builder()
                val httpUrl = url!!.toHttpUrl()
                val httpUrlBuilder = httpUrl.newBuilder()
                if (!TextUtils.isEmpty(params)) {
                    val jsonObject = JSONObject(params!!)
                    val names = jsonObject.names()
                    if (names != null && names.length() > 0) {
                        for (i in 0 until names.length()) {
                            val key = names.optString(i)
                            val value = jsonObject.opt(key)?.toString() ?: ""
                            httpUrlBuilder.addQueryParameter(key, value)
                        }
                    }
                }
                builder.get()
                builder.url(httpUrlBuilder.build())
                okHttpClient.newCall(builder.build()).enqueue(object : Callback {
                    override fun onFailure(call: Call, e: IOException) {
                        result.error("-2", "request onFailure", e.message)
                    }

                    @Throws(IOException::class)
                    override fun onResponse(call: Call, response: Response) {
                        if (response.code == 200) {
                            result.success(response.body!!.string())
                        } else {
                            result.error("${response.code}", "", null)
                        }
                    }
                })
            }
            else -> result.notImplemented()
        }
    }

    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        if (methodChannel == null) {
            methodChannel = MethodChannel(binding.binaryMessenger, channel)
            methodChannel?.setMethodCallHandler(this)
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        methodChannel?.setMethodCallHandler(null)
        methodChannel = null
    }


}