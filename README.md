<a href="https://octoflutter.izuiyou.com">
  <h1 align="center">
    <picture>
      <img alt="OctoFlutter" src="./doc/icon.png" height = "200px">
    </picture>
  </h1>
</a>

### OctoFlutter [简体中文](./doc/zh/README.md)

OctoFlutter is a hybrid of Flutter Web and Flutter Mobile, which use a new idea to implement dynamic flutter with bring it to JS/TS ecosystem, and the ability to dynamically load/unload various AppBundle.

### Architecture
<img src="./doc/octoflutter_architecture.png">

### Getting Started

1.create template project
   ```shell
   pnpm add -g @octoflutter/cli #pnpm installation https://pnpm.io/installation#using-npm
   pnpm octoflutter create app
   cd app
   pnpm install
   ```
2.preview UI in web mode
   ```shell
   pnpm dw #under app root dir
   ```
  The development server will be hosted at http://localhost:54321

3.build the AppBundle in mobile mode
   ```shell
   pnpm dm #under app root dir
   ```
4.load the AppBundle on mobile device
  * run project octoflutter-android/octoflutter-ios from example.
  * run mobile app and config the ip of development machine.
  * click "Launch Remote AppBundle" button.

### Documentation
* [More About OctoFlutter](./doc/en/octoflutter.md)
* [OctoFlutter Documentation](./doc/en/documentation.md)
* [FAQ && ATTENTION](./doc/en/question.md)

### Practice
<img src="./doc/example_1.jpg" width = 200 >  <img src="./doc/example_2.jpg" width = 200>


### Open Source

Currently, The open source code mainly is Glue, developers can use the full capabilities of OctoFlutter. For Engine source code, dart2js modification, multiple AppBundle shared engine designs, processing behind Glue, and flutter_web_sdk modification is not open source for the time being.

### Contact Us

email: octoflutter@xiaochuankeji.cn

### License

BSD 2-Clause License

Copyright (c) 2023, The OctoFlutter Authors. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.