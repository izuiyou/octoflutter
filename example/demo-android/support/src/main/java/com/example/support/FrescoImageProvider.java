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

import android.net.Uri;

import com.facebook.common.memory.PooledByteBuffer;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.datasource.DataSubscriber;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.core.DefaultExecutorSupplier;
import com.facebook.imagepipeline.decoder.ImageDecoder;
import com.facebook.imagepipeline.image.CloseableImage;
import com.facebook.imagepipeline.image.EncodedImage;
import com.facebook.imagepipeline.image.QualityInfo;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import java.util.Map;

import cn.xiaochuankeji.octoflutter.image.ImageDataCallback;
import cn.xiaochuankeji.octoflutter.image.ImageDataProvider;

/**
 * Created by liujian on 2023/3/6.
 */
public class FrescoImageProvider implements ImageDataProvider {

    final DefaultExecutorSupplier supplier = new DefaultExecutorSupplier(4);

    @Override
    public void getImageData(Uri uri, int width, int height, Map<String, Object> headers, final ImageDataCallback callback) {
        ImageRequestBuilder requestBuilder = ImageRequestBuilder.newBuilderWithSource(uri);
        if (width != 0 && height != 0) {
            requestBuilder.setResizeOptions(new ResizeOptions(width, height));
        }
        ImageDecodeOptionsBuilder optionsBuilder = new ImageDecodeOptionsBuilder();
        optionsBuilder.setCustomImageDecoder(new ImageDecoder() {
            @Override
            public CloseableImage decode(EncodedImage encodedImage, int length, QualityInfo qualityInfo, ImageDecodeOptions options) {
                final PooledByteBuffer input = encodedImage.getByteBufferRef().get();
                if (input.getByteBuffer() != null) {
                    callback.onSuccess(input.getByteBuffer().array());
                } else {
                    byte[] bytes = new byte[input.size()];
                    input.read(0, bytes, 0, input.size());
                    callback.onSuccess(bytes);
                }
                return null;
            }
        });
        requestBuilder.setImageDecodeOptions(new ImageDecodeOptions(optionsBuilder));

        Fresco.getImagePipeline().fetchDecodedImage(requestBuilder.build(), null)
                .subscribe(new DataSubscriber<CloseableReference<CloseableImage>>() {
                    @Override
                    public void onNewResult(DataSource<CloseableReference<CloseableImage>> dataSource) {
                    }

                    @Override
                    public void onFailure(DataSource<CloseableReference<CloseableImage>> dataSource) {
                        String msg = "";
                        if (dataSource != null && dataSource.getFailureCause() != null) {
                            msg = dataSource.getFailureCause().getLocalizedMessage();
                        }
                        callback.onFailure(msg);
                    }

                    @Override
                    public void onCancellation(DataSource<CloseableReference<CloseableImage>> dataSource) {
                    }

                    @Override
                    public void onProgressUpdate(DataSource<CloseableReference<CloseableImage>> dataSource) {
                    }
                }, supplier.forBackgroundTasks());
    }


}