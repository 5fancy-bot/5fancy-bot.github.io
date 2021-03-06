---
slug: howtolearn
title: 前端入门怎么学
tags: [前端, 入门,路线]
---

## 写在最前

大家好，我是5fancy-bot，今天来给大家分享一下前端入门的路线，到底要学什么，怎么学，以及学到什么程度可以找到工作。但是5fancy-bot也是个菜鸡，有写的不对的希望大家轻点喷。这些都是我自身的一些经历经验，仅供产考哈。



## Question

在跟群友交流的时候经常看到有人会问这些问题，下面给大家分享一下[5fancy-bot](https://github.com/5fancy-bot/5fancy-bot)的一些经验。

1. 我要学什么
2. 我要学到什么程度
3. 学完这个之后该学什么
4. 要怎么学，看什么资料或者视频
5. 用什么做笔记
6. 现在找工作好找吗
7. 我要学Vue，还是React还是其他别的框架
8. 文档都是英文的，看不懂怎么办
9. 为什么网页打不开
10. 学多久才能找到工作
10. 哪里有项目可以做
10. 有什么资料推荐吗
11. ……

## Answer

### 我要学什么、学到什么程度、该怎么学

1. 作为一名前端/准前端，需要学习什么东西呢？首先毫无疑问的是前端的三大宝剑：[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 、[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)、[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)。这三个是前端的基石，建房子没有砖头，敲代码没有键盘，怎么玩。所以这三个是必学的。那么又要学到什么程度呢？在这里的话又可以引申一下，你的目标是什么？阿里、腾讯、百度、字节等一线大厂的话你需要学的比较深入，一些很细的细节都需要了解；要是中小厂的话了解到一定程度（下面会说到这个程度是到什么程度）就可以了。实习或者是第一份工作都可以找到。

   - HTML： 基本的标签需要认识，怎么引入`script` , `css`, `meta` 标签可以用来做什么，HTML的默认样式是什么，怎么去除默认样式，避免默认样式的污染。
   - CSS ：常用的布局看到有大概的布局思路，CSS都是大部分都是调出来的，除了一些浸淫多年的大佬可以一眼看出来这个用什么写，下一个套什么样式。但是在面试里面一些常问的布局：圣杯布局、双飞翼布局、[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)、[Gird](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)、居中、浮动、哪些样式可以继承、css选择器权重等等。CSS很多很多东西，还有 `CSS3`  引入的一些新特性。CSS预处理，[less](https://lesscss.org/)、[saas](https://sass-lang.com/)
   - JavaScript：JavaScript 是前端里面**最最最重要**的部分。这里分几种情况，一个是面试经常问，考你基础、学习能力、理解能力的；另外一种就是在日常code中经常用的那一部分。类型转换（特别是隐式类型转换），作用域、执行上下文、闭包、原型和原型链、有几种方式判断数据类型，有什么优缺点，那些方式是比较完善的等等，这些是面试官喜欢问的，因为相对来说会比较复杂、抽象。然后就是ES6。ES6是一个统称，在ES5之后的都可以统称为ES6，其中，我在开发中常用到的就有[数组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)跟[字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)的方法，[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)、[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)、[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 、[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)等等，基本上数组的方法都很常用而且很好用。字符串：[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 、[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 、[replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 等（还有太多啦，写不完🤪) 。除此之外还有一些[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)的操作，比如事件冒泡、事件委托、事件代理等
   - 还有浏览器的一些操作：session、cookie、localStorage、浏览器的回流与重绘、url从浏览器输入框输入到页面呈现经历了什么、协商缓存与强缓存等，基本都是去看面经就能看到的面试题。
   - 接下来就是项目类的一些内容了，很多人会问，JQuery要不要学。我觉得没啥必要，有精力去看一看API就可以了，都是原生DOM一些方法的封装，现在用JQuery的项目都很少了，还在用JQuery的就两种情况，以前遗留下来的；在某些场景，比较简单的页面会用一下。所以 **JQuery没有必要刻意安排时间去学习**。
   - 在HTML 、CSS、JavaScript（包含ES6）的内容之后可以简单看一下[ajax ](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) ,[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 、**[axios](https://axios-http.com)** （之前有说过axios是基于ajax，好像不是这样的，等我学会了再回来捋一捋关系🤡），或者是学了[Vue2](https://v2.vuejs.org/)/[Vue3](https://vuejs.org/)之后再看也行，没有绝对的先后顺序。为什么是Vue不是React，下面再聊。学了Vue之后就可以做些小项目练手了，或者说是边学边做，目的驱动学习。
   - 用Vue做项目一般都会用到[Vue CLI](https://cli.vuejs.org/index.html) 去创建项目，在Vue 2的时代都是用[webpack](https://webpack.js.org/) 去构建的，在近两年才兴起[Vite](https://vitejs.dev/) ，这时候可以去了解一下这些打包工具，初级前端简单了解几个概念、插件就可以了，工作中都是新开项目都是其他大佬创建好基础，你再去开发的（当然，在你对这些工具有了足够的了解之后，也可能会让你去搭建项目）
   - Vue之后就到了[UniApp](https://uniapp.dcloud.io/) ❌，我觉得不对，uniapp我认为是vue + 微信小程序 + 其他。对比一下，微信小程序的文档跟uniapp非常相像。甚至有些东西就是从wx换成了uni。从Vue开始都是一些框架工具了，遇到了问题，第一个方法最后是多看文档。（API调用工程师）。我觉得先学小程序再学uniapp是比较舒服的，过度自然。

   到此，中小厂的初级前端的内容大概就这些了。有些公司可能会要求算法，这个就只能去刷题了，题海战术。到这里的话问题1-3基本回答了。

### 那么应该怎么学呢？

   看视频还是看文档。**没有绝对的答案!**  每个人的学习方式习惯都不同，我一开始的时候也是喜欢找视频看，因为没有那么枯燥，有个声音可以听听，还有些文档没有提到的点会给你点出来，还会给你扩展一些题外话。就是看你自己了。BiliBili、腾讯课堂、慕课反正你能找到的资料都是通过搜索引擎找出来的，当然，也可以询问其他人，寻求其他人的推荐，选择优质的课程。但是到了最后文档的优先级会比较高，因为会聚焦内容，你搜了什么关键字对应的内容会相对集中，扩散也不会扩散到哪里去，最多也就像上面那样，给一下外链。**所以不要纠结，合适自己就行** 

### 用什么做笔记。

   这个问题其实也是开放性的。程序员比较喜欢的就是使用[markdown](https://www.markdownguide.org/) 去写文章，其实你是用word 、 xmind 都可以，东西只要能记下来手写都没有问题。如果你想分享出去的话也可以使用一些工具(vuepress/vitepress/Docusaurus)把笔记生成网站。

### 找工作好不好找？

   这个问题吧，看缘分+努力。自从疫情开始后环境都不好，特别是教育的双减政策之后，一些企业都在裁员，但是只要技术在线，就不怕找不到工作，坚持吧！海投简历就完事儿了。

### 我是学Vue还是React？

   对于初学者来说是比较建议先去学Vue。从几个方面去分析一下，第一个是入门的曲线，Vue的入门相对平缓，因为很多他的模板的特性使得跟HTML很想，接受起来更快。同时在国内，Vue在中小企业是比较受欢迎的（当然，这个并不能成为一家公司是否是大厂的标准，大厂一样有不同的事业部采用不同的技术栈），其次，Vue是配有全家桶的，官方直接把一套范式炫你嘴里，开箱即用。而React呢？我一直认为React的难度不在React的本身，而是想要舒服食用React，你需要对React的整个生态有所了解，一个状态管理有七八个库给你选择，但是Vue里面呢？[Vuex](https://vuex.vuejs.org/index.html) 、[Pinia](https://pinia.vuejs.org/introduction.html) ,然后是 [Typescript](https://www.typescriptlang.org/) 。总得来说就是用React之前需要准备的前置知识会比Vue要多一点。（大厂在某种程度上来说会偏爱React） 在面对吃饭的时候，Vue是比较快的，岗位会比较多一点。

### 英文文档看不懂怎么办？

   如果有点上面的那些外链，你会发现，几乎都是英文的！我故意的，特意选的英文。解决方法是装个翻译插件，翻译与原文结合一起看。这个就是纯纯的安利的，这个好不好呢？萝卜青菜各有所爱吧。如果喜欢中文也有对应的中文版文档。但是一般来说，文档都是英文优先的。

### 为什么网页打不开？

   这个原因不多说，但是要学会方法：挂代理。国内开源有gitee，但是我还是推荐GitHub，前端的库在npm上，没有代理有时候项目的依赖都能搞你半天。

### 学多久才能找工作

**这个没有可比性的呀！**每个人的学习效率不一样，你要说找个时间对比，那么看视频的同学把视频的时长相加就好了，如果你是那种看一遍就能记住的人。想我这种理解能力差的有些知识点会重复看几次，耗时就上来了。

对比只会让自己更紧张，拿我来说，我的学习路线比较奇异，小程序 => Vue => uniapp，小程序学了两个月才摸到头绪，Vue，两周就入门了，JavaScript没有系统学起；React，三天看完基础，两三个月找到项目的头绪。学完不等于学会啊。所以尽力学，学到哪就是哪。<u>如果是着急找工作，那么就面向面试题学习</u>。

### 学到什么程度能找到工作

如果是能够独立完成一个前端项目，给你接口、设计，可以独立完成前端的所有工作，那么在能力方面是肯定没有问题的，主要就是看面试了。面试是一个双向选择的过程，面试官一般来说会基于你的发展（如果是实习总不能指望你一进来就去解决什么问题），经历去问一下问题，实习主要就是寻找一个值得培养的人，那种能够进去就能干活的实习生大佬另说哈。

这个怎么理解呢？公司招聘肯定是有限考虑技术栈相近的，一个重度使用React的公司找一个以往经历大部分是Vue的，可能吗？可能，但是很少，因为招你进来可以给你时间学习，但是你得有成果输出。所以技术匹配的成功率会更高。

跑题了好像，所以学到什么程度呢？每个公司标准不一样，而且每个面试官还会有自己一些特殊的要求。所以跟上面一样，要考虑工作就是刷面试题、笔试题。。。（一桶废话

### 实习的时候不懂不会怎么办？

   问带你的导师，每个人入职的时候都会安排个人带你，不管怎么都好，他算是你在这家公司的导师了，有啥问题直接问就好了，不要害羞。实习的时候会了是你厉害，不会是正常的。什么都会的话实习做什么？

### 要怎么提问。

   这个不是提问，是我观察出来的。这个其实很重要！

   模拟一个场景：中学问数学题。

   老师，这道题怎么做的？

   哪个？

   这个，这样xxx不行吗？

   上述做了啥。对比一下

   有大佬在吗？

   在

   有没有用过xxx

   没有，下一位。（用过，你说）

   ……

   是一次性把问题输入完成会浪费时间吗？遇到这种情况，我都是看了，然后切换窗口，过了一会回来看问题说出来了没有，没有就算了。难道还要我一步步引导你陈述问题吗？大家都在上班，完整提问我花个十几秒看完了，会的话就会继续看下去，帮你排查一下。去办公室提问你手里都是拿着试卷的。工作的时候你又不能把代码全部给我看，所以提问很重要。其实很多时候说不定就在整理问题的时候就会发现问题的解法是什么，说不定思路就出来了。最好就是可以截屏，手机拍照像素再高有些拍的都不舒服。这里可以看下 **HOW TO ASK QUESTIONS.**http://www.catb.org/~esr/faqs/smart-questions.html  https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md 好的提问提前解决一半的问题。

### 哪里有项目可以做

项目哪里都可以做！去GitHub找一下前端项目，看是参与进去，还是说仿照这去做一个一样的出来，这个不是叫你CV，而是对照源码写自己的，为什么要这么写，这么写的好处是什么，是为了解决什么问题。

比如找一下已经有后端的开源项目，自己把前端重新实现，或者是Vue2升级Vue3之类的

> 分享几个开源项目
>
> https://github.com/TaleLin/lin-cms-vue
>
> http://ruoyi.vip/
>
> https://github.com/strapi/strapi
>
> https://github.com/macrozheng/mall
>
> https://github.com/PanJiaChen/vue-element-admin
>
> https://github.com/d2-projects/d2-admin
>
> https://github.com/ant-design/ant-design-pro
>
> ……

### 用什么软件写前端

首先考虑 [Visual Studio Code](https://code.visualstudio.com/) ，其他webStrom、Hbuild X，有兴趣自己研究，这个没啥好说的，就等于去书店买笔，你爱买啥买啥，能写出字来都行。

### 资料分享

> 打不开就挂代理

学习路线：https://roadmap.sh/

前端学习路线：https://roadmap.sh/frontend

React 学习路线：https://roadmap.sh/react

React 入门视频：https://www.bilibili.com/video/BV1wy4y1D7JT?spm_id_from=333.999.0.0

JavaScript入门视频: https://ke.qq.com/course/231577/2841395744442521#term_id=100273169

……

## 结语

以上是5fancy-bot的一些分享，有说的不对的大家轻点喷哈，还有其他问题想了解的话可以邮箱: 5fancy.bot@gmail.com 或者到 [Issue](https://github.com/5fancy-bot/5fancy-bot.github.io/issues)下留言讨论。也欢迎大家提问，我会尽量回答大家的问题（如果有的话👻）文章会持续更新。

打个广告，你的[start](https://github.com/5fancy-bot/5fancy-bot.github.io)是我更新的动力

<img src="http://pic.tinsfox.com/uPic/image-20220708201611723.png" alt="image-20220708201611723" />
