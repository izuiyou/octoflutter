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

package com.example.support.local;

import android.content.Context;
import android.net.Uri;
import android.text.TextUtils;

import com.example.support.remote.RemoteAmbientImpl;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import cn.xiaochuankeji.support.appbundle.AbsOctoFlutterActivity;
import cn.xiaochuankeji.support.appbundle.AssetsUtils;
import cn.xiaochuankeji.support.appbundle.BundleInfo;
import cn.xiaochuankeji.support.appbundle.DownloadCallback;
import cn.xiaochuankeji.support.appbundle.FetchConfigCallback;
import cn.xiaochuankeji.support.appbundle.FwkInfo;

/**
 * Created by liujian on 2023/3/6.
 */
public class LocalAndRemoteAmbientImpl extends RemoteAmbientImpl {

    private FwkInfo fwkInfo;
    private final Map<String, BundleInfo> bundleInfoMap = new HashMap<>();

    public LocalAndRemoteAmbientImpl(Context context) {
        super(context);
    }

    public void addBundleInfo(BundleInfo info) {
        bundleInfoMap.put(info.bundle, info);
    }

    public boolean isLocalBundle(String bundle) {
        return bundleInfoMap.containsKey(bundle);
    }

    public BundleInfo getBundleInfo(String bundle) {
        return bundleInfoMap.get(bundle);
    }

    public void setFwkInfo(FwkInfo fwkInfo) {
        this.fwkInfo = fwkInfo;
    }

    public void launch(Context context, Uri uri, Class<? extends AbsOctoFlutterActivity> clazz) {
        AbsOctoFlutterActivity.open(context, clazz, uri);
    }

    @Override
    public void fetchAppBundleInfo(String bundle, FetchConfigCallback<BundleInfo> fetchConfigCallback) {
        if (isLocalBundle(bundle)) {
            BundleInfo bundleInfo = getBundleInfo(bundle);
            if (bundleInfo != null) {
                fetchConfigCallback.onSuccess(bundleInfo);
                return;
            }
        }
        super.fetchAppBundleInfo(bundle, fetchConfigCallback);
    }

    @Override
    public void fetchFrameworkInfo(FetchConfigCallback<FwkInfo> fetchConfigCallback) {
        if (fwkInfo != null) {
            fetchConfigCallback.onSuccess(fwkInfo);
        } else {
            super.fetchFrameworkInfo(fetchConfigCallback);
        }
    }

    @Override
    public void downloadAppBundle(BundleInfo info, DownloadCallback downloadCallback) {
        if (isLocalBundle(info.bundle)) {
            BundleInfo bundleInfo = getBundleInfo(info.bundle);
            if (bundleInfo != null) {
                File bundleDir = new File(mContext.getFilesDir(), bundleInfo.bundle);
                File file = new File(bundleDir, bundleInfo.md5);

                if (!file.exists()) {
                    file.mkdirs();
                }

                if (Utils.safeAppbundle(file)) {
                    downloadCallback.onSuccess(file);
                } else {
                    try {
                        AssetsUtils.unzipAssetFolder(mContext.getAssets(), bundleInfo.bundle + ".zip", file.getAbsolutePath());
                        downloadCallback.onSuccess(file);
                    } catch (Exception e) {
                        e.printStackTrace();
                        downloadCallback.onFailure(e);
                    }
                }
                return;
            }
        }

        super.downloadAppBundle(info, downloadCallback);
    }

    @Override
    public void downloadFramework(FwkInfo fwkInfo, DownloadCallback downloadCallback) {
        if (TextUtils.isEmpty(fwkInfo.url)) {
            File frameworkDir = new File(mContext.getFilesDir(), "flutter_framework");
            File file = new File(frameworkDir, fwkInfo.md5);
            if (!file.exists()) {
                file.mkdirs();
            }

            if (Utils.safeAppbundle(file)) {
                downloadCallback.onSuccess(file);
            } else {
                try {
                    AssetsUtils.unzipAssetFolder(mContext.getAssets(), "framework.zip", file.getAbsolutePath());
                    downloadCallback.onSuccess(file);
                } catch (Exception e) {
                    e.printStackTrace();
                    downloadCallback.onFailure(e);
                }
            }
        } else {
            super.downloadFramework(fwkInfo, downloadCallback);
        }
    }
}