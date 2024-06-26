---
title: 《推荐系统三十六式》阅读笔记
description: 《推荐系统三十六式》阅读笔记，大数智学习笔记，小磊哥er的博客
keywords: 《推荐系统三十六式》阅读笔记，大数智学习笔记，小磊哥er的博客
--- 

# 《推荐系统三十六式》学习笔记

### 写在前面
- 书籍介绍：暂无。
- 我的简评：暂无。
- ！！福利：文末有书籍地址、笔记思维导图、相关资料下载地址哦

### 开篇词

#### 用知识去对抗技术不平等

- 但凡AI类的落地，都需要具备这几个基本元素才行：数据、算法、场景、计算力

- 有一个趋势确信无疑：世界在向网状发展，万事万物倾向于相互连接构成复杂网络

### 概念篇

#### 1.你真的需要个性化推荐系统吗？

- 什么是推荐系统？按照维基百科的定义：它是一种信息过滤系统，手段是预测用户（User）对物品（Item）的评分与偏好

- 推荐系统能做什么？推荐系统可以把那些最终会在用户（User）和物品（Item）之间产生的连接提前找出来

- 推荐系统需要什么？需要已经存在的连接，从已有的连接去预测未来的连接

- 一个简单的指标，用于判断是不是需要推荐系统：connection的变化量/（user的变量量*item的变化量）

- 搭建一个推荐系统的前期投入不小，需要：组建团队、购置计算资源、积累数据、花费时间优化

#### 2.个性化推荐系统有哪些绕不开的经典问题？

- 推荐系统的预测问题模式，从达成的连接目标角度区分有两大类：评分预测、行为预测

- 评分预测相关算法模型研究的兴盛，最大的助攻是Netflix举办的推荐算法大赛

- 推荐系统预测行为方式有很多，常见的有两种：直接预测行为本身产生的概率，和预测物品的相对排序

- 把每一个推荐给用户的物品按照“会否点击”二分类，构建分类模型，预估其中一种分类的概率，就是CTR预估

- 各大厂高度重视隐式反馈，归纳起来有以下几点原因：1、数据比显式反馈更加稠密；2、隐式反馈更代表用户的真实想法；3、隐式反馈常常和模型的目标函数关联密切

- 推荐系统的几个顽疾：1、冷启动问题；2、探索与利用问题；3、安全问题

#### 3.这些你必须应该具备的思维模式

- 四个关键的元素：1、UI和UE；2、数据；3、领域知识；4、算法

- 一种对算法的常见误会：短期高估，长期低估

- 两种思维模式：目标思维和不确定性思维

- 目标思维背后是“量化一切”的价值取向

- 不确定性思维就是：不用因果逻辑严丝合缝地提前推演，而是用概率的眼光去看结果

### 原理篇：内容推荐

#### 4.画鬼容易画人难：用户画像的“能”和“不能”

- 用户画像不是推荐系统的目的，而是在构建推荐系统的过程中产生的一个关键环节的副产品

- 通常大型推荐系统一般都分为召回和排序两个阶段

- 建立用户画像的关键因素：第一个是维度，第二个是量化

- 按照对用户向量化的手段来分，用户画像构建方法分成三类：第一类是查户口；第二类是堆数据；第三类是黑盒子

- 查户口就是直接使用原始数据作为用户画像的内容；堆数据就是堆积历史数据，做统计工作；黑盒子就是用机器学习方法，学习出人类无法直观理解的稠密向量

#### 5.从文本到用户画像有多远

- 文本数据是互联网产品中最常见的信息表达形式，数量多、处理快、存储小

- 要用物品和用户的文本信息构建出一个基础版本的用户画像，大致需要做这些事：1、把所有非结构化的文本结构化，去粗取精，保留关键信息；2、根据用户行为数据把物品的结构化结果传递给用户，与用户自己的结构信息合并

- 利用成熟的NLP算法分析得到的信息有下面几种：1、关键词提取；2、实体识别；3、内容分类；4、文本；5、主题模型；6、嵌入

- 标签选择，一种简单粗暴的办法是直接把用户产生过行为的物品标签累积在一起

- 另一种思路是把用户对物品的行为，消费或者没有消费看成一个分类问题

- 特征选择问题最常用的是两个方法：卡方检验（CHI）和信息增益（IG）

- CHI就是卡方检验，本身是一种特征选择方法

- IG即Information Gain，信息增益，也是一种有监督的关键词选择方法，也需要有标注信息

- 信息增益应用最广就是数据挖掘中的决策树分类算法，经典的决策树分类算法挑选分裂节点时就是计算各个属性的信息增益，始终挑选信息增益最大的节点作为分裂节点

- 卡方检验和信息增益不同之处在于：前者是针对每一个行为单独筛选一套标签出来，后者是全局统一筛选

#### 6.超越标签的内容推荐系统

- 基于内容的推荐系统，标签只是很小一部分

- 要把基于内容的推荐做好，需要做好“抓、洗、挖、算”四门功课

- 抓：抓取数据补充内容源，洗：清洗冗余的内容、垃圾内容、政治色情等敏感内容，挖：对内容做深入的挖掘，算：匹配用户的兴趣和物品的属性，计算出更合理的相关性

- 典型基于内容推荐的框架图：内容这一端，内容源经过内容分析，得到结构化的内容库和内容模型，也就是物品画像。用户这一端，用户看过推荐列表后，会产生用户行为数据，结合物品画像，经过用户分析得到用户画像

- 内容分析的产出有两个：1、结构化内容库，2、内容分析模型

- 结构化的内容库，最重要的用途是结合用户反馈行为去学习用户画像，容易被忽略的是第二个用途，在内容分析过程中得到的模型

- 内容推荐的算法，一种最典型的场景：提高某种行为的转化率，如点击、收藏、转发等

- 基于内容的推荐一般是推荐系统的起步阶段，而且会持续存在，它的重要性不可取代

### 原理篇：近邻推荐

#### 7.人以群分，你是什么人就看到什么世界

- 协同过滤是一个比较大的算法范畴，通常划分为两类：1、基于记忆的协同过滤；2、基于模型的协同过滤；

- 背后的思想：先根据历史消费行为帮你找到一群和你口味很相似的用户；然后根据这些和你很相似的用户再消费了什么新的、你没有见过的物品，都推荐给你

- 核心是用户物品的关系矩阵

- 典型的稀疏矩阵存储格式：CSR、COO

- 通常降低相似度计算复杂度的办法有两种：1、对向量采样计算；2、向量化计算

- 一般来说，中小型公司如果没有特别必要的话，不要用分布式计算；拆分Map Reduce任务也不一定非要用Hadoop或者Spark实现

- 改进主要集中在用户对物品的喜欢程度上：1、惩罚对热门物品的喜欢程度；2、增加喜欢程度的时间衰减

- 基于用户的协同过滤有两个产出：1、相似用户列表；2、基于用户的推荐结果

#### 8.解密“看了又看”和“买了又买”

- 基于物品的协同过滤算法诞生与1998年，是由亚马逊首先提出的

- 基本步骤：1、构建用户物品的关系矩阵；2、两两计算行向量之间的相似度；3、根据推荐场景不同，产生推荐结果

- 计算物品的相似度，一般选择余弦相似度

- 通常的改进方向有两种：1、物品中心化；2、用户中心化

- 计算推荐结果：第一种属于TopK推荐，类似“猜你喜欢”；第二种属于相关推荐

- Slope One算法计算的不是物品之间的相似度，而是计算的物品之间的距离，相似度的反面

#### 9.协同过滤中的相似度计算方法有哪些

- 推荐算法分为两个门派，一个是机器学习派，另一个是相似度门派

- 近邻推荐的核心就是相似度计算方法的选择

- 在近邻推荐中，最常用的相似度是余弦相似度，除此之外还有欧式距离、皮尔逊相关度、自适应的余弦相似度、局部敏感哈希等

- 欧式距离，是一个欧式空间下度量距离的方法，不适合布尔向量之间

- 余弦相似度度量的是两个向量之间的夹角

- 皮尔逊相关度，先对向量做了中心化，再计算余弦相似度，不适合用作计算布尔值向量之间相关度

- 杰卡德相似度，是两个集合的交集元素个数在并集中所占的比例，是为布尔值向量私人定做的

- 余弦相似度适用于评分数据，杰卡德相似度适合用于隐式反馈数据

### 原理篇：矩阵分解

#### 10.那些在Netflix Prize中大放异彩的推荐算法

- 几点近邻模型的问题：1、物品之间存在相关性，信息量并不随着向量维度增加二线性增加；2、矩阵元素稀疏，计算结果不稳定，增减一个向量维度，导致近邻结果差异很大的情况存在

- 矩阵分解，直观上来说简单，就是把原来的矩阵，近似分解成两个小矩阵的乘积，在实际推荐计算时不再使用大矩阵，而是使用分解得到的两个小矩阵

- SVD和矩阵分解不能划等号，因为除了SVD还有一些别的矩阵分解方法

- 按照机器学习框架，一般就是考虑两个核心要素：1、损失函数；2、优化算法

- 整个SVD的学习过程就是：1、准备好用户物品的评分矩阵，每一条评分数据看做一条训练样本；2、给分解后的U矩阵和V矩阵随机初始化元素值；3、用U和V计算预测后的分数；4、计算预测的分数和实际的分数误差；5、按照梯度下降的方向跟新U和V中的元素值；6、重复步骤3到5，知道达到停止条件

- 在SVD中考虑时间因素，有几种做法：1、对评分按照时间加权，让久远的评分更趋紧平均值；2、对评分时间划分区间，不同呃时间区间分别学习出隐因子向量，使用时按照区间使用对应的隐因子向量来计算；3、对特殊的期间，如节日、周末等训练对应的隐因子向量

- SVD及其一些典型的改进方案分别是：1、考虑偏置信息；2、考虑隐式反馈和用户属性；3、考虑时间因素

#### 11.Facebook是怎么为十亿人互相推荐好友的

- 矩阵分解要将用户物品评分矩阵分解成两个小矩阵，一个矩阵是代表用户偏好的用户隐因子向量组成，另一个矩阵是代表物品语义主题的隐因子向量组成

- 所以矩阵分解，所做的事就是矩阵填充

- 几乎所有的及其学习训练中：偏差大的模型欠拟合，方差大的模型过拟合

- 优化方法常用的选择有两个，一个是随机梯度下降（SGD），另一个是交替最小二乘（ALS）

- 在实际应用中，交替最小二乘更常用一些

- Facebook提出了两个方法得到真正的推荐结果：1、利用一些专门设计的数据结构存储所有物品的隐因子向量，从而实现通过一个用户向量可以返回最相似的K个物品；2、拿着物品的隐因子向量先做聚类，海量的物品会减少为少量的聚类。然后再逐一计算用户和每个聚类中心的推荐分数，给用户推荐物品就变成了给用户推荐物品聚类

#### 12.如果关注排序效果，那么这个模型可以帮到你

- 有一个词叫做均方根误差，用于评价模型预测精准程度的

### 原理篇：模型融合

#### 13.经典模型融合方法：线性模型和输模型的组合拳

- 推荐系统在技术实现上一般划分为三个阶段：挖掘、召回、排序。

- 在召回阶段，其实就是各种简单的、复杂的推荐算法，比如说基于内容的推荐，会产生一些推荐结果，比如基于物品的协同过滤会产生一些结果，矩阵分解会产生一些结果，等等。

- 模型融合的作用除了统一地方军阀，还有集中提升效果的作用。在机器学习中，有专门为融合而生的集成学习思想。

- 一个典型的模型融合方案是：逻辑回归和梯度提升决策树组合

- 在对召回阶段不同算法给出的候选物品计算 CTR 预估时，需要两个东西：1、特征；2、权重

- 第一个是特征，就是用量化、向量的方式把一个用户和一个物品的成对组合表示出来。

- 第二个是权重，每个特征都有一个权重，权重就是特征的话事权。

- 特征工程 + 线性模型，是模型融合、CTR 预估等居家旅行必备。

- 权重的学习主要看两个方面：损失函数的最小化，就是模型的偏差是否足够小；另一个就是模型的正则化，就是看模型的方差是否足够小；

- 树模型最原始的是决策树，简称 DT。最常见的就是随机森林，简称 RF，和梯度提升决策树，简称 GBDT。

#### 14.一网打尽协同过滤、矩阵分解和线性模型

- 另一种常用来做 CTR 预估的模型，因子分解机。

#### 15.深度和宽度兼具的融合模型Wide and Deep

- CTR 预估的常见做法就是广义线性模型，如 Logistic Regression，然后再采用特征海洋战术，就是把几乎所有的精力都放在搞特征上：挖掘新特征、挖掘特征组合、寻找新的特征离散方法等等。

- 搜索由检索和排序构成。推荐系统也有召回和排序两部构成，

- 一个深度神经网络由输入层，隐藏层，输出层构成。

- 所谓深度学习，就是深度神经网络，就是有不止一层的隐藏层存在。层数越多，非线性越强，模型越复杂。

### 原理篇：MAB问题

#### 16.简单却有效的Bandit算法

- 建立连接可以理解成：为用户匹配到最佳的物品；但也有另一个理解就是，在某个时间某个位置为用户选择最好的物品。

- Bandit 算法来源于人民群众喜闻乐见的赌博学

- Bandit 算法有汤普森采样，UCB 算法，Epsilon 贪婪

#### 17.结合上下文信息的Bandit算法

- LinUCB 算法做了一个假设：一个物品被选择后推送给一个用户，其收益和特征之间呈线性关系。

- LinUCB 算法有一个很重要的步骤，就是给用户和物品构建特征，也就是刻画上下文。

- LinUCB，它有这么几个优点：1、由于加入了特征，所以收敛比 UCB 更快，也就是比 UCB 更快见效；2、各个候选臂之间参数是独立的，可以互相不影响地更新参数；3、由于参与计算的是特征，所以可以处理动态的推荐候选池，编辑可以增删文章；

- LinUCB 以及所有的 Bandit 算法都有个缺点：同时处理的候选臂数量不能太多，不超过几百个最佳。

- LinUCB 只是一个推荐框架，可以将这个框架应用在很多地方，比如投放广告，为用户选择兴趣标签

#### 18.如何将Bandit算法与协同过滤结合使用

- Bandit 算法是一种不太常用在推荐系统的算法，究其原因，是它能同时处理的物品数量不能太多。

- 但是，在冷启动和处理 EE 问题时，Bandit 算法简单好用，值得一试。

### 原理篇：深度学习

#### 19.深度学习在推荐系统中的应用有哪些

- 深度学习也就是深度神经网络，并不是一个全新的概念

- 对本质属性的挖掘，有两个好处：1、可以更加高效且真实地反映出事物本身的样子；2、可以更加高效真实地反映出用户和物品之间的连接

- 深度学习可以帮助推荐系统的地方。第一个叫做 Embedding，就是嵌入，第二个叫做 Predicting，就是预测。

- 矩阵分解得到的隐因子向量就是一种 Embedding，Word2vec 也是一种 Embedding

- 从 YouTube 的推荐系统可以看出，深度学习主要贡献在于特征表达学习和排序模型上。

#### 20.用RNN构建个性化音乐播单

- 有一些矩阵分解算法考虑了时间属性，比如 Time-SVD；

- 循环神经网络，也常被简称为 RNN，是一种特殊的神经网络

- 你就需要记住一点：链式规则，一路求导下去。

- 交叉熵是模型的目标函数，训练模型的目的就是要最小化它，也就是“误差反向传播”的“误差”。

- 循环神经网络和普通神经网络相比，就是在两个时刻的隐藏状态之间多了网络连接。

### 原理篇：其他应用算法

#### 21.构建一个科学的排行榜算法

- 所谓智能，就是带有学习性质，能够和复杂的用户端形成互动，在互动过程中，算法参数得到更新和进化。

- 排行榜到底有哪些用处呢：1、排行榜可以作为解决新用户冷启动问题的推荐策略；2、排行榜可以作为老用户的兴趣发现方式；3、排行榜本身就是一个降级的推荐系统

- 最简单的排行榜，就是直接统计某种指标，按照大小去排序。

- 不靠谱的原因在于以下的几个问题：1、非常容易被攻击，也就是被刷榜；2、马太效应会一直存在，除非强制替换，否则一些破了记录的物品会一直占据在榜单中；3、不能反映出排行榜随着时间的变化

- 另一个考虑时间因素的排行榜算法是牛顿冷却定律。

- 一个经典的好评率估算公式，叫做威尔逊区间，超级复杂的公式

- 这个公式的好处是：所有的物品，不论有多少人为它评分，都可以统一地计算出一个合理的平均分数，它已经被国内外电影评分网站采纳在自己的排行榜体系中

#### 22.使用的加权采样算法

- 按照权重采样一部分标签来使用，这样做的好处当然很明显：1、大大减少召回时的计算复杂度；2、可以保留更多的用户标签；3、每次召回计算时还能有所变化；

- 加权采样有两种情况：一种是能够已知全部样本的个数；另一种是不知道总体样本有多大，或者总量有多大，以至于你不愿意全部遍历之后再输出采样结果

#### 23.推荐候选池的去重策略

- 在推荐系统中，有一个刚需就是去重。主要是在两个地方：一个是内容源去重，另一个是不重复给用户推荐。

- 对内容做重复检测，直观的思路是分词，然后提取关键词，再两两计算词向量之间的距离，距离小于一定阈值后就判定为重复

- 另一个需求是在内容阅读类推荐场景下，给用户推荐的内容不要重复，推荐过的内容就不再出现在推荐候选集中。

- Simhash 为每一个内容生成一个整数指纹，其中的关键是把每个词哈希成一个整数，这一步常常采用 Jenkins 算法。

- 实际上，解决这类看一个字符串在不在一个集合中的问题，有一个有点老但很好用的做法，就是 Bloomfilter，有时候也被称为布隆过滤器。

- 布隆过滤器的原理也要用到哈希函数。它包含两部分：一个很长的二进制位向量，和一系列哈希函数

- 只是哈希函数的结果在两个算法中有不同的处理手段，Simhash 是加权，Bloomfilter 则是用来做寻址。

### 工程篇：常见架构

#### 24.典型的信息流架构是什么样的

- 信息流是推荐系统应用中的当红炸子鸡，它表现形式有很多：社交网络的动态信息流、新闻阅读的图文信息流、短视频信息流等等。

- 传统的信息流产品知识简单按照时间排序，而被推荐系统接管后的信息流逐渐成为主流，按照兴趣排序，也叫作“兴趣 feed”。

- 要实现一个信息流，可以划分为两个子问题：1、如何实现一个按照时间顺序排序的信息流系统？2、如何给信息流内容按照兴趣重排序？

- 整体的框架划分成几个大的模块：日志收集、内容发布、机器学习、信息流服务、监控。

- 信息流的基本数据有三个：用户（User）、内容（Activity）和关系（Connection）。

- 用于表达 Activity 的元素有相应的规范，叫作 Atom。根据 Atom 规范的定义，一条 Activity 包含的元素有：Time、Actor、Verb、Object、Target、Title、Summary。

- 在数据存储上可以选择的工具有下面的几种：Activity 存储可以采用 MySQL、Redis、Cassandra 等；Connection 存储可以采用 MySQL；User 存储可以采用 MySQL。

- 把动态内容出现在受众的信息流中，直觉上是这样实现的：1、获取用户所有连接的重点(如好友、关注对象、兴趣标签)；2、获取这些连接终点(关注对象)产生的新内容(Activity)；3、按照某个指标排序后输出。

- 拉模式就是当用户访问时，信息流服务才会去相应的发布源拉取内容到自己的 feed 区来，这是一个阻塞同步的过程。

- 推模式的实现是系统为每一个用户单独开辟一个信息流存储区域，用于接收推送的内容。

- 简单的结合方案：对于活跃度高的用户，使用推模式；对于活跃度没有那么高的用户，使用拉模式；对于热门的内容生产者，缓存其最新的N条内容，用于不同场景下的拉取。

- 对于信息流的产生和存储可以选择的工具有：用户信息流的存储可以采用Redis等KV数据库，使用uid作为key；信息流推送的任务队列可以采用Celery等成熟框架。

- 避免陷入两个误区：1、没有目标；2、人工量化

- 目前信息流采用机器学习排序，以提升类似互动率，停留时长等指标，这已经成为共识。

- 信息流的特征有三类：1、用户特征；2、内容特征；3、其他特征（刷新时间、所处页面等）

- 信息流是一个数据驱动的系统，既要通过历史数据来寻找算法的最优参数，又要通过新的数据验证排序效果。

- 数据流管道要使用的相关数据可能有：1、互动行为数据；2、曝光内容；3、互动行为与曝光的映射关系；4、用户画像内容；5、信息流的内容分析数据；

- 数据的管道可以分成三块：1、生成训练样本，可离线；2、排序模型训练，可离线；3、模型服务化，实时服务。

#### 25.Netflix个性化推荐架构

- 一个好的推荐系统架构应该具有这些特质：1、实时响应请求；2、及时、准确、全面记录用户反馈；3、可以优雅降级；4、快速实验多种策略。

- 整体架构可以分为三个层级：1、离线：不用实时数据，不提供实时服务；2、近线：使用实时数据，不保证实时服务；3、在线：使用实时数据，要保证实时服务

- 在线层的触发时机是当用户发出请求，也就是用户进入一个推荐场景，推荐位等着展示推荐结果时

- 哪些计算逻辑适合放在在线层：1、简单的算法逻辑；2、模型的预测阶段；3、商业目标相关的过滤或者调权逻辑；4、场景有关的一些逻辑；5、互动性强的一些算法；

- 离线层就是躲在推荐系统的大后方，批量、周期性地执行一些计算任务

- 离线阶段主要面对的数据源就是 Hadoop，实质上是 HDFS。

- 离线阶段的任务主要是两类：模型训练和推荐结果计算。

- 近线层结合了离线层和在线层的好处，摒弃了两者的不足。

- 常用的流计算框架有 Storm，Spark Streaming，FLink 等

- 简化的架构：1、完全舍弃掉近线层；2、避免使用分布式系统

#### 26.总览推荐架构和搜索、广告的关系

- 应对信息过载重担先后交给了两种主要形式，包括以搜索为代表的各种主动寻找信息的形式，以及以推荐为代表的各种被动接受信息的形式。

- 另外介于两者之间，还有一种商业化解决信息触达问题，就是广告系统

- 三者都是解决信息过滤问题的

- 搜索，推荐和广告本质上都在解决信息过载的问题，各自解决的手段、目标不相同，各自诞生在产品生命周期不同阶段，以至于系统实现也不尽相同。

- 搜索更关注内容消费者，搜索要解决的是精确快速找到想要的结果，最重要的目标是降低延迟和提高相关性。

- 推荐系统不同于搜索引擎，用户使用搜索时目标明确，而使用推荐系统往往总会漫无目的

- 搜索和推荐都是为人找信息，而广告是为信息找人。

- 广告系统关注的是商业利益最大化，精准和相关都不是终极目的，只是其中的一个手段。

- 架构抽象一下三者的需求共性：本质上都是在匹配，匹配用户的兴趣和需求，但匹配的目标，条件和策略不尽相同。

- 进一步抽象，分为三步：过滤候选、排序候选、个性化输出。

### 工程篇：常见模块

#### 27.巧妇难为无米之炊：数据采集关键要素

- 数据采集，按照用途分类又有三种：1、报表统计；2、数据分析；3、机器学习

- 给推荐系统收集日志这件事，依次要讨论的是：日志的数据模型，收集哪些日志，用什么工具收集，收集的日志怎么存储。

- 所谓数据模型，其实就是把数据归类。

- 就推荐系统而言，推荐系统要做的事情就是预测那些最终会建立的人和物之间的连接，依赖的是已有的连接，以及人和物的属性

- 后端收集业务日志好处：1、实时性；2、可及时更新；3、开发简单

#### 28.让你的推荐系统反应更快：实时推荐

- 推荐系统从业者所追求的三个要素：捕捉兴趣要更快，指标要更高，系统要更健壮。

- 一个处在第三层次的实时推荐，需要满足三个条件：1、数据实时进来；2、数据实时计算；3、结果及时更新

- Kafka 以生产者消费者的模式吞吐数据

- 常见的流计算平台有 Twitter 开源的 Storm，“Yahoo！”开源的 S4，还有 Spark 中的 Streaming。

#### 29.让数据驱动落地，你需要一个实验平台

- 要做到数据驱动，就要做到两点：第一点是数据，第二点是驱动

- 要做到驱动，需要一个 AB 实验平台

- 互联网实验，需要三个要素：1、流量；2、参数；3、结果

- 所谓重叠实验，就是一个流量从进入产品服务，到最后返回结果呈现给用户，中间设置了好几个检查站，每个检查站都在测试某些东西，这样同时做多组实验就是重叠实验。

- 重叠实验最大的问题是怎么避免流量偏置，引入三个概念：1、域；2、层；3、桶

- 流量分配方式：1、Cookie + 层ID取模；2、完全随机；3、用户ID+层ID取模；4、Cookie+日期取模

#### 30.推荐系统服务化、存储选型及API设计

- 提供一个在线服务，需要两个关键元素：数据库和 API。

- 特征数据有两种，一种是稀疏的，一种是稠密的，稀疏的特征常见就是文本类特征，用户标签之类的，稠密的特征则是各种隐因子模型的产出参数。

- 特征数据又常常要以两种形态存在：一种是正排，一种是倒排。

- 正排需要用列式数据库存储，倒排索引需要用 KV 数据库存储。前者最典型的就是 HBase 和 Cassandra，后者就是 Redis 或 Memcached。

- ElasticSearch。这原本是一个构建在开源搜索引擎 Lucene 基础上的分布式搜索引擎，也常用于日志存储和分析，但由于它良好的接口设计，扩展性和尚可的性能，也常常被采用来做推荐系统的简单第一版，直接承担了存储和计算的任务。

- Cassandra 在数据库的 CAP 理论中可以平滑权衡，而 HBase 则是强一致性，并且 Cassandra 读写性能优于 HBase，因此 Cassandra 更适合推荐系统，

- 还有一种存储模式，就是键值对内存数据库，这当然首推 Redis。

- 以下场景中常常见到 Redis 的：1、消息队列；2、优先队列；3、模型参数

- Redis 被人诟病的就是不太高可用

- API 有两大类，一类数据录入，另一类是推荐服务

- 1. 猜你喜欢；2. 相关推荐；3. 热门排行榜

### 工程篇：效果保证

#### 31.推荐系统的测试方法及常见指标

- 推荐系统的测试方法有四种： 业务规则扫描、离线模拟测试、在线对比测试、用户访谈。

- 检测系统到底有多好，其实，也有两类，一类是深度类，一类是广度类。

- 深度类指标就指在检测系统在这两个工作上是否做得到位，有针对离线模型的指标，也有在线的指标：1、评分准确度；2、排序；3、分类准确度；4、覆盖率；5、失效率；6、新颖性；7、更新率

- 通常检测推荐系统的商业指标有：点击率，转化率。

- 衡量推荐系统是否健康的指标常用的有三个：1、个性化；2、基尼系数；3、多样性

- 推荐系统作为一种 AI 系统，其测试方法不完全相同于传统软件功能测试。

#### 32.道高一尺魔高一丈：推荐系统的攻防

- 被研究得最为彻底的就是针对协同过滤的攻防：一方面是协同过滤本身就应用广泛，另一方面是针对协同过滤的攻击容易生效。

- 所以攻击协同过滤，核心问题在于如何操纵选民。选民有两种，一种是用户，一种是物品，前者是基于用户的协同过滤所需要的，后者是基于物品的协同过滤所需要的。

- 通常的手段就是，批量制造假用户资料，并装作是与被欺骗用户兴趣相投的人。托攻击或者 Shilling Attacks，托也就是水军。

- 攻击手段包含这些元素：1、目标物品，就是攻击方要扶持或者打压的那个物品；2、助攻物品，就是用来构造假的相似用户所需要的物品；3、陪跑物品，就是用来掩饰造假的物品

- 分段攻击就是想办法把目标物品引入到某个群体中，做法就是攻击者先圈定好用户群体，再列出这个群体肯定喜欢的物品集合，然后同时用假用户给目标物品和这批物品集合评分，做法类似热门攻击。

- 防护手段按照层级，可以分为下面几种：1、平台级；2、数据级；3、算法级

- 平台级：一面是提高批量注册用户的成本，另一方面是产品教育用户积极参与，并提供真实的反馈

- 数据级：数据级别防护重点是从数据中识别出哪些数据是假的，哪些用户是被操纵的选民。通常是采用机器学习思路，标注一批假用户或假反馈数据，训练分类器，在线上识别出反馈。

- 算法级：算法级别就是在推荐算法设计时，要根据情况做一些改进和选择

- 改进方向包括下面几种：1、引入用户质量，限制对于低质量的用户参与计算，或者限制新用户参与计算；2、限制每个用户的投票权重，即在计算用户相似度时引入较重的平滑因子，使得用户之间的相似度不容易出现过高的值

#### 33.和推荐系统有关的开源工具及框架介绍

- 文本分析相关的工作就是将非结构化的文本转换为结构化。主要的工作就是三类：1、主题模型；2、词嵌入；3、文本分类；

- 基于用户、基于物品的协同过滤，矩阵分解，都依赖对用户物品关系矩阵的利用。常常要涉及的工作有下面几种：1、KNN相似度计算；2、SVD矩阵分解；3、SVD++矩阵分解；4、ALS矩阵分解；5、BPR矩阵分解；6、低维稠密向量近邻搜索

- 模型融合这部分，有线性模型、梯度提升树模型。

- 所谓完整的推荐系统是指：包含推荐算法实现、存储、接口。

- 倾向于选择各个模块的开源项目，再将其组合集成为自己的推荐系统，这样的好处有下面几种：1、单个模块开源项目容易入手，学习成本低，性能好；2、自己组合后更容易诊断问题，不需要的不用开发；3、单个模块的性能和效果更有保证。

### 产品篇

#### 34.推荐系统在互联网产品商业链条中的地位

- 推荐系统处理的是信息，它的主要作用是在信息生产方和信息消费方搭建起桥梁。

- 信息经济其实就是注意力经济，而推荐系统就是留住注意力的重要手段。

- 注意力有个特点：总量有限。随着信息越来越丰富，注意力越来越稀缺。

- 个人把注意力定义为：内容被消耗的加速度与平台内容复杂度的乘积。

- 制定一些提升平台剩余注意力的策略：1、内容创作适当少倾注注意力；2、提升内容难度；3、提高单用户消耗加速度；4、提高活跃用户数

- 打造一个推荐系统的成本分布在这几个地方：1、团队成本；2、硬件成本；3、机会成本；

#### 35.说说信息流的前世今生

- 最厉害的注意力存储器就是信息流，尤其是个性化信息流，也叫做兴趣 Feed，

- NewsFeed 的成功，验证了几个常识：1、数据驱动比舆论驱动靠谱，别听人们嘴上是怎么说的，只看人们是如何行动的；2、窥探隐私，向群体靠拢，害怕孤单是普遍人性，把新鲜事公开这件事验证了这一点；3、注意力非常有限，用推荐系统的方法更好地储存注意力，基于兴趣的信息流验证了这一点。

- 内容源是信息流的一种重要基础设施，要想尽办法建设好。内容源应该考虑下面几种：1、质量；2、多样性；3、质量

- NewsFeed 还有另一个配套设施，那就是吸金的广告系统

#### 36.组件推荐团队及工程师的学习路径

- 定义团队的角色：算法工程师，软件开发工程师，其他非技术角色

- 个人成长具备三个核心素质：1、有较强的工程能力；2、有较强的理论基础；3、有很好的可视化思维

- 非典型工程师的加分项：1、学习能力；2、沟通能力；3、表达能力

### 结束语与参考阅读


### 写在后面
- pdf书籍、笔记思维导图、资料打包下载地址：暂无
- 思维导图在线查看：[点击打开](/attachment/D.《推荐系统三十六式》_刑无刀.svg)
- 得到电子书地址：暂无