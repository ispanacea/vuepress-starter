# Git 快速入门及常用命令

## Git 安装

### Windows 下安装

1. 从 [Git 官网](https://git-scm.com/downloads) 上下载 Git 客户端并按提示完成安装，推荐使用默认选项完成安装。
2. 完成安装后即可使用鼠标右键调出 Git Bash 终端，开始您的 Git 之旅。

### Linux 下安装

在 Linux 上安装预编译好的 Git 二进制安装包，可以直接用系统提供的包管理工具。

- 在 Fedora/Centos 上用 yum 安装：`yum install git-core`
- 在 Ubuntu/Debian 上可以用 apt-get 安装：`apt-get install git`

### Mac 下安装

新版 Mac OS 自带 Git，在终端输入：`git --version`可以查看当前 Git 版本。

## 用户信息设置

安装完 Git 后应该及时设置你的用户名称与邮件地址，此后每次 Git 的提交都会使用这些信息。在 Git 终端输入一下命令即可设置你的用户信息。

```bash
git config --global user.name "你的名称"
git config --global user.email "你的邮箱"
```

> 在 Git 中配置的用户信息是可以自定义的，在这里建议直接填写为 GitHub 用户名和注册邮箱。

## 使用 Git 实践代码推拉

### 克隆远程仓库代码

在合适的地方创建一个新文件夹 「ExampleProject」，在里面运行 Git 终端，输入 `git init` 命令完成本地仓库初始化。

### 修改文件

在文件夹中新建 `README.md` 和 `learnGit.txt` 文件，在`learnGit.txt`中写入 `I'm learning git.`（当然也可以自由发挥）这句话并保存。

### 跟踪文件 (git add)

创建文件和修改文件后需要添加进仓库并命令 Git 开始跟踪文件。您可以一次性把单个文件或多个文件添加到仓库都可以，用到的命令都是 `git add`。

**添加一个文件**时直接在终端输入 `git add`后面空一格输入完整的文件名（包含后缀，如.txt）:

```bash
$ git add README.md
```

**添加多个文件**也类似，`git add`后面空格输入完整的文件名，文件名之间用空格分隔：

```bash
$ git add README.md learnGit.txt
```

如果想一次性跟踪**所有文件**，则可以直接在终端输入`git add .` ，注意末尾的`.`不要遗漏。

### 提交文件 (git commit)

用`git commit`命令把文件提交到仓库，一次性会提交所有你已经添加的文件：

```bash
git commit -m "wrote a readme and a learn_git file"
[master (root-commit) 7c57f05] wrote a readme and a learn_git file
 2 files changed, 2 insertions(+)
 create mode 100644 learn_git.txt
 create mode 100644 readme.txt
```

提交命令为`git commit`，`-m`后面引号中的内容是你的提交说明，下面几行是终端的返回结果。养成每次提交文件时附上变更说明的习惯，以便清楚地把控提交了什么样的修改。

### 推送文件到远程仓库 (git push)

在终端运行命令

```bash
git remote add origin 你的仓库链接    #根据 Git 提示输入的 GitHub 账户与密码
git push -u origin master
```

将文件推送到远程仓库后出现的结果：

```bash
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (8/8), 626 bytes | 626.00 KiB/s, done.
Total 8 (delta 0), reused 0 (delta 0)
To https://github.com/wxskayin/ExampleProject.git
* [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

`git push` 是推送命令，实际上是把本地的 `master` 分支推送到了远程仓库，相当于在远程有了一个代码仓库的备份。

> 使用 Git 管理文件时，每次结束工作前请依次执行`git add`、`git commit`和`git push`命令将文件推送到远程仓库。

完成后回到 GitHub 远程代码仓库，会出现刚刚创建的文件。同时，如果有多人协作维护该远程代码仓库，待他人提交代码后，您只需要在本地运行 `git pull` 命令即可保持同步。

## Git 常用命令

> 为了便于阅读，命令前面都有 `$` 符号，实际在终端中输入命令时并不需要键入此符号。

### 创建版本库

```bash
$ git clone <url>                  #克隆远程版本库
$ git init                         #初始化本地版本库
```

### 修改和提交

```bash
$ git status                       #查看状态
$ git diff                         #查看变更内容
$ git add .                        #跟踪所有改动过的文件
$ git add <file>                   #跟踪指定的文件
$ git mv <old><new>                #文件改名
$ git rm<file>                     #删除文件
$ git rm --cached<file>            #停止跟踪文件但不删除
$ git commit -m "commit messages"  #提交所有更新过的文件
$ git commit --amend               #修改最后一次改动
```

### 查看提交历史

```bash
$ git log                    #查看提交历史
$ git log -p <file>          #查看指定文件的提交历史
$ git blame <file>           #以列表方式查看指定文件的提交历史
```

### 撤销

```bash
$ git reset --hard HEAD      #撤销工作目录中所有未提交文件的修改内容
$ git checkout HEAD <file>   #撤销指定的未提交文件的修改内容
$ git revert <commit>        #撤销指定的提交
$ git log --before="1 days"  #退回到之前1天的版本
```

### 分支与标签

```bash
$ git branch                   #显示所有本地分支
$ git checkout <branch/tag>    #切换到指定分支和标签
$ git branch <new-branch>      #创建新分支
$ git branch -d <branch>       #删除本地分支
$ git tag                      #列出所有本地标签
$ git tag <tagname>            #基于最新提交创建标签
$ git tag -d <tagname>         #删除标签
```

### 合并与衍合

```bash
$ git merge <branch>        #合并指定分支到当前分支
$ git rebase <branch>       #衍合指定分支到当前分支
```

### 远程操作

```bash
$ git remote -v                   #查看远程版本库信息
$ git remote show <remote>        #查看指定远程版本库信息
$ git remote add <remote> <url>   #添加远程版本库
$ git fetch <remote>              #从远程库获取代码
$ git pull <remote> <branch>      #下载代码及快速合并
$ git push <remote> <branch>      #上传代码及快速合并
$ git push <remote\> :<branch/tag-name\>  #删除远程分支或标签
$ git push --tags                       #上传所有标签
```
