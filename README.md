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
  * run project demo-android/demo-ios from example.
  * run mobile app and config the ip of development machine.
  * click "Launch Remote AppBundle" button in app.

### Documentation
* [OctoFlutter Documentation](./doc/en/documentation.md)
* [More About OctoFlutter](./doc/en/octoflutter.md)
* [FAQ && ATTENTION](./doc/en/question.md)
* [Roadmap](./doc/en/roadmap.md)

### Practice
<img src="./doc/example_1.jpg" width = 200 >  <img src="./doc/example_2.jpg" width = 200>


### Open Source

Currently, The open source code mainly is Glue.

### Contact Us

email: octoflutter@xiaochuankeji.cn

### License

OctoFlutter is based on the [BSD] (./LICENSE) open source license agreement.