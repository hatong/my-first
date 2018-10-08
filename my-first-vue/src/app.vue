<!--这是整个项目的主组件,所有的page都是在这切换的,也可以认为所有的路由也是App.vue的子组件-->
<!--当你访问一个组件时，router-view 就被路由对应的组件替代了
    eg: 当我们匹配到/intro,那么intro.vue里面的组件就替代了下面的router-view
-->
<template>
  <div class="app">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
