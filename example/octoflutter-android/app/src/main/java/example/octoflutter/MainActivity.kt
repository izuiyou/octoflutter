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

import android.content.DialogInterface
import android.content.DialogInterface.OnClickListener
import android.content.SharedPreferences
import android.os.Bundle
import android.text.TextUtils
import android.widget.EditText
import android.widget.ProgressBar
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import cn.xiaochuankeji.support.appbundle.EngineMgr
import cn.xiaochuankeji.support.appbundle.FetchConfigCallback
import com.example.support.local.LocalAndRemoteAmbientImpl
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private lateinit var sharedPreferences: SharedPreferences
    var localIp: String? = null
    private lateinit var ambient: LocalAndRemoteAmbientImpl

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initialize()
        bindEvent()
    }

    private fun bindEvent() {
        tv_settings.setOnClickListener {
            showEditLocalIpAlert()
        }

        tv_local_appbundle.setOnClickListener {
            ambient.launch(this, LocalConfig.kBundleOctopack, AppBundleActivity::class.java)
//            ambient.launch(this, LocalConfig.kBundleFlutter, AppBundleActivity::class.java)
        }

        tv_remote_appbundle.setOnClickListener {
            if (TextUtils.isEmpty(localIp)) {
                showEditLocalIpAlert()
            } else {
                val builder: AlertDialog.Builder = AlertDialog.Builder(this)
                builder.setTitle("loading...")
                builder.setView(ProgressBar(this))
                val dialog = builder.show()
                ambient.launch(this, AppBundleActivity::class.java, object :
                    FetchConfigCallback<String> {
                    override fun onSuccess(p0: String?) {
                        dialog.dismiss()
                    }

                    override fun onFailure(p0: Throwable?) {
                        runOnUiThread {
                            dialog.dismiss()
                            Toast.makeText(applicationContext, p0?.message, Toast.LENGTH_SHORT)
                                .show()
                        }
                    }
                })
            }
        }

    }

    private fun initialize() {
        sharedPreferences = applicationContext.getSharedPreferences("local_settings", MODE_PRIVATE)
        localIp = sharedPreferences.getString("ip", null)
        ambient =
            LocalAndRemoteAmbientImpl(applicationContext)
        ambient.setLocalIp(localIp)
        LocalConfig.injectLocalConfig(ambient)
        EngineMgr.getInstance().setup(applicationContext, ambient, true)
    }

    fun updateSharedPreferences(ip: String) {
        localIp = ip
        val editor = sharedPreferences.edit();
        editor?.putString("ip", ip)
        editor?.apply()
        ambient.setLocalIp(localIp)
    }

    private fun showEditLocalIpAlert() {
        val builder: AlertDialog.Builder = AlertDialog.Builder(this)
        builder.setTitle("Input Ip")
        val et = EditText(this)
        et.hint = "ip of local development machine"
        if (localIp != null) {
            et.setText(localIp)
        }
        builder.setView(et)
        builder.setPositiveButton("confirm", object : OnClickListener {
            override fun onClick(dialog: DialogInterface?, which: Int) {
                val text = et.text.toString().trim()
                if (TextUtils.isEmpty(text)) {
                    Toast.makeText(
                        applicationContext,
                        "ip of local development machine is necessary",
                        Toast.LENGTH_SHORT
                    ).show()
                    return
                }

                updateSharedPreferences(text)
                dialog?.dismiss()
            }

        })
        builder.show();
    }


    override fun onDestroy() {
        super.onDestroy()
        EngineMgr.getInstance().destroy()
        ambient?.destroy()
    }
}