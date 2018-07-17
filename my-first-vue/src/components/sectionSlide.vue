<template>
    <div class="contribute container">
        <div class="row">
            <div class="col-xs-4">
                <div class="outer-circle center-block">
                    <a href="http://www.meicai.cn/commonweal">
                        <div class="inner-circle">
                            <p class="center-block">我有<br>滞销菜</p>
                        </div>
                    </a>
                    <span></span>
                </div>
            </div>
            <div class="col-xs-4">
                <div class="outer-circle center-block">
                    <a>
                        <div class="inner-circle">
                            <p class="center-block">我要<br>捐款</p>
                        </div>
                    </a>
                    <span></span>
                </div>
            </div>
            <div class="col-xs-4">
                <h4 class="text-center" style="margin-top:55px;"><span><span class="left-red"></span>捐款人</span></h4>
                <div id="con" @mouseover="conMouseOVer" @mouseout="scrtimebegin">
                    <div class="uppermask"></div>
                    <ul>
                        <li><span class="pull-left">爱心人士</span><span>10元</span><span class="pull-right">7.5</span></li>
                        <li><span class="pull-left">爱心人士</span><span>1元</span><span class="pull-right">7.5</span></li>
                        <li><span class="pull-left">爱心人士</span><span>10元</span><span class="pull-right">7.4</span></li>
                        <li><span class="pull-left">爱心人士</span><span>1元</span><span class="pull-right">7.4</span></li>
                        <li><span class="pull-left">爱心人士</span><span>10元</span><span class="pull-right">7.4</span></li>
                        <li><span class="pull-left">夏夏</span><span>10元</span><span class="pull-right">7.4</span></li>
                        <li><span class="pull-left">爱心人士</span><span>10元</span><span class="pull-right">7.3</span></li>
                        <li><span class="pull-left">爱心人士</span><span>50元</span><span class="pull-right">7.2</span></li>
                        <li><span class="pull-left">金童</span><span>100元</span><span class="pull-right">7.2</span></li>
                        <li><span class="pull-left">yamakasiluke</span><span>66.6元</span><span class="pull-right">7.1</span></li>
                    </ul>
                    <div class="lowermask"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data: () => ({

        }),
        mounted:function () {
            this.scrtimebegin();        //在Mounted这个生命周期内，执行这个方法
            axios({
                //method:'post',  //请求本地文件必须要用get，否则报404错误
                method:'get',
                url:'../mock/api.json',
                data: {
                    firstName: 'hao',
                    lastName: 'tong'
                }
            }).then(function(response){
                console.log(response);
            }).catch(function (error) {
                alert('axios error');
                console.log(error)
            }).bind(this);       //如果直接在里面访问 this，无法访问到 Vue 实例，这时只要添加一个 .bind(this) 就能解决这个问题
        },

        methods:{
            conMouseOVer : function(){
                clearInterval(this.scrtime);//停止滚动
            },
            scrtimebegin : function(){
                this.scrtime = setInterval(function(){
                    var ul = $("#con ul");
                    var liHeight = ul.find("li:first").height();//计算最后一个li元素的高度
                    ul.animate({marginBottom : liHeight+10+"px"},1000,function(){
                        ul.find("li:first").appendTo(ul);
                        ul.find("li:last").hide();
                        ul.css({marginBottom:0});
                        ul.find("li:last").fadeIn(1000);
                    });
                },300);
            }
        },
    }
</script>
<style>
    .outer-circle {
        margin: 110px 0;
        text-align: center;
        height: 118px;
        border-radius: 100%;
        border: 2px solid #a2a2a2;
        width: 118px;
    }
    .inner-circle {
         display: table;
         margin: 2px;
         height: 110px;
         border-radius: 100%;
         border: 2px solid #a2a2a2;
         width: 110px;
     }
    .center-block {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
    .inner-circle p {
        font-size: 22px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
    .outer-circle span {
        width: 25%;
        border: 3px solid #ff4c41;
        display: inline-block;
        margin: 0 auto;
        margin-top: 30px;
    }
    .text-center {
        text-align: center;
    }
    .left-red {
        margin-right: 24px;
        display: inline-block;
        width: 5px;
        height: 18px;
        border-left: 5px solid #ff4c41;
        line-height: 100%;
        vertical-align: bottom;
    }
    #con {
        width: 100%;
        height: 200px;
        margin: 0px auto 10px auto;
        position: relative;
        background-color: #fff;
        overflow: hidden;
    }
    #con ul{ width:95%;position:absolute; margin:10px; bottom:0; left:0; padding:0;}
    #con ul li{ width:100%; overflow:hidden; list-style-type:none;margin-bottom: 10px;}
    #con ul li p{ margin-left:60px;line-height:22px; }
    #con .pull-left {
        width: 50%;
        text-align: left;
    }
    #con .pull-right {
        width: 30%;
        text-align: right;
    }
    .uppermask {
        background: -webkit-linear-gradient(white, rgba(255, 255, 255, 0.5)); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(white, rgba(255, 255, 255, 0.5)); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(white, rgba(255, 255, 255, 0.5)); /* Firefox 3.6 - 15 */
        background: linear-gradient(white, rgba(255, 255, 255, 0.5)); /* 标准的语法 */
        position: absolute;
        height: 25%;
        width: 100%;
        z-index: 4;
    }
    .lowermask {
        bottom: 0;
        background: -webkit-linear-gradient(rgba(255, 255, 255, 0.5) ,white); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(rgba(255, 255, 255, 0.5) ,white); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(rgba(255, 255, 255, 0.5) ,white); /* Firefox 3.6 - 15 */
        background: linear-gradient(rgba(255, 255, 255, 0.5) ,white); /* 标准的语法 */
        position: absolute;
        height: 25%;
        width: 100%;
        z-index: 1;
    }
</style>