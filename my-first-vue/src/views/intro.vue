<template>
    <section class="introduce">
        <main-header :currentPage="currentPage"></main-header>
        <introduce-content></introduce-content>
        <main-footer></main-footer>
    </section>
</template>
<script>
    import mainHeader from '../components/header.vue';
    import introduceContent from '../components/introContent.vue';
    import mainFooter from '../components/footer.vue';
    export default{
        data:() => ({
            currentPage:{
                introActivate:true,
            }
        }),
        components:{
            'main-header': mainHeader,
            'introduce-content': introduceContent,
            'main-footer': mainFooter,
        }

    };
</script>
<style>

</style>