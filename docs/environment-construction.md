---
sidebar_position: 3
---

# 环境搭建

:::info

这是在macOS 下的操作。macOS ！macOS 

:::

## 我需要什么样的电脑

作为前端开发来说笔记本是8G内存起步就够了，如果有其他的需求就需要相对应的扩大内存，比如有使用webstarom、Docker的需求，或者是Chrome经常开着十几个Tab页不关的。一半是8G内存就够了。

## 为什么是mac

看到有很多人说推荐使用mac电脑做开发，收钱了吗？（屁，给Apple钱了）。使用起来是挺舒服的。windows也可以开发，看习惯吧。但是Linux如果折腾能力不行的话，deepin可以考虑一下，但是其他发行版微信开发者工具有点难搞，除非是永远不会开发微信开发工具。

## 软件安装

> 再次声明，这是mac系统的，其他系统的环境配置可以发起PR👻
>
> 挂代理！

1. [iTerm2](https://iterm2.com/)

mac下的又一个终端，不是说自带的Terminal不好用（只是我从来没有怎么去用它）

2. zsh

把系统的shell切换成zsh

```bash
chsh -s /bin/zsh
```
3. [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

4. [HomeBrew](https://brew.sh/) 

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

5. [visual-studio-code](https://formulae.brew.sh/cask/visual-studio-code#default)

```bash
brew install --cask visual-studio-code
```

6. [nvm](https://formulae.brew.sh/formula/nvm#default)

```bash
brew install nvm
```

执行完命令之后会有提示，增加环境变量。看提示就好了，可以先执行一下`nvm` 看下有没有安装成功，没有就把提示的环境变量写进去

7. node

> node 我们需要预留多版本共存，所以不使用brew或者官网下载，而是上面的nvm工具

```bash
nvm install 14 # 安装 nodejs 14最新版
nvm install --lts # 安装 nodejs 的长期支持版的最新版
nvm --list # 查看本地安装的所有node版本
nvm use v16.15.1 # 在当前环境临时切换node环境为 v16.15.1
```

![image-20220708210412631](http://pic.tinsfox.com/uPic/image-20220708210412631.png)

8. [Yarn](https://formulae.brew.sh/formula/yarn#default) 

```bash
brew install yarn
```

到此，前端的环境就基本安装完成了，其他的软件就看着下载吧，AppStore或者是官网。



## Vs Code 插件

Vs code本身是一个编辑器，不是一个[IDE](https://baike.baidu.com/item/%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/298524) ，通过安装插件让他的功能变得强大，各种插件在插件市场有.

> 各取所需

1. editorconfig
2. prettier
3. auto-close-tag
4. auto-complete-tag
5. auto-rename-tag
6. code-runner
7. github-vscode-theme
8. liveserver
9. autoimport
