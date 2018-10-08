// import 'ratchet-npm/dist/css/ratchet.css'; // get ratchet
// import 'font-awesome/css/font-awesome.css'; // get font-awesome
import 'animate.css/animate.css'; // get animate.css
import 'bootstrap/dist/css/bootstrap.min.css'; // get bootstrap.css
import 'jquery/dist/jquery.min.js'; // get bootstrap.js
import 'bootstrap/dist/js/bootstrap.min.js'; // get bootstrap.js


import FastClick from 'fastclick';
import Vue from 'vue'; // get vue
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll

import App from './app.vue'; // get root module
import router from './router';
import store from './store'; // get vuex -> store
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body); // init fastclick
const options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);
Vue.use(VueLazyload);

/*Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'images/1.jpg',
  loading: 'images/1.jpg',
  attempt: 1
});*/

// init
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

