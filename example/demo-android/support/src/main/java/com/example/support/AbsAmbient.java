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

import android.content.Context;
import android.os.Handler;
import android.os.HandlerThread;

import com.facebook.drawee.backends.pipeline.Fresco;

import cn.xiaochuankeji.support.appbundle.AbsBundleSupport;
import cn.xiaochuankeji.support.appbundle.Ambient;
import cn.xiaochuankeji.support.appbundle.DevEnvSupplier;

/**
 * Created by liujian on 2023/3/6.
 */
public abstract class AbsAmbient implements Ambient {

    protected Context mContext;
    protected HandlerThread mThread;
    protected Handler mHandler;

    public AbsAmbient(Context context) {
        this.mContext = context;
        this.mThread = new HandlerThread("ambient");
        this.mThread.start();
        this.mHandler = new Handler(mThread.getLooper());
        Fresco.initialize(context);
    }

    @Override
    public void executeOnWorkThread(Runnable runnable) {
        mHandler.post(runnable);
    }

    @Override
    public DevEnvSupplier newSupplier() {
        if (com.example.support.BuildConfig.DEBUG) {
            return new AppBundleDevSupplier();
        }
        return null;
    }

    @Override
    public AbsBundleSupport newInstance() {
        return new AppBundleSupportImpl();
    }

    public void destroy() {
        if (mHandler != null) {
            mHandler.getLooper().quitSafely();
            mHandler = null;
        }
    }

}