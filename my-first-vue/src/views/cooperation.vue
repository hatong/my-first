<template>
    <section>
        <public-header :currentPage="currentPage"></public-header>
        <div class="coop-body"><!--<img src="../images/coop.jpg">--></div>
        <public-footer></public-footer>
    </section>
</template>
<script>
    import publicHeader from '../components/header.vue';
    import publicFooter from '../components/footer.vue';
    export default{
        components:{
            'public-header': publicHeader,
            'public-footer' :publicFooter,
        },
        data(){
            return {
                currentPage: {
                    cooperationActivate: true
                }
            };
        },
        mounted:function () {

        },
        methods:{

        },

    }
</script>
<style>
    .coop-body{
        padding: 200px;
        text-align: center;
        min-height: 800px;
        background: url("../images/coop.jpg") no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>