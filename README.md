# 项目构建说明
> 在开发一个项目时,我们会有一系列的流程,按照该流程,在这里详细的说明

## 业务开发流程
![业务开发流程](https://s1.ax2x.com/2018/05/16/xuHOd.png)

通过以上四个步骤来进行开发

### 技术选型
> 技术选型时整个业务开发所做的第一个项目,在正常时开发前会经过需求会议来决定项目的
>- 成品具体功能
>- 成品具体类别
>- 后续的制作程度

通过以上的信息来决定了`技术选型`,使用与哪些技术来完成所做出来的效果


#### 技术选型分析
![技术选型分析](https://s1.ax2x.com/2018/05/16/xuEWH.png)


#### 构建工具

**(1)构建工具有哪些?**
- `gulp` (任务管理)  
- `grunt` (任务管理) 
- `webpack` (打包编译)
- `fis` (继承构建)
- `prepack` (代码优化,打包编译)
- `rollup` (与webpack相识)

**(2)构建工具有什么作用？**
- `资源压缩`
- `静态资源替换`
- `模块化处理`
- `编译处理`

#### MVVM框架选择
现在常见的框架有
- Vue.js 
- React.js
- Angular.js

>但是经过现在最新的更新与资源来说,这三者的区别都已经没有那么的明显,在双向绑定,单向处理与组件化,三者都可以实现,因此区别已经没有本质上的区别

但是我们又如何选择框架呢? 在这里我们通过以下三点来选择
1. 检测团队的人员,如果是后端到前端的,可能更倾向与`Angular.js`, 但是如果考虑到团队中很多新人,更考虑到学习的成本来说,那就更倾向于`Vue.js`
2. 了解每个框架的`生态圈`,比如文档, 资源等等, 了解框架作者对该技术框架是否有着保持维护,为了项目的健壮性,如果作者对该技术框架没有后续的维护,如果一旦出现BUG那就非常难处理
3. 对于技术框架的原理的掌握程度,是否能够掌握的了,在复杂的应用着,是否清晰知道该技术框架能够处理的了
#### 模块化设计
- Javascript模块化设计
- CSS模块化设计

#### 自适应方案设计
> 多个设备的自适应显示, 通过一份某机型尺寸的设计稿,适配其他机型的显示,因此需要划分一份方案,具体实现不是通过手动的方式去适配,而是通过构建工具的方法来进行自动适配

#### 代码维护及复用性设计的思想
- 需求变更
- 产品送代
- Bug定位
- 新功能开发

#### 项目构建

**项目装备**

    1、创建目录
    2、初始化
        npm intit  =>  package.json
    3、创建业务目录
        app => js => main、App.vue ...
        app => css => reset.scss
        app => views => index.html

**创建配置文件**
    
    1、创建配置文件
        webpack.config.js
    2、文件配置
    
        entry (入口)          resolve 
        module (配置)         devtool  
        plugins (插件)        devServer (开启服务)
        output (输出)

        基础配置               进阶配置


### 业务开发
> 主要处理业务流程,通过自行开发的流程来完成产品的开发工作

### 测试验证
> 在这里时, 会需要`验证`开发完成的产品是否达到产品要求,因此要做一步的验证,检验是否达到需求的预期

>如果验证通过后,会再通过多次`测试`,并检测产品的是否符合逻辑与BUG等等


### 发布上线

#### 生产构建

**合并**
- style
- javascript

**抽取**

   样式要从JavaScript中抽取出来

**压缩**

   JS 、CSS都要压缩

**调试**

   开启sourceMap

#### 发布部署

**提交**

   使用Git提交代码，管理线上版本

**部署**

   php、java等从git仓库拉取代码，通过小流量、跨机方、全量部署

**开启Gzip**

   开启gzip压缩

**更新CDN**

   不要忘了更新CDN