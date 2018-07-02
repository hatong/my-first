<template>
    <section class="contact-section">
        <public-header :currentPage="currentPage"></public-header>
        <contact-body></contact-body>
        <BMap-container></BMap-container>
        <public-footer></public-footer>
    </section>
</template>
<script>
    import publicHeader from '../components/header.vue';
    import contactBody from '../components/contactUs.vue';
    import BMap from '../components/BMap.vue';
    import publicFooter from '../components/footer.vue';
    import { mapState,mapActions } from 'vuex';

    export default{
        data(){
          return {
              currentPage:{
                  contactUsActivate:true,
              },
//              testData:true,
          };
        },
        mounted:function () {
            this.testVuxFunction();
        },
        components: {
            'public-header': publicHeader,
            'contact-body' :contactBody,
            'BMap-container' :BMap,
            'public-footer' :publicFooter,
        },
        methods: {
            testVuxFunction:function () {
                /*修改store属性，仅供测试**/
                this.$store.commit('updateTestData', 'hatongs vue');
            },

        },
        computed:mapState({
            // 箭头函数可使代码更简练
//            testData: state => state.testData,
            testData:function (state) {
                return state.testData;
            },
        })

    };
</script>
<style></style>