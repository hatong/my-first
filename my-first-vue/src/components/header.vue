<template>
    <header>
        <div id="header">
            <div class="logo"><a><img src="images/logo.png"></a></div>
            <div class="nav">
                <ul style="padding-left:0">
                    <li class="active"><router-link to="#">热销产品</router-link></li>
                    <!--<li class="active"><router-link to="/detail">热销产品</router-link></li>
                    <li><a>我的商城</a></li>
                    <li class="platform" :class="{letrit:platDropDown}" @mouseover="platOver" @mouseout="platOut"><a>平台合作</a><i></i>
                        <div class="classify" v-show="showDownMenu"><span><a >城市合伙人</a></span><span><a >供应商合作</a></span><span><a>司机报名</a></span></div>
                    </li>-->
                    <li><a>公司简介</a></li>
                    <li><a>商品展示</a></li>
                    <li ><a target="_blank">合作平台</a></li>
                    <li><a>合作联系</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data: () => ({
            // isShow: false
            platDropDown:false,
            showDownMenu:false,
        }),
        mounted: function () {
            this.$nextTick(function () { });
        },
        methods: {
            hideAlert: function () {
                this.$store.commit('isShowAlert', false);
            },
            platOver:function () {
                /*show the drop menu in header when the mouse over the menu*/
                this.platDropDown= true;
                this.showDownMenu= true;
            },
            platOut: function(){
                /*hidden the drop menu in header when the mouse over the menu*/
                this.platDropDown= false;
                this.showDownMenu= false;
            },
        },
        computed: mapState({
            isShow: state => state.isShow,
        }),
    }
</script>

<style>
    /*@media (min-width:991px){*/
        #header {
            background: #fff;
            height: 60px;
            position: fixed;
            width: 100%;
            min-width: 1200px;
            z-index: 99999;
            border-bottom: 1px solid #d8d8d8;
        }
        #header .logo {
            float: left;
            margin: 12px 0 0 3%;
        }
        #header .logo img {
            width: 80px;
        }
        .nav {
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }
        #header .nav {
            float: left;
            margin-left: 20px;
        }
        #header .nav ul li {
            display: inline-block;
            padding: 0 20px;
            font-size: 16px;
            line-height: 60px;
        }
        #header .nav ul .active > a {
            color: #62B134;
        }
        #header .nav ul li.platform {
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            position: relative;
            padding: 0;
            line-height: 0;
        }
        #header .nav a {
            color: #4A4A4A;
            text-decoration: none;
        }
        #header .nav ul li i {
            background: url(../images/arrow-icon.png) no-repeat;
            background-size: 9px 6px;
            width: 9px;
            height: 6px;
            position: absolute;
            top: 27px;
            right: 18px;
            transition: transform .3s;
            -webkit-transition: transform .3s;
            -moz-transition: transform .3s;
        }
        #header .nav ul li.platform:hover i {
            transform: rotateZ(180deg);
            -webkit-transform: rotateZ(180deg);
            -moz-transform: rotateZ(180deg);
        }
        #header .nav a:hover{
            color: #62B134;
            text-decoration: none;
        }
        #header .nav ul li.letrit{
            border-left: 1px solid #d8d8d8;
            border-right: 1px solid #d8d8d8;
        }
        #header .nav ul li .classify {
            position: absolute;
            top: 59px;
            left: -1px;
            border: 1px solid #D8D8D8;
            border-top: 0;
            width: 119px;
            background: #fff;
        }
        #header .nav ul li.platform a {
            padding: 0 33px 0 20px;
            line-height: 60px;
            display: block;
        }
        #header .nav ul li.platform .classify span {
            display: block;
            line-height: 42px;
            text-align: center;
        }
        #header .nav ul li.platform .classify span a {
            padding: 0;
            line-height: 42px;
        }
    /*}*/

</style>
