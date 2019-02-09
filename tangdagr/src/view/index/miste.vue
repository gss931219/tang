<template>
	<div class="miste" v-scroll="bol3">
		<miste-search></miste-search>
		<v-lunbo></v-lunbo>
		<shop-goods></shop-goods>
		<jxy-list></jxy-list>
		<jy-list></jy-list>
		<dy-list></dy-list>
		<zy-list></zy-list>
		<fc-list></fc-list>
		<zz-list></zz-list>
		<cn-list></cn-list>
		<div class="wrap">
			<div v-show="bol"> <span class="el-icon-loading"></span>正在加载</div>
            <div v-show="bol2">我也是有底线的</div>
		</div>
	</div>
</template>

<script>
	import misteSearch from "@/components/index/miste/misteSearch.vue"
	import vLunbo from "@/components/index/miste/lunbo.vue"
	import shopGoods from "@/components/index/miste/goods.vue"
	import jxyList from "@/components/index/miste/jxy.vue"
	import jyList from "@/components/index/miste/jy.vue"
	import dyList from "@/components/index/miste/dy.vue"
	import zyList from "@/components/index/miste/zy.vue"
	import fcList from "@/components/index/miste/fc.vue"
	import zzList from "@/components/index/miste/zz.vue"
	import cnList from "@/components/index/miste/cn.vue"
	
	export default{
		data(){
			return {
				bol:false,
				bol2:false,
				bol3:false
			}
		},
		components:{
			misteSearch,
			vLunbo,
			shopGoods,
			jxyList,
			jyList,
			dyList,
			zyList,
			fcList,
			zzList,
			cnList,
		},
		directives:{
			scroll:{
				update(el,opt,node){
					console.log(el,opt,node);
					window.onscroll = function(){
						//判断触底
						 if(document.documentElement.scrollHeight == document.documentElement.scrollTop+document.documentElement.clientHeight){
                                console.log("触底了")
                                
                            }    
					}
				}
			}
		},
        //离开当前路由前触发
        beforeRouteLeave (to, from, next) {
            // ...
            console.log("离开了");
            window.onscroll = null;
            next()
        }
		
	}
	
</script>

<style>
	.miste{
		width: 100%;
	}
</style>