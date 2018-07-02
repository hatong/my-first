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
            imgUrl:require("../images/2.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/3.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/4.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/5.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/6.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/7.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/8.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/9.png"),
            subtitle:"",
            desc:"",
          },
          /*{
            imgUrl:require("../images/10.png"),
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
            imgUrl:require("../images/11.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/12.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/13.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/14.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/15.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/16.png"),
            subtitle:"",
            desc:"",
          },{
            imgUrl:require("../images/17.png"),
            subtitle:"",
            desc:"",
          },{
            imgUrl:require("../images/18.png"),
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
            imgUrl:require("../images/19.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/20.png"),
            subtitle:"",
            desc:"",
          },
          {
            imgUrl:require("../images/21.png"),
            subtitle:"",
            desc:"",
          },

        ],

      },
      reportContent: {
        title:"相关视频及媒体报道",
        listContent:[
          {
            imgUrl:require("../images/deadstock.png"),
            subtitle:"一根黄瓜的旅程：告诉你菜价是如何贵起来的",
            desc:"来源：腾讯视频",
          },
          {
            imgUrl:require("../images/online.png"),
            subtitle:"滞销菜帮扶计划——美菜在行动",
            desc:"来源：腾讯视频",
          },
          {
            imgUrl:require("../images/assist.png"),
            subtitle:"最美菜公益基金滞销菜帮扶计划启动",
            desc:"来源：新华网",
          },
          {
            imgUrl:require("../images/poverty.png"),
            subtitle:"美菜助销贫困县优质农产品 “草原红参”销往京津",
            desc:"来源：搜狐网",
          },
        ],
        bgColor:true,
      },
      reportContentTwo: {
        title:"相关报道",
        listContent:[
          {
            imgUrl:require("../images/convention.png"),
            subtitle:"世界互联网大会美菜网刘传军谈精准扶贫",
            desc:"来源：光明网",
          },
          {
            imgUrl:require("../images/packagetwostage.png"),
            subtitle:"最美菜公益基金第二期最美包裹赠予赴京小候鸟",
            desc:"来源：搜狐网",
          },
          {
            imgUrl:require("../images/classroomtwostage.png"),
            subtitle:"最美菜公益基金第二所“最美教室”建成",
            desc:"来源：新华网",
          },
        ],
        bgColor:false,
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
