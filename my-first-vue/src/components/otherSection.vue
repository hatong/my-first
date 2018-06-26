<template>
    <div class="container">
        <div class="row">
            <div class="interestWrapper">
                <div class="line"></div>
                <p class="interest dark">其他公益项目</p>
            </div>
            <!--小候鸟关爱计划-->
            <div class="specific">
                <div class="col-xs-5 nopadding">
                    <a target="_blank"><img class="beccafico" src="../images/beccafico.png"></a>
                </div>
                <!--my-col-xs-6-beccafico-->
                <div class=" col-xs-7 text-wrapper ">
                    <h4 class="care-plan"><span class="icon"></span><span>小候鸟关爱计划</span></h4>
                    <div class="care">
                        <p>宗旨：最美菜公益基金“小候鸟关爱计划”旨在关注留守儿童及流动未成年人的生存状况，通过关怀帮扶及志愿活动，让小候鸟感受爱的温度。</p>
                        <p>根据2016年3月的最新数据，我国留守儿童及流动未成年人的总数在1亿左右，大约占全国3亿未成年人的三分之一。也就是说，我国3个未成年人中就有一个处于留守或流动状态。</p>
                        <p>每年暑假，繁华都市有一群特殊的过客从这个村到那座城，我们称之为“小候鸟”。</p>
                        <p>最美菜公益基金“小候鸟关爱计划”，旨在关注留守儿童及流动未成年人的生存状况，通过关怀帮扶及志愿活动，让小候鸟感受爱的温度。</p>
                    </div>
                </div>
            </div>
            <!--最美教室和最美包裹-->
            <div class="row beautiful">
                <div class="classroom col-xs-6 ">
                    <img class="my-col-xs-6" src="../images/classrom.png">
                    <div class="hAll">
                        <h4 class="beautiful-plan"><span class="beautiful-icon01"></span><span><span class="beautiful-title">最美教室</span></span></h4>
                        <p class="beautiful-text">“最美教室”其实是一个多媒体视频教室。“最美教室”之所以“最美”，不仅仅在于它拥有的各种设备，更是因为它能让留守在农村的小候鸟与远方的父母进行视频通话，让在城市打工的父母“远程”实现对孩子的陪伴。最美教室已经于广西柳州市三江县洋溪乡红岩村中心小学和山东省德州市夏津县新盛店镇蔡庄小学正式启用。</p>
                    </div>
                </div>
                <div class="package col-xs-6">
                    <div class="floatR">
                        <img class="my-col-xs-6 " src="../images/package.png">
                        <div class="my-col-xs-6 hAll">
                            <h4 class="beautiful-plan"><span class="beautiful-icon02"></span><span><span class="beautiful-title">最美包裹</span></span></h4>
                            <p class="beautiful-text">最美包裹是一份心灵守护套餐，意在弥补小候鸟们留守生活中缺乏父母陪伴的缺憾，对其多层面教育辅导，促其心灵及身体健康成长。目前，最美包裹活动开展两期，小候鸟群体涵盖美菜网物流司机的子女、农产品供应链弱势群体子女和农村留守儿童。</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .interestWrapper {
        text-align: center;
        line-height: 50px;
        position: relative;
        height: 50px;
        margin-top: 60px;
        margin-bottom: 40px;
    }
    .line {
        width: 100%;
        height: 1px;
        background: rgb(179,179,179);
        position: absolute;
        top: 25px;
        left: 0;
        z-index: 1;
    }
    .interest {
        background: white;
        height: 50px;
        position: absolute;
        line-height: 50px;
        left: 50%;
        transform: translate(-50%, 0%);
        z-index: 99;
        font-size: 30px;
        padding: 0 10px;
        color: #383838;
    }
    .specific {
        overflow: hidden;
        background: rgb(248,248,248);
    }
    .nopadding {
        padding-left: 0 !important;
    }
    .beccafico {
        width: 460px;
        height: 300px;
    }
    .text-wrapper {
        height: 100%;
        padding-left: 10px;
    }
    .care-plan {
        font-size: 24px;
        color: #383838;
        display: flex;
        align-items: center;
        display: -webkit-flex;
        margin-top: 40px;
        margin-left: 30px;
    }
    .icon {
        background: rgb(226,62,40);
        width: 8px;
        height: 8px;
        margin-right: 8px;
    }
    .care {
        font-size: 14px;
        color: rgb(170,170,170);
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 20px;
    }
    .beautiful {
        margin-top: 70px;
    }
    .my-col-xs-6 {
        width: 50%;
        float: left;
    }
    .classroom img, .package img {
        width: 240px;
        height: 300px;
    }
    .hAll {
        float: left;
        height: 300px;
        width: 290px;
        background: rgb(248,248,248);
    }
    .beautiful-plan {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 19px;
        margin-left: 20px;
    }
    .beautiful-icon02 {
        background: #F5A623;
        width: 8px;
        height: 8px;
        margin-right: 1px;
    }
    .beautiful-icon01 {
        background: rgb(74,148,247);
        width: 8px;
        height: 8px;
        margin-right: 1px;
    }
    .beautiful-title {
        font-size: 24px;
        color: #383838;
        margin-left: 10px;
    }
    .beautiful-text {
        color: rgb(170,170,170);
        font-size: 14px;
        padding: 0 20px;
        margin-top: 10px;
    }
    .package {
        text-align: left;
    }
    .floatR {
        float: right;
    }
</style>