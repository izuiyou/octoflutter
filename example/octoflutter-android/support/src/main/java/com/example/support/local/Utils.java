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

import java.io.File;

/**
 * Created by liujian on 2023/3/6.
 */
public class Utils {

    public static boolean safeFramework(File file) {
        boolean safeFramework = false;
        if (file.exists() && file.isDirectory()) {
            File octoFile = new File(file, "octo.js");
            File frameworkFile = new File(file, "framework.js");
            File libraryFile = new File(file, "library");
            if (octoFile.exists() && frameworkFile.exists()) {
                safeFramework = octoFile.length() > 0 && frameworkFile.length() > 0;
            }

            if (libraryFile.exists() && libraryFile.isDirectory()) {
                String[] arr = libraryFile.list();
                if (arr != null && arr.length > 0) {
                    for (String s : arr) {
                        if (s != null && s.endsWith(".js")) {
                            File f = new File(libraryFile, s);
                            safeFramework &= f.exists() && f.length() > 0;
                        }
                    }
                }
            }
        }
        return safeFramework;
    }

    public static boolean safeAppbundle(File file) {
        File bundleFile = new File(file, "app.js");
        return bundleFile.exists() && bundleFile.length() > 0;
    }


}