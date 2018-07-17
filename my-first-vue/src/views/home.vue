<template>
  <div class="home">
    <main-header :currentPage="currentPage"></main-header>
    <carousel></carousel>
    <sectionContent :secContent="vegetableContent"></sectionContent>
    <sectionContent :secContent="seafoodContent"></sectionContent>
    <sectionContent :secContent="meatContent"></sectionContent>
    <footerContent></footerContent>
  </div>
</template>

<script>

import mainHeader from '../components/header.vue';
import carousel from '../components/carousel.vue';
import sectionContent from '../components/sectionContent.vue';
import footerContent from '../components/footer.vue';

export default {
  data(){
    return {
      vegetableContent: {
        title:"新鲜蔬菜",
        bgColor:true,
        listContent:[
          {
            imgUrl:require("../images/1.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/2.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/3.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/4.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/5.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/6.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/7.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/8.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/9.jpg"),
            subtitle:"",
            desc:"",
          },
          /*{
            imgUrl:require("../images/10.jpg"),
            subtitle:"",
            desc:"",
          },*/
        ],

      },
      seafoodContent: {
        title:"生猛海鲜",
        bgColor:false,
        listContent:[
          {
            imgUrl:require("../images/11.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/12.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/13.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/14.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/15.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/16.jpg"),
            subtitle:"",
            desc:"",
          },{
            imgUrl:require("../images/17.jpg"),
            subtitle:"",
            desc:"",
          },{
            imgUrl:require("../images/18.jpg"),
            subtitle:"",
            desc:"",
          },
        ],

      },
      meatContent: {
        title:"美味肉类",
        bgColor:true,
        listContent:[
          {
            imgUrl:require("../images/19.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/20.jpg"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/21.jpg"),
            subtitle:"",
            desc:"",
          },

        ],

      },
      currentPage:{
        homePageActivate:true, //当前页面是首页
      }
    }
  },
  components: {
    'main-header': mainHeader,
    'carousel': carousel,
    'sectionContent': sectionContent,
    'footerContent': footerContent,
  },
  methods:{

  }
}
</script>

<style>
  body{
    min-width: 1170px;
  }
  .container{
    width:1170px !important;
  }
</style>
