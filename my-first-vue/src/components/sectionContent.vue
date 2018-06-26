<template>
    <div class=" grey_background" style="padding:30px 0 50px;">
        <div class="container" style="padding:30px 0 0;">
            <h3 style="margin-bottom: 30px;" class="dark">{{ secContent.title }}</h3>
            <div class="row">
                <div class="col-xs-4" v-for="listContent in secContent.listContent">
                    <img class="img-responsive" :src="listContent.imgUrl">
                    <h4 class="dark mT10">{{ listContent.subtitle }}</h4>
                    <p class="darkgrey">{{ listContent.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data: () => ({
            // isShow: false
        }),
        props: {
            secContent: Object  //定义传值的类型<br>
        },
        mounted: function () {
            this.$nextTick(function () { });
        },
        methods: {
            hideAlert: function () {
                this.$store.commit('isShowAlert', false);
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
    .carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .img-responsive {
        width: 100%;
    }
    .dark {
        color: #383838;
    }
    .mT10 {
        margin-top: 30px;
    }
    .darkgrey {
        color: #9B9B9B;
    }
</style>
