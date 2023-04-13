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

import android.content.Context
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.text.TextUtils
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.TextView
import cn.xiaochuankeji.octoflutter.embedding.engine.FlutterEngine
import cn.xiaochuankeji.octoflutter.isolate.AppBundle
import cn.xiaochuankeji.support.appbundle.AbsOctoFlutterActivity
import cn.xiaochuankeji.support.appbundle.BundleConfig
import cn.xiaochuankeji.support.appbundle.BundleInfo
import cn.xiaochuankeji.support.appbundle.HotRestart
import com.wcl.notchfit.NotchFit
import com.wcl.notchfit.args.NotchScreenType
import example.octoflutter.plugins.PluginRegister


/**
 * Created by liujian on 2023/3/6.
 */
class AppBundleActivity : AbsOctoFlutterActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (BuildConfig.DEBUG) {
            val tv = TextView(this)
            tv.text = "Hot Restart"
            tv.alpha = 0.5f
            tv.setBackgroundColor(Color.CYAN)
            tv.setPadding(20, 20, 20, 20)
            val lp: FrameLayout.LayoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT,
                FrameLayout.LayoutParams.WRAP_CONTENT
            )
            lp.rightMargin = 50
            lp.topMargin = 200
            lp.gravity = Gravity.RIGHT
            (findViewById<ViewGroup>(android.R.id.content)).addView(tv, lp)
            tv.setOnClickListener { hotRestart() }
        }
    }

    private fun hotRestart() {
        if (engine != null && bid != -1) {
            HotRestart.restart(this)
        }
    }

    lateinit var splashScreenView: SplashScreenView

    override fun provideSplashScreenView(p0: Context, p1: Bundle?): View? {
        splashScreenView = SplashScreenView(p0, transparentMode)
        return splashScreenView
    }

    override fun onFetchAppBundleFailure(p0: Throwable?) {
        splashScreenView.failure(p0) {
            retry()
        }
    }

    override fun onAppBundleDownload(p0: Int) {
        splashScreenView.updateAppBundleProgress(p0)
    }

    override fun onFrameworkDownload(p0: Int) {
        splashScreenView.updateFrameworkProgress(p0)
    }

    override fun onNeedUpgradeApp() {
        splashScreenView.upgradeApp()
    }

    override fun onEngineReachLimit() {
        splashScreenView.reachLimit()
    }


    override fun onAppBundleCreate(p0: FlutterEngine?, p1: AppBundle?, p2: BundleInfo?) {
        PluginRegister.plugins4Engine(p0!!)
        PluginRegister.plugins4AppBundle(p1!!)
    }

    override fun onAppBundleRestore(p0: FlutterEngine?, p1: AppBundle?, p2: BundleInfo?) {
        PluginRegister.plugins4Engine(p0!!)
        PluginRegister.plugins4AppBundle(p1!!)
    }

    override fun adjustActivity(info: BundleConfig?) {
        super.adjustActivity(info)
        if (info != null) {
            if (info.fullScreen) {
                NotchFit.fit(
                    this, NotchScreenType.FULL_SCREEN
                ) {
                }
            }
        }
    }


    override fun onResume() {
        super.onResume()
        fixMi10()
    }

    var view: View? = null
    private fun fixMi10() {
        if (TextUtils.equals("mi 10", Build.MODEL?.toLowerCase())) {
            flutterView?.post {
                if (view == null) {
                    view = View(this)
                    flutterView?.addView(view)
                } else {
                    flutterView?.removeView(view)
                    view = null
                }
            }
        }
    }

}