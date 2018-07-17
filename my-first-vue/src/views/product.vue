<template>
    <section>
        <main-header :currentPage = "currentPage"></main-header>
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

    };
</script>
<style></style>