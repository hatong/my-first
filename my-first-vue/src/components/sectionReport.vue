<template>
    <div :class="{ grey_background:reportData.bgColor} " style="padding:30px 0 50px;">
        <div class="swiper-scrollbar"></div>
        <div class="container" style="padding:30px 0 0;">
            <h3 style="margin-bottom: 30px;" class="dark">{{ reportData.title }}</h3>
            <div class="swiper-container swiper-container-horizontal">
                <div class="swiper-button-prev swiper-button-disabled"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-wrapper" >

                    <div class="swiper-slide swiper-slide-active" v-for="list in reportData.listContent" style="width: 354.667px; margin-right: 18px;">
                        <a target="_blank">
                            <img class="img-responsive" :src="list.imgUrl">
                            <h5 class="dark mT27 ">{{ list.subtitle }}</h5>
                            <p>{{ list.desc }}</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import Swiper from 'swiper/dist/js/swiper.min.js';

    export default {
        data: () => ({
            swiper:Object,
        }),
        props: {
            reportData: Object  //定义传值的类型<br>
        },
        mounted: function () {
            this.$nextTick(function () { });
            this.initSwiper();
        },
        methods: {
            hideAlert: function () {
                this.$store.commit('isShowAlert', false);
            },
            initSwiper:function(){
                this.swiper = new Swiper({
                    el: '.swiper-container',
                    slidesPerView: 3,
                    spaceBetween: 18,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',

                    },
                });
            },
        },
        computed: mapState({
            isShow: state => state.isShow,
        }),


    }
</script>
<style>
    .grey_background {
        background-color: #f6f6f6;
    }
    .swiper-scrollbar {
        border-radius: 10px;
        position: relative;
        -ms-touch-action: none;
        background: rgba(0,0,0,.1);
    }
    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform,-webkit-transform;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }
    .swiper-button-next, .swiper-button-prev {
        position: absolute;
        top: 50%;
        width: 27px;
        height: 44px;
        margin-top: -22px;
        z-index: 10;
        cursor: pointer;
        background-size: 27px 44px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%…19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E);
        left: 10px;
        right: auto;
    }


    .swiper-button-next, .swiper-button-prev {
        top: 30% !important;
        width: 40px;
        height: 81px;
    }


    .swiper-button-prev {
        background: url(../images/swiper-left.png) no-repeat !important;
        left: 0;
        background-size: cover !important;
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
        opacity: .35;
        cursor: auto;
        pointer-events: none;
    }
    .swiper-button-next {
        background: url(../images/swiper-right.png) no-repeat !important;
        right: 0;
        background-size: cover !important;
    }
    .swiper-container-android .swiper-slide, .swiper-wrapper {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform,-webkit-transform;
    }
    .dark {
        color: #383838;
    }
    .swiper-slide p {
        color: #9B9B9B;
    }
</style>