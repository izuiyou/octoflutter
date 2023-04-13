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

import android.view.View;

import cn.xiaochuankeji.v8.V8;

import java.util.concurrent.atomic.AtomicInteger;

import cn.xiaochuankeji.j2v8.devsupport.DevContext;
import cn.xiaochuankeji.j2v8.devsupport.DevEnvProvider;
import cn.xiaochuankeji.octoflutter.Log;
import cn.xiaochuankeji.octoflutter.embedding.android.FlutterActivityAndFragmentDelegate;
import cn.xiaochuankeji.octoflutter.embedding.android.FlutterView;
import cn.xiaochuankeji.octoflutter.embedding.engine.FlutterEngine;
import cn.xiaochuankeji.support.appbundle.DevEnvSupplier;

/**
 * Created by liujian on 2023/3/6.
 */
public class AppBundleDevSupplier implements DevEnvSupplier, DevEnvProvider {

    private final static AtomicInteger index = new AtomicInteger(1);
    private FlutterEngine engine;
    private DevContext devContext;

    @Override
    public void onV8Create(V8 v8) {
        devContext = new DevContext(v8, this);
        int port = 54323 + index.getAndIncrement();
        Log.e("AppBundleDevSupplier", "port:" + port);
        devContext.setupWs("ws://localhost:" + port);
        Log.e("AppBundleDevSupplier", "If you want to debug js on mobile with Chrome Dev Tools, execute in Terminal from ./dev [ sh octo_flutter_dev.sh " + port + " ] with USB connected.");
    }

    @Override
    public void onV8Destroy() {
        if (devContext != null) {
            devContext.destroy();
            devContext = null;
        }
    }

    @Override
    public void onEngineCreate(FlutterEngine engine) {
        this.engine = engine;
    }

    @Override
    public void runOnV8Thread(Runnable runnable) {
        engine.getIsolate().runOnUIThread(runnable);
    }

    @Override
    public View rootView() {
        FlutterActivityAndFragmentDelegate.Host host = engine.getHost();
        if (host != null) {
            FlutterView flutterView = host.getFlutterView();
            if (flutterView != null) {
                return flutterView.getFlutterTextureView();
            }
        }
        return null;
    }
}