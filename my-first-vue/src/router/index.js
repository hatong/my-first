import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import ContactUs from '../views/contact-us.vue';
import Cooperation from '../views/cooperation.vue';
import Intro from '../views/intro.vue';
import Product from '../views/product.vue';

Vue.use(VueRouter);

// const Home = r => require.ensure([], () => r(require('../views/home.vue')), 'chunkname');  //vue的异步加载（解决复杂项目首页加载过慢）
//  const Home1 = resolve => require(['../views/home.vue'],resolve);  //vue的lazyload（解决复杂项目首页加载过慢）
const routes = [
  {
    path: '/',
    component: Home,
    name:'homePage',
    meta:{
      title:'热销产品-热销蔬菜|热销肉类|热销水产-安徽昊轩农业配送有限公司',
      keyWords:'昊轩农业配送产品 昊轩热销产品 安徽昊轩 合肥蔬菜配送 昊轩配送',
      description:'蔬菜，肉类，水产，干货',
    },

  },
  {
    path: '/intro',
    component:Intro,
    name:'introduce',
    meta:{
      title:'公司简介-蔬菜配送|肉类配送|水产配送-安徽昊轩农业配送有限公司',
      keyWords:'周谷堆农产品配送公司 蔬菜批发 企事业单位食材配送 蔬菜采购配送',
      description:'安徽昊轩农业配送有限公司是一家集蔬菜瓜果、肉禽鱼蛋、水产海鲜、冻品、副食品、调味品为一体的专业化配送企业，公司专业从事为企事业单位、政府机关食堂、酒店、工厂、学校、生鲜超市等进行新鲜蔬菜、水果、肉类、粮油等农副产品一站式配送服务',
    }
  },
  {
    path: '/product',
    component:Product,
    name:'商品展示',
    meta:{
      title:'商品展示-安徽昊轩农业配送有限公司',
      keyWords:'昊轩农业配送产品 昊轩商品展示 安徽昊轩 合肥蔬菜配送 企事业蔬菜配送 昊轩配送',
      description:'我们提供配送的农产品种类多，品种全，四年配送更专业',
    }
  },

  {
    path: '/cooperation',
    component: Cooperation,
    name:'Cooperation Platform',
    meta:{
      title:'合作平台-安徽昊轩农业配送有限公司',
      keyWords:'',
      description:''
    },
  },

  {
    path: '/contact-us',
    component: ContactUs,
    name: 'contactUs',
    meta: {
      title: '合作联系-安徽昊轩农业配送有限公司',
      keyWords:'昊轩农业配送产品 昊轩商品展示 安徽昊轩 合肥蔬菜配送 企事业蔬菜配送 昊轩配送',
      description:'我们提供配送的农产品种类多,品种全,四年配送更专业'
    },
  },
];

const router = new VueRouter({
  // mode:'history',    //去掉url中的#，采用 bowserhistory 方式,这种方式需要后台服务器配合
  routes,
});

/*router 的钩子函数*/
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
    document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keyWords);
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description);
  }
  next();
});

export default router;
