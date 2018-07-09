<template>
    <div class="contact-body">
        <div id="slider-with-blocks-1" class="royalSlider rsMinW  rsHor rsFade rsWithBullets">
            <div class="rsOverflow" >
                <div class="rsContainer">
                    <div class="rsSlide container">
                        <div class="bContainer row" >
                            <div class="col-md-6 txtCent-title-container">
                                <span class="rsABlock txtCent s1" >
                                    <p> 联系我们 </p> <img src="images/line.png">
                                </span>
                            </div>
                            <div class="col-md-6">
                                <span class="rsABlock txtCent s2 " >
                                    <img src="images/icon1.png"> 电话：15339699974
                                </span>
                                <span class="rsABlock txtCent s3" >
                                    <img src="images/icon2.png"> 邮箱： xiaorui8210@163.com
                                </span>
                                <span class="rsABlock txtCent s4" >
                                    <img src="images/icon3.png"> 地址：安徽省合肥市瑶海区大兴镇周谷堆批发市场
                                </span>
                            </div>

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
    .txtCent-title-container{
        margin-top: 170px;
    }
    .contact-body{
        padding-top: 91px;
        width: 100%;
        height: 535px;
        /*background: url(../images/bg5.png) center 91px no-repeat;*/
        background: url(../images/bg5.jpg) center 91px no-repeat;
        /*background-color: #000;*/
    }
    .rsOverflow {
        width: 100%;
        position: relative;
        overflow: hidden;
        float: left;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .rsContainer {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin-top: 15px;
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
    .rsABlock.txtCent{
        text-align: left;
        opacity: 0;
        animation:mymove 1s;
        -webkit-animation:mymove 1s; /*Safari and Chrome*/
        animation-fill-mode:forwards;
    }
    .rsABlock.txtCent.s1{
        text-align: center;
        font-size: 30px;
        display: block;
        -webkit-animation:mymoveup 1s; /*Safari and Chrome*/
        animation-fill-mode:forwards;
    }

    .rsABlock.txtCent.s2{
        margin-top: 120px;
        display: block;
        animation-delay:0.5s;
        -webkit-animation-delay:0.5s; /*Safari and Chrome*/
    }
    .rsABlock.txtCent.s3{
        margin-top: 51px;
        display: block;
        animation-delay:0.8s;
        -webkit-animation-delay:0.8s; /*Safari and Chrome*/
    }
    .rsABlock.txtCent.s4{
        margin-top: 51px;
        display: block;
        animation-delay:1s;
        -webkit-animation-delay:1s; /*Safari and Chrome*/
        animation-direction:alternate;
        -webkit-animation-direction:alternate;
    }

    .royalSlider > * {
        float: left;
    }

</style>
<style>
    @keyframes mymove
    {
        from {
            opacity: 0;
            margin-left: -50%;
        }
        to {
            opacity: 1;
            margin-left: 0%;
        }
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/
    {
        from {
            opacity: 0;
            margin-left: -50%;
        }
        to {
            opacity: 1;
            margin-left: 0%;
        }
    }
    @keyframes mymoveup
    {
        from {
            opacity: 0;
            margin-top: -50%;
        }
        to {
            opacity: 1;
            margin-top: 0%;
        }
    }

    @-webkit-keyframes mymoveup /*Safari and Chrome*/
    {
        from {
            opacity: 0;
            margin-top: -50%;
        }
        to {
            opacity: 1;
            margin-top: 0%;
        }
    }
</style>