﻿---
title: 《移动WEB前端高级开发实践》精读笔记
description: 《移动WEB前端高级开发实践》精读笔记，大前端学习笔记，小磊哥er的博客
keywords: 《移动WEB前端高级开发实践》精读笔记，大前端学习笔记，小磊哥er的博客
--- 

# 《移动WEB前端高级开发实践》精读笔记

### 写在前面
- 书籍介绍：《移动WEB前端高级开发实践》这本书的内容涵盖了移动Web前端开发中的各个关键技术环节。分别从HTML5、CSS3、JavaScript的ECMAScript5和ECMAScript6版本、移动端常用布局方案、MV*类新时代框架、预编译技术、性能优化、开发调试、混合式应用、单元测试、工程化等方面全面地还原了一线互联网公司Web前端技术栈。
- 我的简评：这本书内容量很大，全面地总结了前端技术栈相关的各种技术环节的优秀实践。对于技术水平还处于低中级的朋友，推荐将这本书反复多读几遍，依照书中的介绍到的各个关键技术环节，来对自己的学习查漏补缺。
- ！！福利：文末有笔记思维导图、随书资料打包等下载地址哦

### 第一章 初识移动Web前端
- 移动Web开发属于前端开发中的一个子集，专指移动设备上的Web前端开发工作

#### 1.1.移动Web前端史
- Web开发基本上可以分为三个阶段：静态技术阶段、动态技术阶段、后Web2.0阶段
- HTML5具有以下特性：语义化；本地存储；设备兼容；连接特性；多媒体；图形特效
- 移动Web开发常用的HTML5技术：视口控制；媒体查询；音视频播放；
- 1.移动Web的优势：跨平台、开发成本低、更容易迭代
- 2.移动Web的劣势：功能有限；操作体验欠佳；无法离线使用；很难被发现；
- 3.原生应用的优势：功能完善；体验更好；可离线使用；发现机会高；
- 4.原生应用的劣势：开发成本高；迭代不可控；内容限制；

#### 1.2.移动Web前端现状与未来
- 移动Web仍然有很多问题需要解决：1.浏览器种类繁多、参差不齐；2.网速仍然是性能瓶颈；3.多框架造成高门槛；
- 需要掌握的知识体系：计算机基础知识；静态页面制作；编程语言；开发工具；移动前沿技术；浏览器；代码质量；工程化；库/框架；
- 拐点来自于Google在2005年推出的Web邮箱Gmail
- 原生APP最致命的缺点是每次更新都需要发版，用户需要重新安装

### 第二章 移动Web开发环境搭建

#### 2.1.Visual Studio Code免费跨平台编辑器

#### 2.2.使用Node.js
- Node.js几乎能够实现一切应用，只是需要根据业务和项目选择使用

#### 2.4.Web代理工具NProxy
- Web代理工具Windows系统上有Fiddler，MacOS上有Charles
- NProxy是能在多端上使用的工具

#### 2.2.5.HTTP服务器http-server
- 一个简单的零配置命令行HTTP服务器，非常适合日常的测试、本地开发等环境

### 第三章 HTML5必会实际常用特性

#### 3.1.新的语义
- 新元素的到来：让机器能识别HTML结构中的语义Header、Nav、Article；HTML5还提供很多丰富的语义化标记，如Address、Mark、Time等标记；
- 表单的增强应用：1.Input元素的Type属性扩充，number、date、color等；2.Input通过属性进行表单验证，由required和pattern属性实现；3.Input元素的其他有用属性，如autofocus、form、placeholder等；4.HTML5的新元素和特殊属性contenteditable；HTML5提供的新特性，使得开发者能够在HTML层面处理各种类型的输入、验证、自动聚焦等功能；
- 使用音频和视频：HTML5提供了Audio和Video标签，才可以很方便的在网页中嵌入音频和视频

#### 3.2.访问你的设备
- 定位当前地理位置：HTML5新功能中提供了获取用户位置的能力；Geolocation API通过navigator.geolocation全局对象进行访问；
- 实战演练：调用摄像头拍个照：HTML5的getUserMedia API提供了一个访问用户媒体设备的能力，基于该特性，开发者可以在不依赖任何浏览器插件的条件下访问视频和音频等设备；最新的标准getUserMedia API为navigator.mediaDevices.getUserMedia；
- 实战演练：在手机上实现摇一摇：通过传感器，可以感知手机的方向和位置的变化；可以开发出很多有趣的功能，如指南针、通过倾斜手机来控制方向的赛车游戏、甚至更热门的增强现实游戏等；

#### 3.3.离线和存储
- HTML5引入了应用程序缓存，这意味着Web应用可在没有网络时进行访问
- 同时还提供了一套本地存储机制，允许开发者在本地存储少量数据，来提高用户体验
- 实战演练：搭建一个简单的离线应用：HTML5离线功能包含离线资源缓存、在线状态监测、本地数据存储等方面的内容
- 离线之后资源该如何更新--Service Worker：HTML5提供了另外一套API，帮助开发者完全控制离线数据，以支持更好的离线体验；Service Worker主要提供4类功能：后台消息传递、网络代理、离线缓存、消息推送；开发者也可以通过与服务器的通信决定何时缓存和更新；
- LocalStorage与SessionStorage：在HTML5之前，Web应用程序通用的数据存储方案一般通过Cookie实现；将数据存储在Cookie中的弊端：大小受限、消耗性能；
- 实战演练：利用IndexedDB实现便签管理：IndexDB是一个事务型数据库系统，同时也是一个基于JavaScript的面向对象的数据库系统；IndexedDB可以存储大量的结构化的数据，并且使用基于索引的高效API检索；

#### 3.4.图像效果
- HTML5引入了Canvas和SVG标签为浏览器提供了更加丰富的图形渲染功能
- WebGL用于在任何兼容的Web浏览器中呈现交互式3D和2D图形
- 使用SVG实现奥运五环：要让五环环环相扣，一种简单粗暴的方式是进行“补刀”，利用Path标签或者Line标签绘制一个新的圆弧或者线段制造视觉差异
- 在Canvas中所看到的三维空间并非真实的三维空间，而是用数学算法将模拟的三维空间投射到二维视口的图像
- 在WebGL中，三维空间中的物体投影到二维空间分为正交投影和透视投影两种方式。正交投影就是不管物体和视点距离，都按照统一的大小进行绘制。而透视投影则是从视点开始越近的物体越大、远处的物体则绘制的较小

#### 3.5.不一样的通信
- PostMessages：在过去，跨源或者窗口之间的通信往往通过和服务器进行数据交互来实现，并且需要借助轮询或者Comet等技术来监听消息；HTML5提供了新型机制postMessage实现安全的跨源通信；
- XMLHttpRequest Level2。相较于老版本做出的改进：设置HTTP请求的超时时间；使用FormData对象管理表单数据；用于上传文件；跨域请求；获取服务器端的二进制数据；获得数据传输的进度信息；
- Server Sent Event：传统的做法是客户端向服务端发送轮询请求，一旦有新的数据，马上更新，这种做法消耗性能并且时效性差；HTML5中提供了Server Sent Event，他有以下优点：轻量，相对简单；单项传送数据；基于HTTP协议；默认支持断线重连；自定义发送数据类型；Server Sent Event 通过EventSource对象接收服务器发送事件的通知；
- WebSocket：WebSocket是HTML5新增的协议，基于TCP连接进行全双工通信；WebSocket对象提供了一组用于创建和管理WebSocket连接，以及可以通过该连接发送和接收数据的API；
- WebRTC：全称Web Real-Time Communication，即Web实时通信，能够为浏览器和移动网页应用提供实时的语音或者视频通话功能；WebRTC包括以下几个主要的JavaScript API。MediaDevices提供了查询和访问媒体输入设备的方法；RTCPeerConnection提供建立点和点之间连接的方法，并维护和监听连接，建立连接的点和点之间可以传输视频流和音频流；RTCDataChannel可用于点和点之间双向传输任意数据的网络通道；WebRTC现今已然成为Web端最为重要的多媒体通信解决方案。可以不依赖浏览器插件实现基于浏览器建立音视频和数据的传输，为Web开发者提供了丰富多彩的实时多媒体功能；

#### 3.6.其他常用特性
- History API与单页应用：单页应用是指Web应用可以无刷新在不同的页面间切换，并且页面访问记录会被浏览器保存，从而支持浏览器的前进、后退和刷新等操作；HTML5在History对象山新增了pushState和replaceState API配合在window对象上新增的popState事件使用，可以实现单页应用功能；
- Drag和Drop介绍：在没有提供Drag和Drop功能之前，开发者需要通过元素的mousedown、mousemove、mouseup等事件来实现拖放和拖拽效果；HTML5新增的Drag和Drop功能不仅另外提供一套规范的事件格式，而且还支持桌面文件到浏览器的拖放，大大简化了开发复杂度；
- 利用Web Workers加速应用计算：JavaScript是单线程运行，如果某个操作非常耗时，页面将会处于“假死”状态；Web Workers赋予了JavaScript多线程运行的能力，可以将耗时操作放在Web Workers线程里运行，防止页面出现假死；
- 利用Performance API分析网站性能：早期搜集网站性能需要在页面里插入相应的脚本，监听页面不同时期的事件，比如DOMContentLoaded事件。这种方式侵入性强，且能收集的信息比较少；HTML5里面提供了可以获取页面加载详细性能指标的Web Performance API，通过window.performance对象暴露给开发者；window.performance.timing对象包含了完整的网页加载性能数据；

### 第四章 CSS3必会实战技巧
- CSS3作为CSS技术的升级版本，已经在移动端被广泛使用，比如圆角、透明度、阴影、动画、响应式等功能

#### 4.1.认识CSS3
- CSS中文意思是层叠样式表，是一种用来布局和美化网页的样式表语言
- 什么是CSS3：1.选择器：新增的选择器可以减少多余的Class、ID或JavaScript的使用；2.盒模型：提供box-sizing属性来改变默认的CSS盒模型对元素宽高的计算方式；3.个性化字体：@font-face规则的引入允许开发者为网页指定在线字体，常见的一个用途是IconFont；4.自适应布局：提供calc函数在渲染时动态计算属性值，常用在自适应布局当中；5.还有很多其他激动人心的新特性，比如（圆角边框、字体阴影这种以前只能通过图片实现的效果；响应式布局Media Queries、弹性布局Flexbox、多列布局Multi-column Layout；媲美原生应用的过渡与动画效果；）
- 移动Web的CSS3现状：如果想知道某个CSS3的属性在特定浏览器的支持情况，可以使用网站`caniuse.com`
- 用Modernizr检测浏览器是否支持CSS3：Modernizr，一个用于检测用户浏览器的HTML5与CSS3特性的JavaScript库；要实现浏览器动态特征检测，一般有如下两种思路（第一种使用JavaScript获取到User Agent，然后根据User Agent判断浏览器的版本，再根据浏览器的版本，来确定哪些属性是在当前浏览器里支持的。缺点是并不准确；Modernizr采用的思路是直接JavaScript里面使用指定属性，如果成功执行则说明支持；Modernizr提供另外一个重要功能，自定义特征检测。当浏览器是Internet Explore7时，Modernizr会添加“ie7”样式类名到HTML元素，并且在JavaScript里面调用Modernizr.ie7返回true；）

#### 4.2.选择器
- 常见选择器
- 伪类和伪元素：伪类用来指定选择器的某种特定状态或者条件，伪类在DOM中并不存在，但对用户是可见的；动态伪类对除了其名称、属性或内容之外的特征的元素进行分类，不会显示在文档源或文档树中；伪元素是指不存在于文档树中的抽象内容；
- 优先级和权重：CSS中的权重分为4个级别：内联样式style；ID选择器；类、伪类，属性选择器；元素、伪元素；还有一个特殊的规则就是“!important”，可以将对应得规则提升到最高的权重；合理的规划CSS选择器权重是完成一个易于维护项目的良好开端；

#### 4.3.响应式开发
- 常见设备的宽高：响应式开发的本质是针对多种屏幕做适配；首先得掌握几个基本概念：物理像素、设备独立像素、屏幕像素比；通过设置viewport属性，可以调整用户界面的逻辑大小，页面CSS中的大小均以viewport为基准；
- Flex弹性盒布局：在Flex出现之前，布局基于盒模型，依赖display、position和float样式属性；1vw指的是当前页面viewport的宽度的1/100；采用Flex布局后，子元素的样式float、clear和vertical-align失效；
- 媒体查询：分辨率的差异化扩大，使得不得不根据屏幕的分辨率给用户呈现不同的界面；采用媒体查询，可以给不同的设备应用不同的样式；
- 用rem开发响应式设计：rem是指相对于根元素的字体的大小
- 多列：CSS3多列布局是块级布局模式的扩展，允许通过简单的定义实现文本的多列布局效果；需要强调的一点是，多列布局是针对文本排列的布局，跟通常页面的左、中、右三列布局是两个概念；

#### 4.4.动效
- 转换：W3C组织分别在2009年3月发布了3D变形动画标准草案和2D变形动画标准草案，草案允许开发者对元素进行移动、缩放、旋转和倾斜
- 过渡：CSS3动画包含Transtion和Animation两种，都可以通过改变元素的CSS属性来实现动画效果；transition: property duration timing-function delay；
- 动画：CSS3 Animation适用于所有块状元素和内联元素，通过定义动画中的关键桢来实现复杂的动画效果；animation: name duration timing-function delay iteration-count direction；

#### 4.5.常用特性
- CSS3中一些常用特性，包括开放字体格式、背景、颜色、文字效果、边框和用户界面
- 开放字体格式（WOFF）：开放字体格式（Web Open Font Format，简称WOFF），是一种网页采用的字体格式标准；WOFF包含了基于SFNT的字体（如Postscript、TrueType和OpenType等开放字体格式）；优点是有效利用压缩减少档案大小，并且不包含加密也不受著作权限制；
- 背景：其中background-size、background-origin、background-clip是CSS3中新增的属性
- 颜色：常用来设置字体颜色，还用在元素的背景颜色、线性渐变和径向渐变
- 文字效果：其中常用的4种：text-shadow、text-overflow、word-wrap、word-break
- 边框：border-radius、border-image、box-shadow

#### 4.6.预编译
- CSS语言主要缺乏的语言特性有：变量、运算、循环、函数、作用域
- 常用的预编译语言主要有Less、Sass、Stylus等

### 第五章 JavaScript关键语法及使用技巧

#### 5.1.理解JavaScript
- JavaScript是浏览器所支持的一种脚本语言，是ECMAScript语言的一种实现，基于原型、多范式的动态脚本语言，并支持面向对象、命令式和声明式（如函数式编程）编程风格
- JavaScript包括DOM(文档对象模型)和BOM(浏览器对象模型)
- 语言基础：1.变量；2.数据类型；3.运算符；4.条件；5.循环；6.函数；7.异常
- 函数和参数：官方的解释：函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块；函数声明：函数式、变量式；arguments并不是一个数组

#### 5.2.事件
- 事件概述：事件是一种异步编程的实现方式，是程序各个组成部分间的通信；事件不是JavaScript对象，只是一种传递信息的机制，所以事件本身不能承载任何数据内容；浏览器通过JavaScript的Event对象来承载事件数据信息。当事件发生时，浏览器将被触发元素、发生位置等相关的原始数据存入Event对象，然后程序通过事件监听获取响应数据；需要了解的几个概念（事件类型、事件目标、事件处理程序、事件对象、事件传播）
- 事件委托：早期的事件模型通过DOM元素属性实现，即直接以对象属性的形式为DOM元素注册事件，称之DOM事件模型；DOM2事件模型主要实现两点技术：支持为同一DOM元素注册多个同类型事件；把事件分为捕获阶段和冒泡阶段；DOM2事件模型通过元素对象的addEventListener方法为其添加事件监听，在多次监听事件时，不会像之前那样彼此覆盖，每一个监听均有效；将事件交给父元素或祖先元素处理的方式叫做事件委托；事件委托主要两个优点：提高性能：每一个函数都会占用空间，只添加一个事件处理程序，所占用内存空间少；动态监听：使用委托可以监听未来元素；
- 专为移动端设计的事件主要包含三类：触摸事件、手势事件和传感器事件

#### 5.3.作用域、闭包和this
- 在JavaScript中，函数是“第一类对象”，这让JavaScript函数可以被存入变量或其他结构，也可以被作为其他函数的返回值，或者被作为参数传递给其他函数
- 闭包可以用来保存中间计算结果，类似于实现了计算结果的缓存
- 闭包另一个使用场景是实现内部变量的封装，即使用匿名函数封装私有成员的单例模式
- JavaScript的this关键字表示函数运行时生成的内部对象。和变量的搜索过程不同，this的值从执行上下文中获取，而不会在作用域链中搜寻
- 函数的调用方式有以下几种：作为函数调用、作为对象方法调用、作为构造函数调用以及使用call和apply调用

#### 5.4.面向对象
- JavaScript是一种基于对象。但书写上又不同于传统面向对象编程的一门语言
- 原型和原型链：在JavaScript中继承由原型链来实现，对象原型的概念常常会困惑许多JavaScript的初学者，而事实上基于原型的继承模型比传统的类继承更要强大，javascript可以通过原型的继承来模拟类继承，而一个类继承的模型想要模拟原型继承却要难的多；创造对象和生成原型链的方法主要有四种：1.使用普通语法创造对象；2.使用构造器创造对象；3.使用Object.create创造对象；4.`__proto__`、`prototype`和`constructor`；
- Mixin模式：JavaScript通过原型链实现继承关系，但该继承基于单一的原型链，单一原型链意味着只能继承唯一原型；Mixin模式是开发者引入解决多重继承的方案。Mixin实现多重继承简单说是一种组合；
- ECMAScript6的Class和Extends：对于传统面向对象语言的开发者，原型链是很容易让人产生困惑的，Class和Extends作为语法糖解决了开发者对于JavaScript继承的困惑；Extends实现的继承相比原型链的方式更加直观，子类需要在constructor构造函数中调用super方法执行父类构造函数

#### 5.5.异步编程
- Ajax中的Callback回调函数：通过监听readystatechange事件，判断readyState属性的值
- Promise模式：通过Promise对象的then方法，获取异步成功回调的数据，通过catch方法，捕获异步调用的错误信息，同时then方法支持多次链式调用；通过Promise.all和Promise.race方法，可以容易的控制多个Promise并行执行
- 生成器Generator：Iterator是ECMAScript6的新语法，遍历器对象可以采用for...of循环遍历其所有子项；由于生成器的特性，每次调用next方法执行一个区间的代码，即生成器提供了分段执行机制

#### 5.6.模块化
- 以功能块为单位进行程序设计，实现其求解算法的方法称为模块化，原则是“高内聚，低耦合”
- “高内聚”尽量减少不同文件中函数的交叉引用，“低耦合”是模块与模块之间要互相独立
- 模块化的目的是为了降低程序复杂度，使程序设计、调试和维护等操作简单化
- 为什么需要模块化：在JavaScript发展初期，Ajax并未普及，JavaScript还只是一种“玩具语言”，用来在网页上进行表单校验、实现简单的动画效果；庞大复杂的应用需要一个团队分工协作、进度管理、单元测试等，开发者不得不使用软件工程的方法管理网页的业务逻辑；模块化的一些写法的探索（1.原始写法：把实现功能的一组函数放在同一文件中；2.添加命名空间：使用单全局变量的模式；3.立即执行的函数：实际就是匿名函数）
- AMD和CMD规范：时下流行的模块化规范主要有CommonJS、AMD和CMD规范；Common.js规范的实现代表是Node.js，AMD规范的实现代表是RequireJS。CMD规范的实现代表是Sea.js；
- ECMAScript6标准的模块支持：直到ECMAScript6才支持原生模块化，其不但具有CommonJS规范和AMD规范的优点，而且实现得更加友好，语法较之CommonJS更简洁、支持编译时加载或者静态加载、循环依赖处理得更加优秀；ECMAScript6模块功能主要由两个命令构成：export和import/export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能；export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系；

#### 5.7.ECMAScript6其他常用功能
- 基础数据类型的扩展：Number对象增加了一个极小常量EPSILON
- 使用解构赋值来简化代码：任何实现了Iterator接口的数据结构都可以使用数组方式解构
- 使用Babel插件提前使用新特性

### 第六章 HTML5移动开发实战
- 通过多个实际开发场景，如地理定位、在线聊天、拍摄、播放器、动画、3D等
- 在地图上显示行走轨迹：采用高德地图；通过HTML5的navigator.geolocation.getCurrentPosition获取当前地理位置；使用navigator.geolocation.watchPosition方法监听地理信息的变化来显示行走轨迹

#### 6.2.仿原生相册
- 通过touchstart、touchmove和touchend事件，实现左滑和右滑操作

#### 6.3.使用Socket.IO制作小型聊天室

#### 6.4.移动端拍照上传实践
- 功能包括拍照上传、实时进度显示和图片预览

#### 6.5.利用Microdata进行SEO优化
- HTML5中引入了Microdata技术
- 该技术旨在让网络更加智能，如提供信息获取、信息过滤、Web自动服务等

#### 6.6.制作一个带字幕的视频播放器
- 实例播放器包含3个常用功能按钮：播放、快进和静音
- WebVTT格式文件，全称Web Video Text Tracks，中文意思是网络视频文本轨道

#### 6.7.使用Pixi.js制作“抓住开学君”游戏
- Pixi.js是一款高效并且开源的2D渲染引擎，主打支持硬件GPU渲染的WebGL API
- Pixi.js可用于开发交互图形、动画和游戏等“富视觉”应用

#### 6.8.用Canvas制作刮刮卡
- Canvas是HTML5的新增元素，用于图形的绘制，如绘制路径、盒、圆、字符以及添加图像

#### 6.9.实战演练：实现3D全景效果
- Transform：对元素应用2D或3D转换
- 该属性允许对元素进行旋转、缩放、移动或倾斜

### 第七章 移动网页样式布局实战
- 有效的掌握移动端网页样式布局，是成为一名合格的前端开发工程师的必要条件

#### 7.1.静态布局的实际应用
- 静态布局的特点是布局的大小不会随着用户调整浏览器窗口大小而变化
- 传统PC端一般选择960像素，这个宽度可以被所有现代浏览器适配，且能被主流屏幕宽度整除。而移动端一般选择320像素
- 静态布局在移动端上的自适应：1.整体缩放；2.媒体查询；
- 媒体查询会使代码量大幅增加，注意两点：一是将不需要根据屏幕变化的属性放到媒体查询外，减少代码冗余；二是设置好需要的媒体查询断点

#### 7.2.水平居中与垂直居中实战
- 水平居中：行内元素，对其父元素设置样式text-align为center；块级元素，对自身设置样式margin值为auto；块级元素(固定大小)水平居中还可以采用绝对定位+负外边距的方式实现；
- 自适应块级元素水平居中：使用transform来达到效果；
- 行内元素垂直居中：单行文本设置元素高度等于行高即可；多行不固定高度可以通过设置padding实现；固定高度多行文本可以使用display:table-cell配合vertical-align:middle实现；
- 块级元素的垂直居中：固定高宽就可以用绝对定位加负边距来实现；不固定宽高需要通过translate变形函数来处理；
- 基于视口单位的解决方案：采用使用长度单位1vw表示视口宽度的1%；
- 基于Flexbox解决方案：目前推荐的最佳解决方案；

#### 7.3.栅格系统实现响应式列表
- 栅格布局是从桌面浏览器时代流传下来的一种响应式布局方式
- 栅格系统由容器（container）、行（Row）、列（Column）组成，行包含在容器之中，只有列可以作为行的直接子元素

#### 7.4.Flex多栏布局实战

#### 7.5.实战演练：沪江网校首页rem布局实战	24

#### 7.6.实战演练：侧边栏的滑进滑出效果
- 移动开发中，由于屏幕空间有限，经常会把一些菜单或功能浮窗隐藏在屏幕一侧，当单击展开按钮时，以滑出的效果呈现内容

#### 7.7.实战演练：模拟原生的页面切换效果
- Web应用中，页面跳转会导致资源重新加载，可能会产生长时间的白屏等待，所以为了实现仿原生应用的页面切换效果需要以单页Web应用的形式来呈现

#### 7.8.提高Web动画的性能实战
- 使用CSS3动画：在渲染DOM的时候，浏览器实际的工作是由上到下顺序执行的；设置Transform属性，在一些先进的浏览器中，该属性会触发一个新的图层，甚至会启动设备的硬件加速，这样性能消耗的主要点仅仅集中在了图层的组合上；样式Opacity也是一个会触发GPU加速的CSS属性；
- 使用高性能的JavaScript动画：1.去除布局颠簸（分离获取和设置，是浏览器对于同一时间的一系列操作可以优化为一个单一的操作；一些循环调用中setTimeout或者setInterval进行动画调用时，不合理的时间设置也会导致页面卡顿，这时候推荐使用requestAnimationFrame）；2.使用节流函数（反跳是调用动作n毫秒内，才会执行该动作，若在n毫秒内又调用此动作则将重新计算时间；节流则是先设置一个执行周期，当调用的时刻大于等于执行周期时则执行并进入下一个周期；如果要对JavaScript动画进行更方便的优化，可以选择使用优秀的第三方动画库，如Velicity.js）

#### 7.9.实战演练：课程分类列表实战

#### 7.10.本章小结
- 移动网页布局不同于传统的PC端布局，在设计和实现上需要着重考虑不同终端尺寸设备的还原，在技术选择上越来越趋向于使用CSS3新特性

### 第八章 前端工程化实战
- 软件工程是一门研究如何系统化、规范化、数量化地开发和维护软件的学科。包含两方面内容：软件开发技术和软件项目管理
- 软件工程的目标：在给定成本、进度的前提下，开发出具有适用性、有效性、可修改性、可靠性、可理解性、可维护性、可重用性、可移植性、可追踪性、可互操作性和满足用户需求的软件产品

#### 8.1.前端工程化
- 没有工程化的体系，效率、质量、合作和维护等便无从谈起
- 前端工程化的必要性：1.规范代码、2.进行JavaScript预处理、3.进行CSS预处理、4.自动编译、5.缩减文件体积、6.还包括代码共享、自动部署、工作流管理等
- 前端工程化的发展史：1.石器时代（只需要实现最简单的内容呈现和表单提交。利用静态的HTML代码提供基本的浏览内容）；2.铜器时代（Web开发的组件化和异步加载的实现）；3.农业时代（模块加载规范应运而生，出现了很多基于该规范的，动态加载JavaScript代码的框架）；4.工业时代（降低开发难度，前端MVC、MVP、MVVM框架如雨后春笋般诞生，如Backbone，React等；还出现了很多以自动化为目标的构建工具，如Grunt、Gulp和Webpack等）

#### 8.2.工程化入门Grunt
- Grunt是一个基于JavaScript的强大的任务管理器，允许在终端机上完成验证JavaScript语法，CSS压缩、Sass编译等任务。可以实现自动化构建、测试等
- Gruntfile文件的主要作用：配置或定义任务task；加载Grunt插件；

#### 8.3.使用Gulp构建应用
- 使用Grunt构建项目涉及磁盘操作，构建效率较低。因此，基于流的Gulp应运而生
- gulp.src方法返回Stream对象，可以通过pipe方法将内容传递给插件
- Babel可以将JavaScript文件，甚至React的JSX文件编译为标准的JavaScript文件
- indexedDB通过版本来管理数据库的结构，因此必须在upgradeneded事件中修改数据库或者对象存储的代码

#### 8.4.使用Webpack构建应用
- Webpack是一个模块加载器兼打包工具能把各种资源，例如脚本（JavaScript、Typescript、JSX）、样式（CSS、Less、Sass）、图片（png、jpg、gif）等都作为模块来处理
- 加载器的作用是对项目中的源文件进行格式转换，以函数的形式存在，接收源文件作为输入参数，输出转换后的资源文件
- Webpack引用模块时，指定模块路径的方式分为三种：相对路径、绝对路径和模块路径
- 单页应用默认所有资源都会被编译到一个统一的文件中
- require.ensure只会加载模块，不会执行模块，所以一定要在回调函数里使用require执行请求的模块

### 第九章 移动Web常用开发方式实战
- 移动Web开发者已渐渐从早期基于DOM的开发方式，逐渐向MVC/MVVM类库框架迁移，比较有代表性的框架有React和Vue.js，原有的多页开发模式变为单页应用模式

#### 9.1.基于DOM的开发方式
- Zepto是一款小巧的JavaScript类库，其大多数API都与jQuery保持一致
- 解决原生单击事件的缺陷：双击缩放，300毫秒延迟问题
- 为何抛弃掉Zepto：Touch模块增加了一种新的tap事件来去除单击延迟，却产生一个新的被称为“点透”的问题；Zepto在基础的DOM操作上额执行效率也是远远差于其模仿对象jQuery；
- 目前主流的JavaScript框架所融入主要设计思想：1.MVC以及MVVM、2.前端路由、3.观察者模式、4.模块化以及组件化、5.数据绑定与状态管理、6.Virtual DOM

#### 9.4.打造单页应用SPA
- 单页应用的理念是所有的代码（HTML、JavaScript、CSS）在一次页面加载中获取，或者部分资源在页面需要的时刻被动态加载
- 通过路径的Hash值或者HTML5的History API提供的技术，在单一页面内实现页面跳转切换，但实际没有重新加载页面
- 单页应用的优势是什么：单页应用主要依赖两种技术：一种是JavaScript的框架提供渲染和页面切换的能力，另一种是Ajax提供前端页面和服务器端数据交互的能力
- 实战演练：实现一个单页路由：Web实现路由有两种技术模式：基于Hash、基于History API；参考React Router或者axios（Vue2.0推荐路由）的源码；
- 实战演练：使用React开发一个简单的单页应用
- 单页应用的状态管理

### 第十章 混合式开发实战
- 混合式开发的理念综合了原生和Web开发的特性，通常定义为开发一个在原生容器使用Web技术的混合式应用	31

#### 10.1.为什么需要混合式开发
- 混合式开发种类：1.WebView模式（代表是PhoneGap和Cordova，主要通过HTML、CSS、JavaScript放置在WebView中执行）；2.JavaScriptCore模式（全新的开发模式，即通过JavaScript调用原生代码渲染原生控件）；3.微信小程序（独立设计了一套语法对应传统的HTML、CSS和JavaScript。学习了React Native类框架直接渲染原生组件提升性能，在利用离线缓存获得流畅的体验）；4.Flutter（激进的实现整个UI层，可以通过Dart语言直接控制完成。曾希望Dart能够替代JavaScript在浏览器中的地位）
- 混合式开发的优势：跨平台、快速发布、功能提升
- 选择合适的混合式开发方案：综合三点（开发效率、用户体验、项目复杂度）；选择分析（如果有现成的应用并且具有一定的原生开发能力，只需要让Web页面嵌入APP中实现一些动态展示。则可以选择自行实现一套WebView扩展方案，将原生能力暴露到WebView中；内嵌的H5页面比较复杂或者需要构建一个完整的APP，且开发者更专长于Web技术，适合PhoneGap或Cordova这类方案；解决WebView在Android系统中的机型差异性；React Native或Weex这类技术，既可以实现完整的应用也可以嵌入APP作为其中的一部分。接近原生应用的体验，存在平台兼容性问题和复杂场景性能问题）

#### 10.2.Cordova 开发入门
- JavaScript和native互相调用：混合式开发的本质是JavaScript代码和native代码的互相调用；1.Native调用Web（Android端中Java实现：webView.loadUrl("javascript:(function(){alert('调用来自Native')})()")；iOS端中Swift实现：webView stringByEvaluatingJavaScriptFromString(from: "alert('调用来自Native')")）；2.Web调用Native（Native调用Web是JavaScript脚本的动态执行，而Web调用Native则是原生获得JavaScript端数据，然后执行或映射到原生代码的过程；Android端目前最主流的方法，WebView.addJavascriptInterface，这种方法能将Java中的对象映射到JavaScript中，调用JavaScript对象下的函数，会触发原生对象下的函数）；
- Cordova介绍和安装：Cordova是一个基于WebView的跨平台解决方案，其核心组成部分是插件；几乎所有代码都需要在监听到deviceready事件后执行，即表示Cordova能力的注入是在WebView创建后；

#### 10.3.React Native
- 最大的优势是其使用JavaScript作为Bridge调用原生方法和组件，兼顾了性能和开发效率
- 打包出来的是JSbundle，需要通过原生容器启用
- React Native的样式和布局是一套以Flexbox为基础的CSS子集方案
- API是其内部暴露的方法，通过JavaScript对象调用，可以用来获得一些原生提供的能力，类似Cordova中插件提供的功能
- 	AppRegistry，整个JavaScript需要调用此API实现在原生应用处的注册，原生应用通过对应的AppRegistry.runApplication来运行程序

### 第十一章 前端开发调试实战
- 浏览器调试、代理工具、多终端同步工具、模拟器调试、多平台调试、云真机调试和React调试

#### 11.1.浏览器调试
- chrome开发工具
- safari开发者工具

#### 11.2.代理工具
- 通过代理工具可以抓包查看网络请求的具体细节
- 可以将线上的文件代理成本地文件，不用重复上线就能调试线上问题
- 两种常用的代理工具：Mac OS下的Charles（通过将自己设置成系统的网络访问代理服务器，使得所有的网络访问请求都通过Charles来完成，从而实现了网络封包的截取和分析）；Windows下的Fiddler（能够在本机和服务端之间建立一个代理，通过这个代理，对所有通过的请求和响应进行拦截、修改和分析等。也可以把网站上的静态文件代理为本地的文件，简化调试的流程）

#### 11.3.多终端同步工具
- 两个比较常用的多终端同步工具BrowserSync和EmmetLiveStyle
- BrowserSync能让浏览器实时、快速响应文件更改并自动刷新页面，文件包含HTML、JavaScript、CSS、Sass、Less等
- Browsersync可以同时在PC、平板、手机等设备下进行调试，一次修改保存，所有设备都会同时显示改动后的效果
- 双向自动刷新样式工具EmmetLiveStyle

#### 11.4.模拟器调试
- 模拟器是运行在本地电脑上的虚拟设备，有效地缓解了开发人员无法获取大量物理设备的难题
- 比较常用的Android模拟器软件推荐Genymotion
- IOS模拟器需要借助Mac OS系统下的XCode工具
- 在线Android模拟器Manymo

#### 11.5.多平台调试
- 目的在于对多个设备测试和调试，主要解决兼容性问题和提供测试、调试的工作效率
- Ghostlab是一款Mac应用程序，用于在多设备上进行站点和Web App的同步化测试
- 移动端Web开发调试工具Weinre
- Vorlon.JS是微软提供的一款用于JavaScript远程调试和测试的开源工具，帮助开发者加载、检查、测试及调试任何设备上使用Web浏览器运行的JavaScript代码

#### 11.6.云真机调试
- BrowserStack是一个多系统跨浏览器兼容性在线测试工具，支持1100多种真机和桌面浏览器的云端在线测试
- STF是一个可以很舒适的在浏览器中远程调试和管理智能手机、智能手表和其他小工具的Web应用程序
- 多浏览器兼容性测试平台F2etest

#### 11.7.React调试
- React Developer Tools是Facebook提供给开发者的用于调试使用React渲染的系统工具
- Redux DevTools是一个Redux开发测试工具，可以对Redux应用的状态进行记录、回放、实时编辑等

### 第十三章 前端性能优化实战

#### 13.1.常用网站性能优化指标
- 1.网页的资源请求与加载阶段
- 2.网页渲染阶段
- 3.JavaScript脚本的执行速度

#### 13.2.依旧有效的Yahoo性能优化法则
- 1.减少HTTP请求
- 2.压缩CSS和JavaScript代码
- 3.去除重复引用的脚本
- 4.可缓存的Ajax
- 5.延迟加载非必要脚本
- 6.预加载
- 7.减少DOM元素数量	
- 8.减少DOM访问次
- 9.避免使用Iframe
- 10.优化图像
- 11.优化CSS Sprites
- 12.不要在HTML中缩放图片
- 13.减少cookie体积

#### 13.3.性能优化工具使用实战
- 1.YSlow：依据雅虎法则中23条可测试的性能法则构建的网站性能分析工具
- 2.PageSpeed：Google公司提供的一款性能优化分析工具
- 3.WebPageTest：Google开源项目“Make the Web Faster”的子项目在线版本

#### 13.4.HTTP协议头缓存实战
- 1.客户端缓存流程
- 2.缓存协议内容：HTTP头中关于缓存相关的属性（1.Expires：指定缓存过期的时间；2.Cache-Control：比Expires策略更详细，优先级比Expires高；3.Last-Modified/If-Modified-Since：指定响应资源的最后修改时间；4.ETag/If-None-Match：区别资源内容的唯一标识，需要配合Cache-Control使用）
- 3.实战演练：HTTP缓存

#### 13.5.资源按需加载实战
- 1.基于RequireJS的按需加载：采用异步加载模块，因此模块加载不会影响后续代码的运行；AMD通过require函数加载模块，接受两个参数module和callback；
- 2.基于Webpack的按需加载：CommonJS规范虽然本身采用同步加载模块，但也提出了Modules/Async/A规范，定义了一套require.ensure用于处理异步加载
- 3.图片懒加载：懒加载的原理是通过监听页面滚动事件，当图片进入可视区域时，再进行图片的加载；真实的业务场景中还需要考虑用户下拉速度、页面高度的固定性、iScroll等第三方插件库的使用情况；

#### 13.6.不同网络类型的优化实战
- 1.获取网络类型：开发者可以通过navigator.connection.type获取网络类型，包括unknown、Etherne、WIFI、2G、3G、4G、none
- 2.弱网图片优化：仅将小图标整合到雪碧图，并控制每张雪碧图的体积，如果超过了上限，则整合第二张雪碧图
- 3.弱网缓存优化：开发者可以选择在内存中缓存请求数据

#### 13.7.实战演练：Nginx配置Combo合并HTTP请求
- 1.安装Nginx和文件合并模块
- 2.配置Nginx和Combo

#### 13.8.本章小结
- Web优化的黄金法则中指出对于访问一张网页只有10%-20%的时间花在下载服务器端响应的HTML文件，80%-90%的时间用在前端资源的下载和执行，比如CSS、JavaScript、Images等

### 第十四章 项目实战：搭建直播平台
- 项目中引用Crosswalk来提供一个统一的WebView，用以解决WebRTC的兼容问题
- 直播的流程由采集、推流、拉流、解码、播放等环节组成
- 由于WebRTC需要HTTPS的支持，本例中采用自签证书的方式实现HTTPS
- HLS是由Apple提出的一种基于HTTP协议的在线视频播放解决方案，由播放列表文件(格式为M3U8)和视频片段(格式为TS)组成
- 在实际的项目中部署Node.js时，为了提升系统的扩展性，可以使用PM2启动并开启Cluster模式
- 采用FFmpeg组件对视频进行转码
- 该项目涉及的新技术有WebRTC、WebSocket、React、FFmpeg等

#### 直播流程
- 采集：发起端通过Navigator对象的getUserMedia方法调用本地摄像头采集视频流
- 推流：发起端将视频流通过WebSocket上传到服务器
- 编码：服务器使用FFmpeg视频框架将视频编码为TS格式存储
- 拉流：观看通过HLS从服务器拉取编码后的音视频流
- 观看端解码音视频流
- 观看端播放解码后的音视频流

#### 视频直播采用HLS技术实现思路
- 采用WebRTC接口获取音视频信息
- 采用MediaRecorder定时录制视频片段并上传到服务器
-- 服务器保存视频片段并生成M3U8格式文件
- 其他参与直播的客户端直接采用M3U8播放直播视频

### 写在后面
- pdf书籍、笔记思维导图、随书代码打包下载地址：[https://pan.baidu.com/s/1NwdZhaEoHvCkEJ8L4HvnDA(提取码：tmq7)](https://pan.baidu.com/s/1NwdZhaEoHvCkEJ8L4HvnDA)
- 思维导图在线查看：[点击打开](/attachment/D.《移动WEB前端高级开发实践》_iKcamp.svg){target="_blank"}
- 得到电子书地址：[点击阅读](https://www.dedao.cn/ebook/reader?id=donM9vjLM8m6d5YQ7lvJGVz2Xgaqb3po1bWnBRyejENkP1KZo9rD4OApxpxkY7Ke)
- 京东纸质书地址：暂无
