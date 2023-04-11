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

package com.example.support.remote;

import android.content.Context;
import android.net.Uri;
import android.text.TextUtils;

import com.example.support.AbsAmbient;
import com.example.support.local.Utils;

import org.json.JSONObject;

import java.io.File;
import java.io.IOException;

import cn.xiaochuankeji.support.appbundle.AbsOctoFlutterActivity;
import cn.xiaochuankeji.support.appbundle.BundleConfig;
import cn.xiaochuankeji.support.appbundle.BundleInfo;
import cn.xiaochuankeji.support.appbundle.DownloadCallback;
import cn.xiaochuankeji.support.appbundle.FetchConfigCallback;
import cn.xiaochuankeji.support.appbundle.FwkInfo;
import cn.xiaochuankeji.support.network.NetworkConstants;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Created by liujian on 2023/3/6.
 */
public class RemoteAmbientImpl extends AbsAmbient {
    private static OkHttpClient sClient = new OkHttpClient();

    private String mLocalIp;

    public RemoteAmbientImpl(Context context) {
        super(context);
    }

    private String mockJsonAddress() {
        if (!TextUtils.isEmpty(mLocalIp)) {
            return "http://" + mLocalIp + ":54322/output/mock.json";
        }
        return "http://localhost:54322/output/mock.json";
    }

    public void setLocalIp(String ip) {
        this.mLocalIp = ip;
    }

    public void launch(Context context, Class<? extends AbsOctoFlutterActivity> clazz, FetchConfigCallback<String> callback) {
        Request.Builder builder = new Request.Builder();
        builder.method(NetworkConstants.METHOD_GET, null);
        builder.url(mockJsonAddress());
        Call call = sClient.newCall(builder.build());
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                callback.onFailure(e);
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.code() == 200) {
                    byte[] bytes = response.body().bytes();
                    String msg = new String(bytes);
                    try {
                        JSONObject object = new JSONObject(msg);
                        JSONObject data = object.optJSONObject("data");
                        if (data != null) {
                            String bundle = data.optString("bundle");
                            Uri uri = Uri.parse("flutter://" + bundle + "/main");
                            callback.onSuccess(bundle);
                            AbsOctoFlutterActivity.open(context, clazz, uri);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        callback.onFailure(e);
                    }
                } else {
                    callback.onFailure(new IllegalStateException("请求失败"));
                }
            }
        });
    }


    @Override
    public void fetchAppBundleInfo(String bundle, FetchConfigCallback<BundleInfo> callback) {
        Request.Builder builder = new Request.Builder();
        builder.method(NetworkConstants.METHOD_GET, null);
        builder.url(mockJsonAddress());
        Call call = sClient.newCall(builder.build());
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                callback.onFailure(e);
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.code() == 200) {
                    byte[] bytes = response.body().bytes();
                    String msg = new String(bytes);
                    try {
                        JSONObject object = new JSONObject(msg);
                        JSONObject data = object.optJSONObject("data");
                        if (data != null) {
                            String bundle = data.optString("bundle");
                            String md5 = data.optString("md5");
                            String url = data.optString("url");
                            int mode = data.optInt("mode");

                            FwkInfo frameworkInfo = null;
                            JSONObject dataF = data.optJSONObject("framework");
                            if (dataF != null) {
                                String furl = dataF.optString("url");
                                String fmd5 = dataF.optString("md5");
                                int fv = dataF.optInt("fv");
                                int ev = dataF.optInt("ev");
                                frameworkInfo = new FwkInfo(furl, fmd5, fv, ev);
                            }

                            BundleConfig config = new BundleConfig();
                            JSONObject dataC = data.optJSONObject("config");
                            if (dataC != null) {
                                config.fullScreen = dataC.optBoolean("fullScreen");
                                config.orientation = dataC.optString("orientation");
                            }

                            BundleInfo bundleInfo = new BundleInfo(url, md5, bundle, mode, frameworkInfo, config);
                            callback.onSuccess(bundleInfo);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        callback.onFailure(e);
                    }
                } else {
                    callback.onFailure(new Exception(response.message()));
                }
            }
        });
    }

    @Override
    public void fetchFrameworkInfo(FetchConfigCallback<FwkInfo> callback) {
        Request.Builder builder = new Request.Builder();
        builder.method(NetworkConstants.METHOD_GET, null);
        builder.url(mockJsonAddress());
        Call call = sClient.newCall(builder.build());
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                callback.onFailure(e);
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.code() == 200) {
                    byte[] bytes = response.body().bytes();
                    String msg = new String(bytes);
                    try {
                        JSONObject object = new JSONObject(msg);
                        JSONObject data = object.optJSONObject("data");
                        if (data != null) {
                            FwkInfo frameworkInfo = null;
                            JSONObject dataF = data.optJSONObject("framework");
                            if (dataF != null) {
                                String furl = dataF.optString("url");
                                String fmd5 = dataF.optString("md5");
                                int fv = dataF.optInt("fv");
                                int ev = dataF.optInt("ev");
                                frameworkInfo = new FwkInfo(furl, fmd5, fv, ev);
                            }
                            callback.onSuccess(frameworkInfo);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        callback.onFailure(e);
                    }
                } else {
                    callback.onFailure(new Exception(response.message()));
                }
            }
        });
    }

    @Override
    public void downloadAppBundle(BundleInfo info, DownloadCallback callback) {
        File bundleDir = new File(mContext.getFilesDir(), info.bundle);
        File file = new File(bundleDir, info.md5);
        if (!file.exists()) {
            file.mkdirs();
        }

        if (Utils.safeAppbundle(file)) {
            callback.onSuccess(file);
        } else {
            SimpleCallbackDownloader downloader = new SimpleCallbackDownloader(info.url, file, info.md5, callback);
            downloader.start();
        }
    }

    @Override
    public void downloadFramework(FwkInfo fwkInfo, DownloadCallback callback) {
        File frameworkDir = new File(mContext.getFilesDir(), "flutter_framework");

        File file = new File(frameworkDir, fwkInfo.md5);
        if (!file.exists()) {
            file.mkdirs();
        }

        if (Utils.safeFramework(file)) {
            callback.onSuccess(file);
        } else {
            SimpleCallbackDownloader downloader = new SimpleCallbackDownloader(fwkInfo.url, file, fwkInfo.md5, callback);
            downloader.start();
        }
    }


}