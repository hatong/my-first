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
    + _proto_, new , object.create()和 new object()区别
    + 对象的_proto_指向创建它的函数对象的原型对象
    + 钩子函数的机制与实现需要了解一下
- function绑定几种方式，添加注册事件
-flex布局 ：
    + flex-direction/ flex-wrap/ flex-flow/ justify-content/ align-items/ align-content
    + flex:1 ===>   flex-grow |  flex-shrink | flex-basis = 1 1 auto;
- H5语义化标签、H5新标签（canvas，video）、web可访问性(web Accessibility)
- ajax(Asynchronous JavaScript and XML)原理(xmlHttpRequest)
- 前端跨域(同源策略->ip,域名，端口号都能造成跨域) (服务器反向代理；与正向代理的区别？)
    + script标签 / JsonP / iframe / websocket/ 服务器反向代理/ CORS
- web lazyload 懒加载，web优化
- 模块化开发 AMD（requireJs,前置依赖，加载方便）/ CMD (seaJs，就近依赖，开发方便)
- ES6 / webpack/ bable / postCss
- vue2.x ：双向绑定，watcher，setter，异步队列更新,生命周期，vuex（vuex核心是store），
- vue
    + 首次加载慢的优化方案：懒加载，分离框架库
- vue
    + 关于懒加载和异步加载：通过require这个关键字,自行百度懒加载<br>const Home1 = resolve => require(['../views/home.vue'],resolve);,
- vue
    +对于直接根据索引修改数组某个元素，不能实现双向绑定的问题：可以使用 Vue.set/vm.$set 等方法触发更新（详情可见官网）。当然，数组本身自带的API，vue是可以监听的，如：push(),pop(),shift(),unshift(),splice(),sort(),reverse()等
- vue
    + $refs/ref需要注意;
    + 另外:<input v-model="test1">,这个test1 必须是已经在vue data中已定义的; v-model 其实是一个简写
- vue
    + 除了父子组件数据沟通，利用vuex来管理data之外，还有一种能够使兄弟组件数据沟通的方法 —— BUS总线（中央事件总线）
    + Bus.$on('setMsg', content => { this.msg = content;});
    + Bus.$emit('setMsg', 'Hi Vue!');
- 开发模式：MVC / MVVM
- 前端脚手架知识， vue-cli
- 从输入url到浏览器渲染过程：
    + 查询host，查询DNS，与服务器四次握手三次挥手，加载数据，渲染树，DOM树
- cookie 和 session
- post 和 get 区别；http请求方式除了post 和 get，还有HEAD,PUT,DELETE,OPTIONS,TRACE,CONNECT
- js设计模式：单例模式，工厂模式，观察者模式，组合模式.  vue使用的是观察者模式（通常又被称作为发布-订阅者模式）（Observer->Dep->Watcher）
- js关于数组的操作API值得留意：split(数组转字符串，注意这与join相反，join是array to string)，splice（删除或添加数组元素），slice（截取数组），push(),pop(),shift(),unshift()，concat等等
- js 数组相关：不改变原数组，返回新的数组：通过concat和 slice(0)方法，返回一个副本数组，这样修改副本数组的时候，不会修改原数组。<br>tip:传统的直接将数组赋值给一个变量，只是将数组的引用（我认为是指针）赋值给变量，改变被赋值的变量时，原数组的值跟着被修改，这是受限于js对象原理。类似上面说的vue直接修改数组或者对象的值是不能触发双向绑定的。
- 事件队列，事件循环，宏任务，微任务
- 编程思想：声明式编程 / 命令式编程
- React
    + 生命周期: componentWillMount(),componentDidMount(),componentWillReceiveProps(nextProps),shouldComponentUpdate(nextProps, nextState),componentWillUpdate(nextProps, nextState),componentDidUpdate(),componentWillUnmount()
    + 创建组件引发的思考：Mixins支持情况，详情可以搜索关键字 react component
    + react 触发 render 的时机： 1:首次加载;2:setState改变组件内部state;3:接受到新的props.
    + component中的render() ：生成一个组件的虚拟dom节点。  一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的著作权归作者所有。
    + ReactDOM.render: 将模板转为HTML语言，并插入指定的DOM节点，即生成真实DOM，并将之挂载到指定位置。 注意要和组件中的render()区分开
    + super(porps) 这个super代表父类的构造函数，调用了父类的方法。在定义component的时候，如果定义了构造函数（constructor），则必须在构造函数里加上super()
    + state是组件自己管理数据，控制自己的状态，可变; props是外部参数，props不可改变(只读); 没有state的叫做无状态组件，有state的叫做有状态组件
    + 在React中，状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的。这就是所谓的状态提升(在我的理解中，这是类似vue的父子组件以及兄弟组件之间的数据沟通)。
 --------------------------------------------------------
 - 关于react 和 vue的比较，个人理解（有待更新）：
    + vue学习成本确实比较低，易于上手。vue采用观察者模式，对每个组件进行监听，只改需要改的部分（去重后）
    + vue写起来更优雅一点，比较舒服。
    + Vue主要是由开发者进行维护的，
    + react 监听到dom变化，就会把所有的子节点全部更新;如果DOM一致，仅有属性改变，那保持DOM，仅更新属性。
    + React由Facebook这类大公司维护
    + react首先提出来虚拟dom的概念，并延伸出 react native，在各种终端有良好的兼容性。
    + 其他方面，两者似乎差不多
