<template>
    <section>
        <main-header :currentPage = "currentPage" @getDataFromChild="bindInParent"></main-header>
        <product-detail></product-detail>
        <main-footer></main-footer>
    </section>
</template>
<script>
    import mainHeader from '../components/header.vue';
    import mainFooter from '../components/footer.vue';
    import productDetail from '../components/productDetail.vue';
    export default{
        data:() => ({
            currentPage:{
                proActivate:true,
            }
        }),
        components:{
            'main-header': mainHeader,
            'main-footer': mainFooter,
            'product-detail': productDetail,
        },
        methods:{
            /*这个function接受来自header component(子组件)传来的值*/
            bindInParent:function (...data) {
                console.log(data);
            }
        },

    };
</script>
<style></style>