<template>
    <div class="introduce-body">
        <div class="intro-banner"></div>
        <div class="container">
            <div class="row intro-sec1">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6  col-md-offset-6 col-xs-offset-6 desc">
                    <h1>安徽昊轩农业配送有限公司</h1>
                    <p>始建于2015年6月，2018年注册为有限责任公司，企业得到了快速发展</p>
                    <br/>
                    <p>现注册资本500万元，是一家集蔬菜瓜果、肉禽鱼蛋、水产海鲜、冻品、副食品、调味品为一体的专业化配送企业，公司专业从事为企事业单位、政府机关食堂、酒店、工厂、学校、生鲜超市等进行新鲜蔬菜、水果、肉类、粮油等农副产品一站式配送服务。</p>
                    <ul>
                        <li class="col-xs-4 col-sm-4 col-md-4 "><div class="con-icon con-icon1"></div><span>注册资金500万</span></li>
                        <li class="col-xs-6 col-sm-6 col-md-6  col-md-offset-2"><div class="con-icon con-icon2"></div><span>多家公司待入驻</span></li>
                        <li class="col-xs-4 col-sm-4 col-md-4"><div class="con-icon con-icon3"></div><span>数条运输干道</span></li>
                        <li class="col-xs-6 col-sm-6 col-md-6 col-md-offset-2"><div class="con-icon con-icon4"></div><span>数百可调用车辆</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data:() => ({

        }),
        methods:{

        },
        mounted:function () {

        },

    };
</script>
<style>
    .introduce-body{
        border-top:1px solid transparent;
    }
    .intro-sec1{
        padding: 50px 0;
        background: url(../images/intro-1.jpg) no-repeat left center;
    }
    .intro-banner{
        width: 100%;
        height: 240px;
        background: url(../images/intro-banner.jpg) no-repeat center top;
        margin-top:89px;
    }
    .introduce-body .desc{
        min-height: 600px;
        font-size: 16px;
        padding-top: 55px;
    }

    .introduce-body .desc ul{
        list-style: none;
        text-align: center;
    }
    .introduce-body .desc ul li{
        margin-top: 20px;
    }
    .introduce-body .desc ul .con-icon{
        margin: 10px auto;
        width: 60px;
        height: 60px;
        background: url(../images/com-info.png);
    }
    .introduce-body .desc ul .con-icon.con-icon2{
        background-position: 0 -60px;
    }
    .introduce-body .desc ul .con-icon.con-icon3{
        background-position: 0 -120px;
    }
    .introduce-body .desc ul .con-icon.con-icon4{
        background-position: 0 -180px;
        width: 92px;
    }
</style>
