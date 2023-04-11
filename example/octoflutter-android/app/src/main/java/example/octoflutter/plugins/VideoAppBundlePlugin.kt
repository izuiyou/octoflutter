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
import android.util.Log
import cn.xiaochuankeji.octoflutter.embedding.android.FlutterActivityAndFragmentDelegate
import cn.xiaochuankeji.octoflutter.embedding.android.FlutterActivityAndFragmentDelegate.Host
import cn.xiaochuankeji.octoflutter.embedding.engine.plugins.FlutterPlugin
import cn.xiaochuankeji.octoflutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding
import cn.xiaochuankeji.octoflutter.isolate.AppBundleMethodChannel
import cn.xiaochuankeji.octoflutter.isolate.AppBundlePlugin
import cn.xiaochuankeji.octoflutter.plugin.common.MethodCall
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel.MethodCallHandler

/**
 * Created by liujian on 2023/3/10.
 */
class VideoAppBundlePlugin : AppBundlePlugin {
    companion object {
        const val methodChannelName = "example.plugins/video"
        const val eventChannelName = "example.plugins/video_event"
    }

    private val bundleChannelMap: MutableMap<Int, VideoBundleChannel> = mutableMapOf()

    override fun onAttachAppBundle(
        bid: Int,
        binding: FlutterPlugin.FlutterPluginBinding?,
        host: FlutterActivityAndFragmentDelegate.Host?
    ) {
        bundleChannelMap[bid] = VideoBundleChannel(bid, binding, host)
    }

    override fun onDetachAppBundle(
        bid: Int,
        binding: FlutterPlugin.FlutterPluginBinding?,
        host: FlutterActivityAndFragmentDelegate.Host?
    ) {
        if (bundleChannelMap.containsKey(bid)) {
            bundleChannelMap.remove(bid)?.destroy()
        }
    }

    private class VideoBundleChannel(
        private val bid: Int,
        flutterPluginBinding: FlutterPluginBinding?,
        host: Host?
    ) :
        MethodCallHandler {
        private var flutterPluginBinding: FlutterPluginBinding?
        private var host: Host?
        private var channel: AppBundleMethodChannel?
        private val playerMap: MutableMap<Int, ExamplePlayer> = mutableMapOf()
        private val channelMap: MutableMap<Int, AppBundleMethodChannel> = mutableMapOf()

        init {
            this.flutterPluginBinding = flutterPluginBinding
            this.host = host
            channel = AppBundleMethodChannel(
                flutterPluginBinding!!.binaryMessenger,
                methodChannelName,
                bid
            )
            channel?.setMethodCallHandler(this)
        }

        override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
            when (call.method) {
                "create" -> {
                    var dataSource = call.argument<String>("asset")
                    val local = call.argument<Boolean>("local") ?: false
                    if (!TextUtils.isEmpty(dataSource)) {
                        if (local) {
                            val file = flutterPluginBinding!!.flutterAssets.getAssetFilePathByName(
                                bid, dataSource!!
                            )
                            dataSource = file.toURI().toString()
                        }
                        val entry = flutterPluginBinding!!.textureRegistry.createSurfaceTexture()
                        val name: String =
                            eventChannelName + "_" + entry.id() + "_"
                        val methodChannel = AppBundleMethodChannel(
                            flutterPluginBinding!!.binaryMessenger, name,
                            bid
                        )
                        val player = ExamplePlayer(
                            flutterPluginBinding!!.applicationContext,
                            entry,
                            dataSource,
                            local,
                            object : ExamplePlayer.VideoCallback {
                                override fun onReady() {
                                    methodChannel.invokeMethod("onReady", null)
                                }

                                override fun onEnd() {
                                    methodChannel.invokeMethod("onEnd", null)
                                }

                                override fun onError(msg: String?) {
                                    methodChannel.invokeMethod("onError", msg)
                                }
                            })
                        playerMap[entry.id()] = player
                        channelMap[entry.id()] = methodChannel
                        result.success(entry.id())
                    } else {
                        result.success(-1)
                    }
                }
                "value" -> {
                    if (call.hasArgument("textureId")) {
                        val number = call.argument<Number>("textureId")
                        if (number != null) {
                            val tid = number.toInt()
                            if (playerMap.containsKey(tid)) {
                                val player: ExamplePlayer? = playerMap[tid]
                                if (player != null) {
                                    result.success(player.toJson().toString())
                                } else {
                                    result.success(null)
                                }
                            } else {
                                result.success(null)
                            }
                        } else {
                            result.success(null)
                        }
                    } else {
                        result.success(null)
                    }
                }
                else -> if (call.hasArgument("textureId")) {
                    val number = call.argument<Number>("textureId")
                    if (number != null) {
                        val tid = number.toInt()
                        if (playerMap.containsKey(tid)) {
                            val player: ExamplePlayer? = playerMap[tid]
                            if (player != null) {
                                call(call, result, player, tid)
                                result.success(true)
                            } else {
                                result.success(false)
                            }
                        } else {
                            result.success(false)
                        }
                    } else {
                        result.success(false)
                    }
                } else {
                    result.success(false)
                }
            }
        }

        private fun call(
            call: MethodCall,
            result: MethodChannel.Result,
            player: ExamplePlayer?,
            tid: Int
        ) {
            when (call.method) {
                "play" -> {
                    player?.play()
                    result.success(true)
                }
                "pause" -> {
                    player?.pause()
                    result.success(true)
                }
                "dispose" -> {
                    player?.dispose()
                    playerMap.remove(tid)
                    channelMap.remove(tid)
                    result.success(true)
                }
                "loop" -> {
                    val loop = call.argument("loop") ?: false
                    player?.setLooping(loop)
                    result.success(true)
                }
                "volume" -> {
                    player?.setVolume(call.argument("volume") ?: 0.5)
                    result.success(true)
                }
                "seekTo" -> {
                    val p: Double = call.argument("position") ?: 0.0
                    player?.seekTo(p.toLong())
                    result.success(true)
                }
                else -> result.notImplemented()
            }
        }

        fun destroy() {
            channel?.setMethodCallHandler(null)
            channel = null
            for (player in playerMap.values) {
                player.dispose()
            }
            playerMap.clear()
            channelMap.clear()
            flutterPluginBinding = null
            host = null
        }
    }


}