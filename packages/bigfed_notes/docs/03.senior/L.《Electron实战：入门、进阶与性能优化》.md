﻿---
title: 《Electron实战：入门、进阶与性能优化》精读笔记
description: 《Electron实战：入门、进阶与性能优化》精读笔记，大前端学习笔记，小磊哥er的博客
keywords: 《Electron实战：入门、进阶与性能优化》精读笔记，大前端学习笔记，小磊哥er的博客
--- 

# 《Electron实战：入门、进阶与性能优化》精读笔记

### 写在前面
- 书籍介绍：本书以实战为导向，讲解了如何用Electron结合现代前端技术来开发桌面应用。不仅全面介绍了Electron入门需要掌握的功能和原理，而且还针对Electron开发中的重点和难点进行了重点讲解，旨在帮助读者实现快速进阶。
- 我的简评：这本书内容量比较大，偏实践性的。对于需要使用Electron来做项目的可以精读一下，如果只是想了解Electron技术，粗略的翻看一下就好。
- ！！福利：文末有笔记思维导图、随书资料打包等下载地址哦

### 第1章 认识Electron
#### 1.1.Electron的由来
- 1. 两个框架都是基于Chromium和Node.js实现的，这就使得前端程序员可以使用JavaScript、HTML和CSS轻松构建跨平台的桌面应用
- 2. 两个框架对于开发者来说差别并不是特别大，最主要的差别无过于Electron区分主进程和渲染进程。主进程负责创建、管理渲染进程以及控制整个应用的生命周期，渲染进程负责显示界面及控制与用户的交互逻辑。
- 3. NW.js和Electron都是基于Chromium和Node.js实现的，Chromium和Node.js的应用场景完全不同

#### 1.2.基于Electron的应用
- 1. 在软件开发领域，最为开发人员所熟知的无过于Visual Studio Code了

#### 1.3.Electron的生态
- 1. electron-builder是一个Electron的构建工具，它提供了自动下载、自动构建、自动打包、自动升级等能力，是Electron生态中的基础支持工具，大部分流行的Electron应用都使用它进行构建和分发
- 2. 在Electron应用内存取本地数据，可以使用Cookie、LocalStorage或IndexedDB这些传统的前端技术，也可以选择Electron生态内的一些方案
- 3. Vue CLI Plugin Electron Builder和electron-vue是两个非常不错的工具
- 4. electron-react-boilerplate是一个项目模板，它把Electron、React、Redux、React Router、Webpack和React Hot Loader组合在一起。
- 5. angular-electron也是一个项目模板，开发者可以基于它快速构建基于Angular和Electron的应用

#### 1.4.Electron的优势
- 1. 相较于基于C++库开发桌面软件来说，基于Electron开发更容易上手且开发效率更高
- 2. 在执行效率上，如果前端代码写得足够优秀，Electron应用完全可以做出与C++应用相媲美的用户体验，Visual Studio Code就是先例
- 3. 由于Electron内置了Chromium浏览器，该浏览器对标准支持非常好，甚至支持一些尚未通过的标准，所以基于Electron开发应用不会遇到兼容问题

#### 1.5.Electron的不足
- 1. 打包后的应用体积巨大
- 2. 开发复杂度较大，进阶曲线较陡
- 3. 版本发布过快
- 4. 安全性问题
- 5. 资源消耗较大

#### 1.6.未来的竞争者PWA
- 1. 运用现代的Web开发技术以及传统的渐进式增强策略来创建跨平台Web应用程序
- 2. PWA是传统Web应用向桌面端的延伸，它的本质还是一个Web应用；而Electron应用则是一个实实在在的传统桌面GUI应用

### 第2章 轻松入门
#### 2.1.搭建开发环境
#### 2.2.创建窗口界面
#### 2.3.启动窗口
#### 2.4.引用JavaScript

#### 2.5.Electron API演示工具
- 1. Electron有非常丰富的API
- 2. Electron API演示工具Electron API Demos

#### 2.6.试验工具Electron Fiddle
- 1. Electron官方团队为开发者提供了一个试验工具：Electron Fiddle

### 第3章 主进程和渲染进程
#### 3.1.区分主进程与渲染进程
- 1. index.js中的代码逻辑即运行在Electron的主进程中。主进程负责创建窗口并加载index.html，而index.html中编写的代码将运行在Electron的渲染进程中
- 2. 主进程负责完成监听应用程序的生命周期事件、启动第一个窗口、加载index.html页面、应用程序关闭后回收资源、退出程序等工作。渲染进程负责完成渲染界面、接收用户输入、响应用户的交互等工作
- 3. 一个Electron应用只有一个主进程，但可以有多个渲染进程。一个BrowserWindow实例就代表着一个渲染进程。当BrowserWindow实例被销毁后，渲染进程也跟着终结
- 4. 主进程负责管理所有的窗口及其对应的渲染进程。每个渲染进程都是独立的，它只关心所运行的Web页面。在开启nodeIntegration配置后，渲染进程也有能力访问Node.js的API
- 5. 在Electron中，GUI相关的模块仅在主进程中可用。如果想在渲染进程中完成创建窗口、创建菜单等操作，可以让渲染进程给主进程发送消息，主进程接到消息后再完成相应的操作；也可以通过渲染进程的remote模块来完成相应操作。

#### 3.2.进程调试
- 1. 调试主进程
- 2. 调试渲染进程

#### 3.3.进程互访
- 1. 渲染进程访问主进程对象
- 2. 渲染进程访问主进程类型
- 3. 渲染进程访问主进程自定义内容
- 4. 主进程访问渲染进程对象

#### 3.4.进程间消息传递
- 1. 渲染进程向主进程发送消息：.1. 渲染进程使用Electron内置的ipcRenderer模块向主进程发送消息；2. 主进程通过ipcMain接收消息
- 2. 主进程向渲染进程发送消息：1. 主进程中通过控制渲染进程的webContents来向渲染进程发送消息；2. 渲染进程依旧使用ipcRenderer接收消息。
- 3. 渲染进程之间消息传递：1. 可以通过主进程中转，即窗口A先把消息发送给主进程，主进程再把这个消息发送给窗口B，这就完成了窗口A和窗口B的通信。

#### 3.5.remote模块的局限性
- 1. Electron团队提供remote模块给开发者，主要目的是降低渲染进程和主进程互访的难度

### 第4章 引入现代前端框架
#### 4.1.引入Webpack
- 1. webpack是一个现代前端应用程序的静态模块打包器

#### 4.2.引入Angular
- 1. Angular官方宣称其可以开发跨平台桌面应用

#### 4.3.引入React
- 1. 使用electron-react-boilerplate项目模板。

#### 4.4.引入Vue
- 1. Vue CLI Plugin Electron Builder和electron-vue是两个能将Vue引入Electron项目的工具。

### 第5章 窗口
#### 5.1.窗口的常用属性及应用场景

#### 5.2.窗口标题栏和边框
- 1. 自定义创库的标题栏：1. 商业应用自定义了窗口标题栏后，用户体验有了显著提升，且窗口的拖拽移动、最大化、最小化等功能并没有缺失；2. 设置frame:false之后，启动应用，窗口的边框和标题栏都不见了，只显示窗口的内容区
- 2. 窗口的控制按钮：1. 给该子元素设置-webkit-app-region:no-drag样式，以此来屏蔽掉这个从父元素继承来的功能
- 3. 窗口最大化状态控制：1. 用户点击最大化、最小化、还原、关闭按钮的操作，都是先通过remote对象获得当前窗口的实例（remote.getCurrentWindow），再操作窗口实例完成的
- 4. 防抖与限流：1. 防抖函数的作用是当短期内有大量的事件触发时，只会执行最后一次事件关联的任务；2. 限流函数的作用是当短期内有大量的事件被触发时，只会执行第一次触发的事件
- 5. 记录与恢复窗口状态：1. 记录窗口的状态信息，把窗口的大小、位置和是否最大化等信息保存在LocalStorage内。
- 6. 适时地显示窗口

#### 5.3.不规则窗口
- 1. 创建不规则窗口：1. 首先，把窗口的高度（height）和宽度（width）修改为相同的值；2. 其次，把窗口的透明属性（transparent）设置为true；3. 另外，透明的窗口不可调整大小。所以将resizable属性也设置为false；4. 为了防止双击窗口可拖拽区触发最大化事件，把maximizable属性也设置为false
- 2. 点击穿透透明区域：1. 需要用到窗口对象的setIgnoreMouseEvents方法，该方法可以使窗口忽略窗口内的所有鼠标事件，并且在此窗口中发生的所有鼠标事件都将被传递到此窗口背后的内容上。

#### 5.4.窗口控制
- 1. 阻止窗口关闭：1. 时候应用一般需要阻止窗口关闭，并提醒用户工作尚未保存，确认是否需要退出应用window.onbeforeunload；2. 也可以使用onbe-foreunload来阻止窗口关闭；3. 还有一种可行的解决方案，即使用Electron窗口内置的'close'事件实现阻止窗口关闭的功能。
- 2. 多窗口竞争资源：1. 两个渲染进程可能会同时读写一个本地文件；2. 第一种方案是两个窗口通过渲染进程间的消息通信来保证读写操作有序执行；3. 第二种方案是使用Node.js提供的fs.watch来监视文件的变化，一旦文件发生改变，则加载最新的文件，这样无论哪个窗口都能保证当前的内容是最新的，而文件的写操作则交由主进程执行；4. 第三种方案是在主进程中设置一个令牌：global.fileLock = false
- 3. 模态窗口与父子窗口
- 4. Mac系统下的关注点：1. Mac系统下有一个特殊的用户体验准则，就是应用程序关闭所有窗口后不会退出，而是继续保留在Dock栏，以便用户再想使用应用时，可以直接通过Dock栏快速打开应用窗口；2. 监听了应用程序的window-all-closed事件，一旦应用程序所有窗口关闭就会触发此事件

### 第6章 界面
#### 6.1.页面
- 1. 获取WebContents实例：1. webContents是Electron的核心模块，负责渲染和控制应用内的Web界面；2. Web开发过程中还有一个非常重要的元素——iframe子页面，Electron也为此提供了访问和控制子页面的对象webFrame；3. 只有窗口处于激活状态时才可以用getFocusedWebContents来获取webContents实例，未激活状态调用此方法，则将返回null
- 2. 页面加载事件及触发顺序：1. 按普通网页事件触发顺序描述：did-start-loading、page-title-updated、dom-ready、did-frame-finish-load、did-finish-load、page-favicon-updated、did-stop-loading
- 3. 页面跳转事件：1. webContents可以监听一系列与页面跳转有关的事件，其中凡是以navigate命名的事件，一般都是由客户端控制的跳转
- 4. 单页应用中的页内跳转：1. webContents可以监听一系列与页面跳转有关的事件，其中凡是以navigate命名的事件，一般都是由客户端控制的跳转；凡是以redirect命名的事件，一般都是由服务端控制的跳转
- 5. 页面缩放：1. 可以通过webContents的setZoomFactor方法来设置页面的缩放比例
- 6. 渲染海量数据元素

#### 6.2.页面容器
- 1. webFrame：1. webFrame是最常见的页面容器；2. routingId是webFrame实例的整型属性，你可以通过webFrame.routingId得到它的值
- 2. webview：1. webview是Electron独有的标签，开发者可以通过标签在网页中嵌入另外一个网页的内容
- 3. BrowserView：1. BrowserView被设计成一个子窗口的形式，它依托于BrowserWindow存在，可以绑定到BrowserWindow的一个具体的区域，可以随BrowserWindow的放大缩小而放大缩小，随BrowserWindow的移动而移动。

#### 6.3.脚本注入
- 1. 通过preload参数注入脚本：1. 脚本注入是Electron最有趣的功能，它允许开发者把一段JavaScript代码注入到目标网页中，而这段JavaScript代码看起来就好像是那个网页开发者自己开发的一样
- 2. 通过executeJavaScript注入脚本：1. 通过preload参数注入脚本适用于需要注入大量业务逻辑到第三方网站中的需求，而且有时可能不止注入了一个脚本文件；2. 很多时候可能只需要注入一两句JavaScript代码即可，只需要调用webContents的executeJavaScript即可；3. webContents的executeJavaScript方法返回的是一个Promise对象
- 3. 禁用窗口的beforeunload事件：1. 最优雅的解决方案是监听webContents的will-prevent-unload事件，通过event.preventDefault()；来取消该事件，这样就可以自由地关闭窗口了

#### 6.4.页面动效
- 1. 使用CSS控制动画：1. 开发者可以使用CSS Animations技术来控制页面元素产生动画效果，这是目前Web界面中最常用的动效实现方式
- 2. 使用JavaScript控制动画：1. JavaScript其实也有自己的动画API——Web Animations API，。好Chrome浏览器支持Web Animations API，

### 第7章 数据
#### 7.1.使用本地文件持久化数据
- 1. 用户数据目录：1. 一般情况下我们不应该把用户的个性化数据，例如用户应用程序设置、用户基本信息、用户使用应用程序所产生的业务数据等保存在应用程序的安装目录下；2. 操作系统为应用程序提供了一个专有目录来存储应用程序的用户个性化数据；3. Electron为我们提供了一个便捷的API来获取此路径： app.getPath("userData")
- 2. 读写本地文件：1. Electron保存用户数据到磁盘与Node.js并没有什么区别
- 3. 值得推荐的第三方库：1. lowdb是一个基于Lodash开发的小巧的JSON数据库；2. electron-store一个专门为Electron设计的，依赖的包很少的，很轻量的数据库，而且它还支持数据加密以防止数据被恶意用户窃取，甚至不需要你指定文件的路径和文件名，就直接把数据保存在用户的userData目录下

####  7.2.使用浏览器技术持久化数据
- 1. 浏览器数据存储技术对比：1. 开发Electron应用时，也可以自由地使用这些技术来存取数据，其控制能力甚至强于Web开发，比如读写被标记为HttpOnly的Cookie等；2. 在开发Electron应用时，我推荐大家使用Cookie和IndexedDB来存储数据
- 2. 使用第三方访问IndexedDB
- 3. 读写受限访问的Cookie
- 4. 清空浏览器缓存：1. 使用Electron为我们提供的clearStorageData方法

#### 7.3.使用SQLite持久化数据
- 1. SQLite是一个轻型的、嵌入式的SQL数据库引擎，其特点是自给自足、无服务器、零配置、支持事务。

### 第8章 系统
#### 8.1.系统对话框
- 1. 使用系统文件对话框
- 2. 关于对话框

#### 8.2.菜单
- 1. 窗口菜单：1. 用Electron创建一个窗口，窗口默认会具备系统菜单；2. Electron默认提供程序、编辑、视图、窗口、帮助等五个主菜单以及主菜单下的若干子菜单
- 2. HTML右键菜单
- 3. 系统右键菜单
- 4. 自定义系统右键菜单

#### 8.3.快捷键
- 1. 监听网页按键事件
- 2. 监听全局按键事件: 1. globalShortcut.register必须在app ready事件触发后再执行，不然快捷键事件无法注册成功；2. 如果希望取消注册过的快捷键，可以使用globalShortcut.unregister

#### 8.4.托盘图标
- 1. 托盘图标闪烁：1. 应用程序的ready事件中新建了一个Tray实例，并把图标文件的路径传递给了这个实例；2. QQ有一个有趣的特性，即有新消息时，QQ的托盘图标会闪烁。此特性的实现原理就是不断切换托盘图标。
- 2. 托盘图标菜单：1. 使托盘图标响应鼠标点击事件很简单tray.on('click', function() { win.show(); })

#### 8.5.剪切板
- 1. 把图片写入剪切板
- 2. 读取并显示剪切板里的图片：1. clipboard.readText();

#### 8.6.系统通知
- 1. 使用HTML API发送系统通知：1. Notification是一个HTML5的API，在Electron应用的渲染进程中也可以自由地使用它，而且不需要用户授权
- 2. 主进程内发送系统通知：1. 进程有Notification类型，它的大部分使用方法与HTML5的Notification类似，但有一个最主要的不同：HTML5的Notification实例创建之后会马上显示在用户系统的消息区域中；但Electron主进程中的Notification实例创建之后，不会立刻向系统发送通知，而是需要调用其show方法才会显示系统通知，而且可以多次调用show方法，把同一个通知多次向系统发送

#### 8.7.其他
- 1. 使用系统默认应用打开文件：1. shell模块可以被Electron中主进程和渲染进程直接使用，它的主要职责就是启动系统的默认应用
- 2. 接收拖拽到窗口中的文件
- 3. 使用系统字体
- 4. 最近打开的文件：1. 使用app的addRecentDocument方法，可以给应用增加一个最近打开的文件

### 第9章 通信
#### 9.1.与Web服务器通信
- 1. 禁用同源策略以实现跨域：1. 桌面GUI应用最常见的通信方式还是使用HTTP协议与Web服务进行通信
- 2. Node.js访问HTTP服务的不足
- 3. 使用WebSocket通信：1. WebSocket允许服务端主动向客户端推送数据，使客户端和服务器之间的数据交换变得更加简单
- 4. 截获并修改网络请求

#### 9.2.与系统内其他应用通信
- 1. Electron应用与其他应用通信：1. 系统内进程间通信一般会使用IPC命名管道技术来实现，Electron并没有提供相应的API，我们是通过Electron内置的Node.js使用此技术的；2. IPC命名管道区分客户端和服务端，其中服务端主要用于监听和接收数据，客户端主要用于连接和发送数据。服务端和客户端是可以做到持久连接双向通信的
- 2. 网页与Electron应用通信

#### 9.3.自定义协议（protocol）
- 1. 允许开发者自己定义一个类似HTTP或File的协议，当应用内出现此类协议的请求时，开发者可以定义拦截函数，处理并响应请求

#### 9.4.使用socks5代理
- 1. 常见的代理服务器有HTTP代理、HTTPS代理和socks代理，socks代理隐蔽性更强，效率更高，速度更快

### 第10章 硬件
#### 10.1.屏幕
- 1. 获取扩展屏幕：1. Elecron内置了API以支持获取主显示器及外接显示器的信息 remote.screen.getPrimaryDisplay()
- 2. 在自助服务机中使用Electron：1. 自助服务机内的应用与传统PC端桌面应用的不同之处在于以下两点： ·它们大部分不允许用户主动退出应用。 ·它们大部分都是支持触屏的应用；2. Electron应用默认支持触屏设备，无需做额外的设置。

#### 10.2.音视频设备
- 1. 使用摄像头和麦克风：1. 用户允许浏览器访问其音视频设备后，前端代码才有权访问这些设备。而Electron不必获得用户授权，直接具有访问用户音视频设备的能力
- 2. 录屏：1. 除了获取音视频设备传递的媒体流之外，你还可以通过Electron的desktopCapturer模块提供的API获取桌面应用的屏幕视频流。

####  10.3.电源
- 1. 电源的基本状态和事件：1. 获取到电源管理器（BatteryManager）的实例：navigator.getBattery()
- 2. 监控系统挂起与锁屏事件
- 3. 阻止系统锁屏：1. 在一些特殊的场景中，用户是不希望操作系统息屏式进入睡眠模式的，比如用户看电影、演示文稿或游戏挂机时；2. 操作系统为应用程序提供了阻止系统息屏、睡眠的API，Electron也有访问这个API的能力；3. powerSaveBlocker.start方法接收一个字符串参数，prevent-display-sleep阻止系统息屏，prevent-app-suspension阻止应用程序挂起

#### 10.4.打印机
- 1. 控制打印行为：1. Electron支持把webContents内的内容发送至打印机进行打印，
- 2. 导出PDF：1. 开发者可以利用webContents的打印能力把页面内容以PDF文件形式导出，

#### 10.5.硬件信息
- 1. 获取目标平台硬件信息：1.  process.getSystemMemoryInfo；2. process.getCPUUsage方法返回一个CPUUsage对象
- 2. 使用硬件串号控制应用分发：1. 一种常见的办法是获取用户设备的专有硬件信息，并把这个信息与当前使用该软件的用户信息、用户的付费情况信息绑定，保存在一个服务器上；2. 对于离线应用来说，开发者可以通过一个安全的算法来保证应用只被安装在一台设备上，具体实现过程为：当应用第一次启动时，应用获取到这个物理设备的专有硬件信息，并把这个信息发送到服务端，用户付费后，服务端通过算法生成一个与该硬件信息匹配的激活码，并把这个激活码发送给用户，由用户把激活码保存在应用内

### 第11章 调测
- 1. Electron作为一个桌面GUI框架，专门为测试人员提供了测试支持工具，比如接下来我们要讲到的Spectron。
11.2. Electron开发人员也可以在渲染进程中使用Node.js领域的测试框架，比如Mocha

#### 11.1.测试
- 1. 单元测试
- 2. 界面测试：1. 要做好界面测试工作，就需要使用专门为Electron应用设计的测试框架Spectron。

#### 11.2.调试
- 1. 渲染进程性能问题追踪：1. 谷歌浏览器提供了很强大的性能追踪工具。打开开发者调试工具，选中Performance标签页
- 2. 自动追踪性能问题：1. 基于此Electron为我们提供了contentTracing模块，此模块允许开发者以编码的方式启动性能问题追踪工作和停止性能问题追踪工作。
- 3. 性能优化技巧：1.  引入第三方模块须谨慎； 尽量避免等待；尽量合并资源
- 4. 开发环境调试工具：1. Electron官方团队为开发者提供了一个调试工具——Devtron，这个工具以浏览器插件的形式为开发者服务，
- 5. 生产环境调试工具：1. Debugtron是一个基于Electron开发的客户端桌面GUI程序，它就是为调试生产环境下的Electron应用而生的

#### 11.3.日志
- 1. 业务日志：1. 开发者可以通过log.transports.file.level和log.transports.console.level来分别设置日志输出目标和日志输出级别
- 2. 网络日志
- 3. 崩溃报告：1. Electron内置了崩溃报告上报模块crashReporter，开发者可以利用此模块收集应用程序崩溃时的环境情况和异常数据，并让应用程序把这些数据提交到一个事先指定好的服务器上；2. Electron官方推荐了两个用于构建崩溃报告服务的项目。一个是Mozilia的Socorro，。另外一个是mini-breakpad-server，

### 第12章 安全
#### 12.1.保护源码
- 1. 立即执行函数：1. 立即执行函数有两个优势：第一是不必为函数命名，避免了污染全局变量；第二是函数内部形成了一个单独的作用域，外部代码无法访问内部的对象或方法，这可以有效地避免业务变量或方法被恶意脚本引用
- 2. 禁用开发者调试工具：1. 黑客可以利用它追踪、分析我们的代码，从而找到漏洞攻击我们的程序，或者绕过某些业务逻辑验证，直接访问核心功能；2. 在开发、测试环境下，一般会先允许前端开发人员或测试人员使用开发者调试工具，在程序分发前再把开发者调试工具禁用掉；3. 在Electron里就不必这么麻烦了，开发者在创建窗口时直接设置webPreferences.devTools参数即可禁用调试工具
- 3. 源码压缩与混淆：1. 如果只是没有注释、空格和空行，恶意用户在调试你的代码，理解代码的执行逻辑时仍旧毫无阻碍；2. 如果压缩工具把变量名、方法名和类名全部换掉，变成无意义的名字，这对于恶意调试者来说就是一记重击了；3. 代码压缩工具的意图主要是为了提升性能，而不是为了防止破解。
- 4. 使用asar保护源码：1. asar是一种将多个文件合并成一个文件的归档格式，且多文件打包后，还可以按照原来的路径读取打包后的内容。
- 5. 使用V8字节码保护源码：1. V8引擎的一项重要职责就是将JavaScript编译成字节码，字节码是机器代码的抽象，它表述程序逻辑的方式与物理CPU计算模型相似；2. 可以事先把JavaScript代码编译为V8字节码，发布应用时仅发布V8字节码文件，JavaScript源码不随应用程序分发给终端用户；3. 推荐读者使用bytenode（https://github.com/OsamaAbbas/bytenode ）工具库来编译JavaScript代码。

#### 12.2.保护客户
- 1. 禁用Node.js集成
- 2. 启用同源策略
- 3. 启用沙箱隔离：1. Chromium主要的安全特征之一便是所有的blink渲染和JavaScript代码都在沙箱环境内运行。
- 4. 禁用webview标签

#### 12.3.保护网络
- 1. 屏蔽虚假证书：1. Electron应用即使禁用了开发者调试工具，使用HTTPS协议与服务端进行通信时，也还是可以很容易被攻击者分析数据传输协议；2. 为了更好地保证Electron应用与Web服务交互的安全性，我们应该使用session模块的setCertificateVerifyProc方法
- 2. 关于防盗链：1. 有安全意识的网站运维者一般都会防范其他网站盗链自己网站的静态资源；2. Referer头允许服务器识别发起请求的用户正从哪里进行访问

#### 12.4.保护数据
- 1. 使用Node.js加密解密数据：1. 但Node.js内置了数据加密、解密模块，可以利用它来保证关键数据的安全
- 2. 保护lowdb数据：1. lowdb是Electron应用中常用的JSON文件访问工具，它不支持自动加密、解密数据，但它提供了一个扩展钩子；2. 加密、解密过程封装成了两个方法：encrypt和decrypt，在lowdb创建adapter对象时，提供给FileSync方法。
- 3. 保护electron-store数据：1. electron-store内置了数据加密、解密的支持，只要在创建Store对象时为其设置encryptionKey配置项即可加密保存在客户端的数据。
- 4. 保护用户界面：1. win.setContentProtection(true)；2. 这类黑客工具捕获你的窗口，Windows环境下窗口将显示一块黑色区域，应用窗口拒绝被捕获

#### 12.5.提升稳定性
- 1. 捕获全局异常：1. 利用Node.js的技术捕获全局异常，以这种方式捕获异常后，异常会被“吃掉”，开发者工具控制台也不会再输出任何异常提示信息了
- 2. 从异常中恢复：1. Electron提供了两个事件来帮助开发者截获渲染进程崩溃或挂起的事件；2. 可以通过监听渲染进程的crashed事件来获悉渲染进程何时发生了崩溃错误；3. 开发者也可以通过监听'unresponsive'事件收集程序运行日志，给客户友善的提示，并恢复应用程序运行状态

### 第13章 发布
#### 13.1生成图标
- 1. 把图标文件放置在[your_project_path]/public目录下，然后安装electron-icon-builder组件

#### 13.2.生成安装包
- 1. Electron生态下有两个常用的打包工具：electron-packager、electron-builder
- 2. electron-packager依赖于Electron框架内部提供的自动升级机制，需要自己搭建自动升级服务器，才能完成自动升级工作。electron-builder则内置自动升级机制，把打包出的文件随意存储到一个Web服务器上即可完成自动升级
- 3. 还有专门为Windows平台打包的工具electron-installer-windows
- 4. 专门给Linux平台打包的electron-installer-snap

#### 13.3.代码签名
- 1. 可以在digicert、Comodo或GoDaddy等平台按时间付费的方式购买代码签名证书

#### 13.4.自动升级
- 1. autoUpdater模块负责管理应用程序升级，checkForUpdates方法会检查配置文件中Web服务地址下是否存在比当前版本更新的安装程序，如果有则开始下载。
- 2. autoUpdater模块是根据package.json中的版本号来判断当前版本是否比服务器上的版本老的

### 写在后面
- pdf书籍、笔记思维导图、随书代码打包下载地址：暂无
- 思维导图在线查看：[点击打开](/attachment/L.《Electron实战：入门、进阶与性能优化》.svg){target="_blank"}
- 得到电子书地址：[点击阅读](https://www.dedao.cn/ebook/reader?id=detail?id=xGM6Evn5byxq2PnXBz71AjZaol6R8WJL5awOKpGkd4gmMLEJrYNQe9VvD8P4jLkK)
- 京东纸质书地址：[点击购买](https://u.jd.com/kzSoI8K)
