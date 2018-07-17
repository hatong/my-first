<template>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-pause='true' data-interval="4000" >
    <!--<div id="carousel-example-generic" class="carousel slide"  data-pause='true' data-interval="4000" >-->
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0"  class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <!--<li data-target="#carousel-example-generic" data-slide-to="3"></li>-->
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox" style="">
            <!-- <div class="item">
                <img src="images/banner.jpg" alt="最美菜公益-1">
            </div>-->

            <div class="item active" >
                <img src="images/banner1.jpg" alt="蔬菜">
            </div>
            <div class="item">
                <img src="images/banner2.png" alt="肉类">
            </div>
            <div class="item">
                <img src="images/banner3.png" alt="水产">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .carousel-inner .item {
        height:520px;
        overflow: hidden;
    }

    #carousel-example-generic .carousel-inner>.item>img {
        margin: 0 auto;
        height: 100%;
    }
    .carousel {
        position: relative;
    }
    .carousel-indicators {
        position: absolute;
        bottom: 10px;
        left: 50%;
        z-index: 15;
        width: 60%;
        padding-left: 0;
        margin-left: -30%;
        text-align: center;
        list-style: none;
    }
    .carousel-indicators li {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 1px;
        text-indent: -999px;
        cursor: pointer;
        background-color: #000 \9;
        background-color: rgba(0,0,0,0);
        border: 1px solid #fff;
        border-radius: 10px;
    }
    .carousel-indicators li {
        background-color: rgba(234, 234, 234, 0.55);
        border: none;
        margin-right: 10px;
        border-radius: 0 !important;
        height: 4px;
        width: 50px;
    }
    .carousel-indicators .active {
        width: 12px;
        margin: 0;
        background-color: #fff;
    }
    .carousel-indicators .active {
        margin-right: 10px;
        height: 4px;
        width: 50px;
    }
    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .carousel-inner>.item {
        position: relative;
        display: none;
        -webkit-transition: .6s ease-in-out left;
        -o-transition: .6s ease-in-out left;
        transition: .6s ease-in-out left;
    }
    .carousel-inner>.item.active, .carousel-inner>.item.next.left, .carousel-inner>.item.prev.right {
        left: 0;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    #carousel-example-generic .carousel-inner>.item>a>img, #carousel-example-generic .carousel-inner>.item>img, #carousel-example-generic .img-responsive, .thumbnail a>img, #carousel-example-generic .thumbnail>img {
        margin-top: 40px;
    }
    .carousel-inner>.item>a>img, .carousel-inner>.item>img {
        line-height: 1;
    }
    .carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    .carousel-inner>.active, .carousel-inner>.next, .carousel-inner>.prev {
        display: block;
    }
    .carousel-inner>.item.active, .carousel-inner>.item.next.left, .carousel-inner>.item.prev.right{
        left: 0;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{
        left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)
    }
    .carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{
        display:block
    }
    .carousel-inner>.active{
        left:0
    }
    .carousel-inner>.next,.carousel-inner>.prev{
       position:absolute;
       top:0;
       width:100%
    }
    .carousel-inner>.next{left:100%}
    .carousel-inner>.prev{left:-100%}

    .carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}
    .carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}
    @media not all, (-webkit-transform-3d){
        .carousel-inner>.item {
            -webkit-transition: -webkit-transform .6s ease-in-out;
            -o-transition: -o-transform .6s ease-in-out;
            transition: transform .6s ease-in-out;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
    }

    @media (min-width:991px){

    }
    @media (min-width: 768px){
        .carousel-indicators {
            bottom: 20px;
        }
    }


</style>
