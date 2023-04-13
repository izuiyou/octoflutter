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

package example.octoflutter.platformview

import android.content.Context
import android.graphics.Color
import android.os.Build
import android.util.Log
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.EditText
import cn.xiaochuankeji.octoflutter.isolate.AppBundleMethodChannel
import cn.xiaochuankeji.octoflutter.plugin.common.BinaryMessenger
import cn.xiaochuankeji.octoflutter.plugin.common.MethodCall
import cn.xiaochuankeji.octoflutter.plugin.common.MethodChannel
import cn.xiaochuankeji.octoflutter.plugin.editing.FixEditablePlatformView
import cn.xiaochuankeji.octoflutter.plugin.platform.PlatformView

/**
 * Created by liujian on 2023/3/13.
 */
class ExamplePlatformView : PlatformView, MethodChannel.MethodCallHandler {

    private val context: Context?
    private val messenger: BinaryMessenger
    private val bid: Int
    private val etv: EditText
    private var container: FixEditablePlatformView? = null
    private val channel: AppBundleMethodChannel

    constructor(context: Context?, messenger: BinaryMessenger, bid: Int, viewId: Int, args: Any?) {
        this.context = context
        this.messenger = messenger
        this.bid = bid
        this.etv = EditText(context!!)
        this.etv.setText("ExamplePlatformView")
        this.etv.setTextColor(Color.YELLOW)
        this.etv.setBackgroundColor(Color.GREEN)
        this.etv.isFocusableInTouchMode = true
        this.etv.isClickable = true
        this.etv.isFocusable = true
        this.etv.isEnabled = true
        if (needFixEdit()) {
            this.container = FixEditablePlatformView(context)
            this.container?.isFocusableInTouchMode = true
            this.container?.isClickable = true
            this.container?.isFocusable = true
            this.container?.isEnabled = true
            this.container?.addView(etv)
        } else {
            this.etv.setOnKeyListener { v, keyCode, event ->
                this.etv.onKeyDown(keyCode, event)
                true
            }
        }

        Log.e("ExamplePlatformView", "viewId:$viewId args:$args")

        channel = AppBundleMethodChannel(messenger, "my_platform_view", bid)
        channel.setMethodCallHandler(this)
    }


    private fun needFixEdit(): Boolean {
        //由于目前OctoFlutter Android侧采用的是VirtualDisplay方案去实现PlatformView，继承了Flutter原有的一些问题，
        //为处理某些机型上存在键盘无法弹出的问题，额外提供FixEditablePlatformView强制弹出，此处并未做全面的兼容测试，如有含EditText的PlatformView需求，自行做兼容测试。
        return Build.VERSION.SDK_INT <= Build.VERSION_CODES.P
    }

    override fun getView(): View {
        return if (needFixEdit()) {
            container!!
        } else {
            etv
        }
    }

    var flutterView: View? = null

    override fun onFlutterViewAttached(flutterView: View) {
        super.onFlutterViewAttached(flutterView)
        this.flutterView = flutterView
        if (needFixEdit()) {
            container?.setFlutterView(flutterView)
        }
    }

    override fun dispose() {
        this.channel.setMethodCallHandler(null)
        val mImm = context
            ?.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        mImm.hideSoftInputFromWindow(this.flutterView!!.windowToken, 0)
        this.flutterView = null
    }

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "getText" -> {
                val text = etv.text.toString()
                result.success(text)
            }
            else -> result.notImplemented()
        }
    }

}