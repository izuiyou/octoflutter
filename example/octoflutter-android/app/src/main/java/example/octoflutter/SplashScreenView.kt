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

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.view.Gravity
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.TextView

/**
 * Created by liujian on 2023/3/6.
 */
@SuppressLint("CustomSplashScreen")
class SplashScreenView(context: Context?) : LinearLayout(context) {

    private val pb: ProgressBar
    private val tv: TextView

    init {
        orientation = VERTICAL
        gravity = Gravity.CENTER
        pb = ProgressBar(context)
        tv = TextView(context)
        tv.textSize = 15.0f
        tv.setTextColor(Color.BLACK)
        tv.gravity = Gravity.CENTER
        addView(pb)
        addView(tv)
    }

    var pa = -1
    var pf = -1

    fun updateAppBundleProgress(progress: Int) {
        this.pa = progress
        this.updateProgressText()
    }

    fun updateFrameworkProgress(progress: Int) {
        this.pf = progress
        this.updateProgressText()
    }

    private fun updateProgressText() {
        var tip = "";
        if (pa != -1) {
            tip += "AppBundle Download Progress:$pa% \n"
        }
        if (pf != -1) {
            tip += "Framework Download Progress:$pf%"
        }
        tv.text = tip
        tv.setOnClickListener { }
    }

    fun failure(t: Throwable?, l: OnClickListener) {
        tv.text = t?.message
        tv.setOnClickListener(l)
    }

    fun upgradeApp() {
        tv.text =
            "You Need Upgrade App Engine Version, Not Match With The Engine Version Of AppBundle Or Framework"
        tv.setOnClickListener { }
    }

    fun reachLimit() {
        tv.text =
            "Too Many Shared Mode Engine Running"
        tv.setOnClickListener { }
    }
}