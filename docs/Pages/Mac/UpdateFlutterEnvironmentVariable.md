# macOS Catalina 中全局更新 flutter 环境变量

1.

下载以下安装包来获取 stable Flutter SDK：

[flutter_macos_v1.12.13+hotfix.8-stable.zip](https://storage.flutter-io.cn/flutter_infra/releases/stable/macos/flutter_macos_v1.12.13+hotfix.8-stable.zip)

想要获取到其他版本的安装包，请参阅 [SDK 版本列表](https://flutter.cn/docs/development/tools/sdk/releases) 页面。

2.

将文件解压到目标路径，比如：

```
cd ~/development
```

3.

配置  `flutter` 的 PATH 环境变量

```
export PATH="$PATH:`pwd`/flutter/bin"
```

这个命令配置了 `PATH` 环境变量，且只会在你 **当前** 命令行窗口中生效。

4.

更新 PATH 环境变量

使用下面设置让这个配置永久生效，这样就可以在任意一个命令行会话中使用 `flutter` 命令了。

1.

首先获取并记录放置 Flutter SDK 的路径，你将要在第 3 步中用到它。

2.

修改 `$HOME/.zshrc`文件，在编辑器输入以下代码：

```
vim $HOME/.zshrc
```

按`i`键进入编辑模式，在文件中增加下列这行命令，并将其中的 `[PATH_TO_FLUTTER_GIT_DIRECTORY]` 更改为你第一步获取到的路径：

```
export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"
```

为 Flutter 设置社区主镜像，用于在中国网络环境下使用，需要增加下列命令：

```
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

按`esc` 退出编辑模式，在大写模式下输入`Q`，然后切换为小写模式，输入`wq`保存编辑内容。

3.

运行以下命令刷新当前命令行窗口：

```
source $HOME/.zshrc
```

4.

通过运行以下命令来验证 `flutter/bin` 文件夹是否已经添加到 PATH 环境变量中：

```
echo $PATH
```

验证 `flutter` 命令是否可用，可以执行下面的命令检测：

```
which flutter
```

5.

运行 flutter doctor 命令

通过运行以下命令来查看当前环境是否需要安装其他的依赖：

```
flutter doctor
```

这个命令会检查你当前的配置环境，并在命令行窗口中生成一份报告。安装 Flutter 会附带安装 Dart SDK，所以不需要再对 Dart 进行单独安装。你需要仔细阅读上述命令生成的报告，看看别漏了一些需要安装的依赖，或者需要之后执行的命令。

当你安装了任一缺失部分的依赖后，可以再次运行 `flutter doctor` 命令来确认是否成功安装。
