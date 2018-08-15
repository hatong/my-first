<template>
    <header>

        <div id="header">
            <div class="logo"><img src="images/logo_1.png"></div>
            <div class="nav">
                <ul style="padding-left:0">
                    <li :class="{active:currentPage.homePageActivate}"><router-link to="/">热销产品</router-link></li>
                    <li :class="{active:currentPage.introActivate}"><router-link to="intro">公司简介</router-link></li>
                    <li :class="{active:currentPage.proActivate}"><router-link to="product">商品展示</router-link></li>
                    <li :class="{active:currentPage.cooperationActivate}"><router-link to="cooperation">合作平台</router-link></li>
                    <li :class="{active:currentPage.contactUsActivate}"><router-link to="contact-us">合作联系</router-link></li>
                </ul>
            </div>
            <div :class="{hidden:prodEnv}">
                <!--
                <input :value="message" @input="message = $event.target.value"  >
                注意：v-model 其实是上面这行的简写
                -->
                <input v-model="message"  >
                <p>{{message}}</p>
                <button @click="modValue">modify</button>
                <input  v-model="author" />

            </div>

        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data: () => ({
            platDropDown:false,
            showDownMenu:false,
            message:'ww',
            prodEnv:true,
//            author:''
        }),
        mounted: function () {
            this.$nextTick(function () { });
            /*在mounted生命周期执行向父组件传递参数*/
            if(!this.prodEnv){
                this.$emit('getDataFromChild','from header component','data2');
            }
//            this.bbb=this.author;
//            this.$store.commit('updateAuthorData','handsome boy');

//            alert(this.$store.state.author);
        },
        props:{
            currentPage:Object
        },
        methods: {
            modValue:function () {
                this.message='ewew';
            },
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
            /*这里的mapState是相当于把store中的数据简写到变量中，当然这个变量不需要再vue.data中定义（否则会报重复的错误），直接可以在组件中使用*/
            isShow: state => state.isShow,
            author: state => state.author
        }),
    }
</script>

<style>
    /*@media (min-width:991px){*/
        #header {
            background: #fff;
            height: 90px;
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
            margin-top: -7px;
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
            line-height: 90px;
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
