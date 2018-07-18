<template>
    <div class="product-container">
        <div class="pro-banner"></div>
        <div class="container">
            <div class="row">
                <ul>
                    <h1 class="detail-title">{{lazyImages.vegeDesc}}</h1>
                    <li class="col-md-4 col-sm-4 col-xs-4 prod-item" v-for="lazyImage in lazyImages.VegeImages" >
                        <div class="img-container">
                            <img v-lazy="lazyImage.imageUrl"/>
                            <p class="desc">{{lazyImages.vegeDesc}}</p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <h1 class="detail-title">{{lazyImages.meatDesc}}</h1>
                    <li class="col-md-4 col-sm-4 col-xs-4 prod-item" v-for="lazyImage in lazyImages.meatImages" >
                        <div class="img-container">
                            <img v-lazy="lazyImage.imageUrl"/>
                            <p class="desc">{{lazyImages.meatDesc}}</p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <h1 class="detail-title">{{lazyImages.seafoodDesc}}</h1>
                    <li class="col-md-4 col-sm-4 col-xs-4 prod-item" v-for="lazyImage in lazyImages.seafoodImages" >
                        <div class="img-container">
                            <img v-lazy="lazyImage.imageUrl"/>
                            <p class="desc">{{lazyImages.seafoodDesc}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>
<script>

    export default{
        data:() => ({
            imgs:'../images/pro-banner.jpg',
            lazyImages:{
                VegeImages:[
                    {imageUrl:require('../images/v_1.jpg')},
                    {imageUrl:require('../images/v_2.jpg')},
                    {imageUrl:require('../images/v_3.jpg')},
                    {imageUrl:require('../images/v_4.jpg')},
                    {imageUrl:require('../images/v_5.jpg')},
                    {imageUrl:require('../images/v_6.jpg')},
                ],
                meatImages:[
                    {imageUrl:require('../images/m_1.jpg')},
                    {imageUrl:require('../images/m_2.jpg')},
                    {imageUrl:require('../images/m_3.jpg')},
                    {imageUrl:require('../images/m_4.jpg')},
                    {imageUrl:require('../images/m_5.jpg')},
                    {imageUrl:require('../images/m_6.jpg')},
                ],
                seafoodImages:[
                    {imageUrl:require('../images/s_1.jpg')},
                    {imageUrl:require('../images/s_2.jpg')},
                    {imageUrl:require('../images/s_3.jpg')},
                    {imageUrl:require('../images/s_4.jpg')},
                    {imageUrl:require('../images/s_5.jpg')},
                    {imageUrl:require('../images/s_6.jpg')},
                ],
                vegeDesc:'养生蔬果',
                meatDesc:'美味肉食',
                seafoodDesc:'水产海鲜',
            }
        }),

    };
</script>
<style>
    .container {
        width: 1170px !important;
    }
    .product-container{
        padding-top: 89px;
    }
    .product-container .pro-banner{
        height: 300px;
        background: url(../images/pro-banner.jpg) no-repeat center;
        background-size: cover;
        margin-bottom: 20px;
    }
    .product-container ul{
        list-style: none;
        -webkit-padding-start:0;
        padding-bottom: 20px;
    }
    .product-container ul:after{
        content:'';
        display:table;
        clear: both;
    }
    .product-container ul .detail-title{
        margin: 10px;
    }
    .product-container ul li.prod-item{
        padding: 0 6px;
        margin: 8px 0px;
    }
    .product-container ul li .img-container{
        width:100%;
        height:300px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .product-container ul li img{
        height: 100%;
        display: block;
    }
    .product-container .img-container .desc{
        opacity: 0;
        position: absolute;
        width: 100%;
        color: #fff;
        line-height: 36px;
        background-color: #222;
        bottom: -10px;
        left: 0px;
        padding: 0 20px;
    }
    .product-container ul li:hover .img-container .desc{
        opacity: 0.8;
        transition:opacity 1s ease-in-out;
    }
    .product-container ul li:hover img{
        transform: scale(1.05) ;
        transition: all 1s ease-in-out;
    }

</style>