<template>
    <div class="contact-body">
        <div id="slider-with-blocks-1" class="royalSlider rsMinW  rsHor rsFade rsWithBullets">
            <div class="rsOverflow" >
                <div class="rsContainer">
                    <div class="rsSlide ">
                        <div class="bContainer" >
                            <span class="rsABlock txtCent s1" data-move-effect="left" data-delay="1000" data-move-offset="500" data-easing="easeOutBack" data-fade-effect="none" >
                                <p> 联系我们 </p> <img src="images/line.png">
                            </span>
                            <span class="rsABlock txtCent s2" data-move-effect="left" data-delay="1500" data-move-offset="500" data-fade-effect="none">
                                <img src="images/icon1.png"> &nbsp;电话：400-1866-365
                            </span>
                <span class="rsABlock txtCent s3" data-move-effect="left" data-delay="2000" data-move-offset="500" data-speed="1000" data-fade-effect="none" style="">
                                <img src="images/icon2.png"> &nbsp;邮箱
                            </span>
                <span class="rsABlock txtCent s4" data-move-effect="left" data-delay="2500" data-move-offset="50" data-fade-effect="true" style="">
                                <img src="images/icon3.png"> &nbsp; 地址：安徽省合肥市黄山路616号信息产业园3号楼
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rsNav rsBullets">
                <div class="rsNavItem rsBullet rsNavSelected"><span></span></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
          return {};
        },
        mounted:function () {

        },
        methods:{

        },
    }
</script>
<style>
    body {
        font-size: 16px;
    }
    .contact-body{
        padding-top: 91px;
        width: 100%;
        height: 691px;
        background: url(../images/bg5.png) center 91px no-repeat;
    }
    .rsOverflow {
        width: 100%;
        position: relative;
        overflow: hidden;
        float: left;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        height: 600px;
    }
    .rsContainer {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin-top: 161px;
    }
    .txtCent {
        text-align: center;
        width: 100%;
    }

    .rsContainer{
        transition-duration: 0s;
    }
    .rsSlide{
        z-index:0;
    }
    .bContainer{
        color: #d4d4d4;
    }
    .rsABlock.txtCent.s1{
        font-size: 30px;
        display: block;
        transform: translate3d(0px, 0px, 0px);
        transition-property: -webkit-transform;
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .rsABlock.txtCent.s2{
        margin-top: 137px;
        display: block;
        transform: translate3d(0px, 0px, 0px);
        transition-property: -webkit-transform;
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    .rsABlock.txtCent.s3{
        margin-top: 51px;
        display: block;
        transform: translate3d(0px, 0px, 0px);
        transition-property: -webkit-transform;
        transition-duration: 1000ms;
        transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    .rsABlock.txtCent.s4{
        margin-top: 51px;
        display: block;
        transform: translate3d(0px, 0px, 0px);
        opacity: 1;
        transition-property: -webkit-transform, opacity;
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    .royalSlider > * {
        float: left;
    }
    .rsArrow, .rsNav, .rsThumbsArrow {
        opacity: 1;
        -webkit-transition: opacity 0.3s linear;
        -moz-transition: opacity 0.3s linear;
        -o-transition: opacity 0.3s linear;
        transition: opacity 0.3s linear;
    }
    .rsNavItem {
        -webkit-tap-highlight-color: rgba(0,0,0,0.25);
    }
</style>