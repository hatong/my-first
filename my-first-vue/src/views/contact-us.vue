<template>
    <section class="contact-section">
        <public-header :currentPage="currentPage"></public-header>
        <contact-body></contact-body>
    </section>
</template>
<script>
    import publicHeader from '../components/header.vue';
    import contactBody from '../components/contactUs.vue';
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