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

import com.liulishuo.okdownload.DownloadListener;
import com.liulishuo.okdownload.DownloadTask;
import com.liulishuo.okdownload.SpeedCalculator;
import com.liulishuo.okdownload.core.breakpoint.BlockInfo;
import com.liulishuo.okdownload.core.breakpoint.BreakpointInfo;
import com.liulishuo.okdownload.core.cause.EndCause;
import com.liulishuo.okdownload.core.cause.ResumeFailedCause;
import com.liulishuo.okdownload.core.listener.DownloadListener4WithSpeed;
import com.liulishuo.okdownload.core.listener.assist.Listener4SpeedAssistExtend;

import java.io.File;
import java.util.List;
import java.util.Map;

import cn.xiaochuankeji.support.appbundle.AssetsUtils;
import cn.xiaochuankeji.support.appbundle.DownloadCallback;

/**
 * Created by liujian on 2023/3/6.
 */
public class SimpleCallbackDownloader implements DownloadListener {

    private String url;
    private File file;
    private DownloadCallback callback;
    private DownloadTask task;

    public SimpleCallbackDownloader(String url, File file, String name, DownloadCallback callback) {
        this.url = url;
        this.file = file;
        this.callback = callback;
        task = new DownloadTask.Builder(url, file).setFilename(name).setPassIfAlreadyCompleted(false).build();
    }

    public void start() {
        task.enqueue(new DownloadListener4WithSpeed() {
            @Override
            public void taskStart(DownloadTask task) {

            }

            @Override
            public void connectStart(DownloadTask task, int blockIndex, Map<String, List<String>> requestHeaderFields) {

            }

            @Override
            public void connectEnd(DownloadTask task, int blockIndex, int responseCode, Map<String, List<String>> responseHeaderFields) {

            }

            @Override
            public void infoReady(DownloadTask task, BreakpointInfo info, boolean fromBreakpoint, Listener4SpeedAssistExtend.Listener4SpeedModel model) {

            }

            @Override
            public void progressBlock(DownloadTask task, int blockIndex, long currentBlockOffset, SpeedCalculator blockSpeed) {

            }

            @Override
            public void progress(DownloadTask task, long currentOffset, SpeedCalculator taskSpeed) {
                long total = task.getInfo().getTotalLength();
                long current = task.getInfo().getTotalOffset();
                if (total != 0) {
                    int p = (int) (current * 100 / total);
                    callback.onProgress(p);
                }
            }

            @Override
            public void blockEnd(DownloadTask task, int blockIndex, BlockInfo info, SpeedCalculator blockSpeed) {

            }

            @Override
            public void taskEnd(DownloadTask task, EndCause cause, Exception realCause, SpeedCalculator taskSpeed) {
                if (cause == EndCause.COMPLETED) {
                    try {
                        AssetsUtils.unzipFromFile(task.getFile(), file.getAbsolutePath());
                        callback.onSuccess(file);
                    } catch (Exception e) {
                        e.printStackTrace();
                        callback.onFailure(e);
                    }
                } else {
                    callback.onFailure(realCause);
                }
            }
        });
    }

    @Override
    public void taskStart(DownloadTask task) {

    }

    @Override
    public void connectTrialStart(DownloadTask task, Map<String, List<String>> requestHeaderFields) {

    }

    @Override
    public void connectTrialEnd(DownloadTask task, int responseCode, Map<String, List<String>> responseHeaderFields) {

    }

    @Override
    public void downloadFromBeginning(DownloadTask task, BreakpointInfo info, ResumeFailedCause cause) {
    }

    @Override
    public void downloadFromBreakpoint(DownloadTask task, BreakpointInfo info) {

    }

    @Override
    public void connectStart(DownloadTask task, int blockIndex, Map<String, List<String>> requestHeaderFields) {

    }

    @Override
    public void connectEnd(DownloadTask task, int blockIndex, int responseCode, Map<String, List<String>> responseHeaderFields) {

    }

    @Override
    public void fetchStart(DownloadTask task, int blockIndex, long contentLength) {

    }

    @Override
    public void fetchProgress(DownloadTask task, int blockIndex, long increaseBytes) {

    }

    @Override
    public void fetchEnd(DownloadTask task, int blockIndex, long contentLength) {

    }

    @Override
    public void taskEnd(DownloadTask task, EndCause cause, Exception realCause) {

    }
}