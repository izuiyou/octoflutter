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

package com.example.support;

import android.util.Log;

import androidx.annotation.NonNull;
import cn.xiaochuankeji.octoflutter.OctoJsWatcher;
import cn.xiaochuankeji.octoflutter.image.ImageDataProvider;
import cn.xiaochuankeji.octoflutter.webapi.http.HttpCallProvider;
import cn.xiaochuankeji.support.appbundle.AbsBundleSupport;
import cn.xiaochuankeji.support.network.http_xml.DefaultHttpCallProviderImpl;

/**
 * Created by liujian on 2023/3/6.
 */
public class AppBundleSupportImpl extends AbsBundleSupport {

    private HttpCallProvider httpCallProvider = new DefaultHttpCallProviderImpl();
    private ImageDataProvider imageDataProvider = new FrescoImageProvider();
    private OctoJsWatcher watcher = new OctoJsWatcher() {
        @Override
        public void onJsLog(String s) {
            Log.e("AppBundleSupportImpl", s);
        }

        @Override
        public void onUnCatchException(Throwable throwable) {
            Log.e("AppBundleSupportImpl", "onUnCatchException", throwable);
        }
    };

    @NonNull
    @Override
    public HttpCallProvider httpCallProvider() {
        return httpCallProvider;
    }

    @NonNull
    @Override
    public ImageDataProvider imageDataProvider() {
        return imageDataProvider;
    }

    @Override
    public OctoJsWatcher jsWatcher() {
        return watcher;
    }

}