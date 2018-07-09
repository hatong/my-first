import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import ContactUs from '../views/contact-us.vue';

Vue.use(VueRouter);

// const Home = r => require.ensure([], () => r(require('../views/home.vue')), 'chunkname1');  //vue的异步加载（解决复杂项目首页加载过慢）
const routes = [
  {
    path: '/',
    component: Home,
    name:'homePage',
    meta:{
      title:'首页',
    }
  },
  {
    path: '/contact-us',
    component: ContactUs,
    name:'contactUs',
    meta:{
      title:'联系我们',
    }
  },
  /*{ path: '/lists', component: Lists },
  { path: '/option', component: Option },
  { path: '/detail', component: Detail },*/
];

const router = new VueRouter({routes});

/*router 的钩子函数*/
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
