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

import android.content.Context
import android.net.Uri
import android.view.Surface
import cn.xiaochuankeji.octoflutter.embedding.engine.renderer.TextureRegistry.SurfaceTextureEntry
import com.google.android.exoplayer2.*
import com.google.android.exoplayer2.Player.REPEAT_MODE_ALL
import com.google.android.exoplayer2.Player.REPEAT_MODE_OFF
import org.json.JSONObject

/**
 * Created by liujian on 2023/3/10.
 */
class ExamplePlayer {
    private val context: Context
    private var exoPlayer: ExoPlayer? = null
    private var surface: Surface? = null
    private var textureEntry: SurfaceTextureEntry? = null
    private var dataSource: String? = null
    private var local = false
    private var isInitialized = false
    private var callback: VideoCallback? = null

    constructor(
        context: Context,
        textureEntry: SurfaceTextureEntry?,
        dataSource: String?,
        local: Boolean,
        callback: VideoCallback?
    ) {
        this.context = context
        this.textureEntry = textureEntry
        this.dataSource = dataSource
        this.local = local
        this.callback = callback
        setup()
    }


    private fun setup() {
        exoPlayer = ExoPlayer.Builder(context).build()
        val mediaItem = MediaItem.fromUri(Uri.parse(dataSource))
        exoPlayer?.setMediaItem(mediaItem)
        exoPlayer?.prepare()
        surface = Surface(textureEntry!!.surfaceTexture())
        exoPlayer?.setVideoSurface(surface)
        setAudioAttributes(exoPlayer)
        exoPlayer?.addListener(object : Player.Listener {
            override fun onPlayerStateChanged(playWhenReady: Boolean, playbackState: Int) {
                if (playbackState == Player.STATE_READY) {
                    if (!isInitialized) {
                        isInitialized = true
                        if (callback != null) {
                            callback!!.onReady()
                        }
                    }
                } else if (playbackState == Player.STATE_ENDED) {
                    if (callback != null) {
                        callback!!.onEnd()
                    }
                }
            }

            fun onPlayerError(error: ExoPlaybackException) {
                if (callback != null) {
                    callback!!.onError(error.message)
                }
            }
        })
    }

    private fun setAudioAttributes(exoPlayer: ExoPlayer?) {
        exoPlayer?.setAudioAttributes(
            com.google.android.exoplayer2.audio.AudioAttributes.Builder()
                .setContentType(C.CONTENT_TYPE_MUSIC)
                .setUsage(C.USAGE_MEDIA).build(),
            false
        )
    }

    interface VideoCallback {
        fun onReady()
        fun onEnd()
        fun onError(msg: String?)
    }


    fun play() {
        exoPlayer?.playWhenReady = true
    }

    fun pause() {
        exoPlayer?.playWhenReady = false
    }

    fun setLooping(value: Boolean) {
        exoPlayer?.repeatMode = if (value) REPEAT_MODE_ALL else REPEAT_MODE_OFF
    }

    fun setVolume(value: Double) {
        val bracketedValue = Math.max(0.0, Math.min(1.0, value)).toFloat()
        exoPlayer?.volume = bracketedValue
    }

    fun seekTo(location: Long) {
        exoPlayer?.seekTo(location)
    }

    fun dispose() {
        if (isInitialized) {
            exoPlayer?.stop()
        }
        textureEntry?.release()
        surface?.release()
        exoPlayer?.release()
        textureEntry = null
        surface = null
        exoPlayer = null
    }

    fun toJson(): JSONObject {
        val jsonObject = JSONObject()
        try {
            val duration = (exoPlayer?.duration ?: 0).toDouble()
            jsonObject.put("duration", duration)
            val position = (exoPlayer?.currentPosition ?: 0).toDouble()
            jsonObject.put("position", position)
            val videoFormat: Format? = exoPlayer?.videoFormat
            var width: Int = videoFormat?.width ?: 0
            var height: Int = videoFormat?.height ?: 0
            val rotationDegrees: Int = videoFormat?.rotationDegrees ?: 0
            // Switch the width/height if video was taken in portrait mode
            if (rotationDegrees == 90 || rotationDegrees == 270) {
                width = exoPlayer?.videoFormat?.height ?: 0
                height = exoPlayer?.videoFormat?.width ?: 0
            }
            jsonObject.put("width", width)
            jsonObject.put("height", height)
            jsonObject.put("playing", exoPlayer?.isPlaying ?: false)
            jsonObject.put("loop", exoPlayer?.repeatMode == REPEAT_MODE_ALL)
            val volume = (exoPlayer?.volume ?: 0).toDouble()
            jsonObject.put("volume", volume)
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return jsonObject
    }

}