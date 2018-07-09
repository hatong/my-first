# it is my first github
- 列出所有本地分支
    + git branch
- 切换分支
    + git checkout [branch-name]
- 合并指定分支到当前分支
    + git merge [branch]
- 显示有变更的文件
    + git status

- git pull
- git clone [url]
- git add .
- git commit -m [message]
- git push
------------------------------------------------------------
# 近期总结：
- js 原型链以及继承:
    + _proto_, new , object.create
- function绑定几种方式，添加注册事件
-flex布局 ：
    + flex-direction/ flex-wrap/ flex-flow/ justify-content/ align-items/ align-content
    + flex:1 ===>   flex-grow |  flex-shrink | flex-basis = 1 1 auto;
- H5语义化标签、H5新标签（canvas，video）、web可访问性(web Accessibility)
- ajax(Asynchronous JavaScript and XML)原理(xmlHttpRequest)
- 前端跨域(同源策略) (服务器反向代理；与正向代理的区别？)
    + script标签 / JsonP / iframe / websocket/ 服务器反向代理/ CORS
- web lazyload 懒加载，web优化
- 模块化开发 AMD（requireJs,前置依赖，加载方便）/ CMD (seaJs，就近依赖，开发方便)
- ES6 / webpack/ bable / postCss
- vue2.x ：双向绑定，watcher，setter，异步队列更新,生命周期，vuex（vuex核心是store），
- vue 首次加载慢的优化方案：懒加载，分离框架库
- vue 关于懒加载和异步加载：通过require这个关键字,自行百度懒加载
<br>{path:'/first',component:first},
- vue 对于直接根据索引修改数组某个元素，不能实现双向绑定的问题：可以使用 Vue.set/vm.$set 等方法触发更新（详情可见官网）。当然，数组本身自带的API，vue是可以监听的，如：push(),pop(),shift(),unshift(),splice(),sort(),reverse()等
- 开发模式：MVC / MVVM
- 前端脚手架知识， vue-cli
- 从输入url到浏览器渲染过程：
    + 查询host，查询DNS，与服务器四次握手三次挥手，加载数据，渲染树，DOM树
- cookie 和 session
- post 和 get 区别
- js设计模式：单例模式，工厂模式，观察者模式，组合模式
- js关于数组的操作API值得留意：split，splice，slice 等等
- 事件队列，事件循环，宏任务，微任务
