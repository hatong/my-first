<template>
    <section class="BMapSection">
        <div class="baidumap" id="allmap" :style="mapStyle">
        </div>
    </section>
</template>
<script>
    import BMap from 'BMap';
//    import BMapSymbolSHAPEPOINT from 'BMapSymbolSHAPEPOINT';
    export default{
        data:function(){
            return{
                mapStyle:{
                    width:'100%',
                    height:this.mapHeight +'px'
                },
                BMAPLIB_TAB_TO_HERE:String,
            }
        },
        props:{
            // 地图在该视图上的高度
            mapHeight:{
                type:Number,
                default:370
            },
            // 经度
            longitude:{
                type:Number,
                default:117.389117
            },
            // 纬度
            latitude:{
                type:Number,
                default:31.842901
            },
            description:{
                type:String,
                default:'快速放心保鲜三位一体'
            }
        },
        mounted:function(){
            this.initBMap();
        },
        methods:{
            initBMap:function () {
                var map = new BMap.Map('allmap');
                var poi = new BMap.Point(this.longitude,this.latitude);
                map.centerAndZoom(poi, 16);
                map.enableScrollWheelZoom();
                var content = '<div class="bMap-title">'+'<strong>地址：</strong>安徽省合肥市瑶海区大兴镇周谷堆批发市场<br/><strong>咨询热线：</strong>15339699974<br/><strong>网址：</strong>www.hxpeisong.com</div>';
                //创建检索信息窗口对象
                var searchInfoWindow = null;
                searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                    title  : "昊轩配送",      //标题
                    width  : 290,             //宽度
                    height : 105,              //高度
                    panel  : "panel",         //检索结果面板
                    enableAutoPan : true,     //自动平移
                    searchTypes   :[
                        BMAPLIB_TAB_SEARCH,   //周边检索
                        BMAPLIB_TAB_TO_HERE,  //到这里去
                        BMAPLIB_TAB_FROM_HERE //从这里出发

                    ]
                });

                var marker = new BMap.Marker(poi); //创建marker对象
//                marker.setAnimation(BMAP_ANIMATION_BOUNCE);       //小红点跳动
                searchInfoWindow.open(marker);
                marker.addEventListener("click", function(e){
                    searchInfoWindow.open(marker);
                });
                map.addOverlay(marker); //在地图中添加marker,即小红点

                function openInfoWindow3() {
                    searchInfoWindow3.open(new BMap.Point(113.356586,23.130524));
                }
            }
        },
    };
</script>
<style>
.bMap-title{
    margin:0;line-height:20px;padding:2px;
}
#allmap td{
    padding-left: 2px !important;
}
</style>