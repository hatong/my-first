<template>
  <div class="home">
    <main-header></main-header>
    <carousel></carousel>
    <introduce></introduce>
    <sectionContent :secContent="firstContent"></sectionContent>
    <sectionSlide></sectionSlide>
    <sectionReport :reportData="reportContent"></sectionReport>
    <otherSection></otherSection>
    <sectionReport :reportData="reportContentTwo"></sectionReport>
    <footerContent></footerContent>
  </div>
</template>

<script>
/*import barTop fro m '../components/barTop.vue';
import card from '../components/card.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';*/
import mainHeader from '../components/header.vue';
import carousel from '../components/carousel.vue';
import introduce from '../components/sectionIntroduce.vue';
import sectionContent from '../components/sectionContent.vue';
import sectionSlide from '../components/sectionSlide.vue';
import sectionReport from '../components/sectionReport.vue';
import otherSection from '../components/otherSection.vue';
import footerContent from '../components/footer.vue';

export default {
  data(){
    return {
      firstContent: {
        title:"美菜扶贫菜帮扶计划：助力千亿农产品上行",
        listContent:[
          {
            imgUrl:require("../images/assist1.png"),
            subtitle:"爱心助销亳州万亩土豆",
            desc:"亳州近万亩土豆滞销，因土豆卖不上价，老农不舍得雇工收土豆，自己在田间用手刨。5月份，美菜网已帮助消化亳州滞销土豆近100万斤。但这对于亳州近万亩滞销土豆而言，仍旧杯水车薪。",
          },
          {
            imgUrl:require("../images/assist2.png"),
            subtitle:"爱心助销四川老震区红皮萝卜",
            desc:"四川北川羌族自治县开坪乡全益村近700吨红皮萝卜滞销，价格低至5毛钱也无人问津。老百姓需要背上120斤重的背篓将萝卜运上车，一天来回得走上10公里山路。美菜网发动媒体并联动成都分公司采购，半天时间40万斤萝卜已基本被下单订购。",
          },
          {
            imgUrl:require("../images/assist3.png"),
            subtitle:"爱心助销山东百吨红皮圆葱",
            desc:"山东省昌乐县鄌郚镇中辛庄村，提前储放在大棚里的滞销圆葱眼看就要过储存期了，没有人来收的话就要烂在棚里了。美菜网与多家遭遇滞销的农户签订意向采购圆葱200万斤，产地分布在安丘、昌乐、嘉祥等地。",
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
    }
  },
  components: {
    /*'bar-top': barTop,
    'card': card,
    'alert': alert,
    'bar-bottom': barBottom,*/
    'main-header': mainHeader,
    'carousel': carousel,
    'introduce': introduce,
    'sectionContent': sectionContent,
    'sectionSlide': sectionSlide,
    'sectionReport': sectionReport,
    'otherSection': otherSection,
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
