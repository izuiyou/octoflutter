### octoflutter cli

### Install

```bash
$ pnpm add -g @octoflutter/cli
```

### Usage

Options:
  -v, --version  output the version number
  -h, --help     display help for command

Commands:
  dev            build appbundle
  create <app>   create a template app

### Dev

```bash
$ octoflutter create <app>  create a template project named <app>
#octoflutter dev is usually used by octoflutter developer. if you start from template project, use pnpm dw or pnpm dm
$ pnpm dw                   build octoflutter for platform-web, the entrypoint "localhost:54321"
$ pnpm dm                   build octoflutter for platform-mobile, /build/output/app.zip
```
