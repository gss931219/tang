<template>
	<div class="">
		<v-all></v-all>
		<div class="fl">
		   <span class="fl-s1" @click="changeComp('vFenlei')">分类</span>
		   <span class="fl-s2" @click="changeComp('vPaixu')">排序</span>
		   <span class="fl-s3" @click="changeComp('vShaixuan')">筛选</span>
		</div>
		<!--<div class="fenlei" ref="typeSwiper">
			<ul ref="menu">
				<li>魅力套装</li>
				<li>热销金榜</li>
				<li>和田玉专区</li>
				<li>翡翠专区</li>
				<li>珍珠专区</li>
				<li>VIP奖品专区</li>
				<li>魅力套装</li>
		    </ul>
		</div>-->
		<!--<div>
			<p>默认</p>
			<p>销量</p>
			<p>价格</p>
		</div>-->
		<shang-pin></shang-pin>
	</div>
</template>

<script>
	import vAll from "@/components/all/allHead.vue"
	import shangPin from "@/components/all/shangpin.vue"
	
	export default {
		data(){
			return{
			list:[]	
			}
		},
		methods:{
			changeComp(name){
				this.comp=name;
			}
		},
//		mounted(){
//			this.$nextTick(()=>{
//				console.log(this,$refs.typeSwiper);
//				
//			})
//		},
		components:{
			vAll,
			shangPin
		}
	}
</script>

<style>
	.fl{
		box-sizing: border-box;
		position: fixed;
		top:0px;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 41px;
		background: white;
		border-bottom:solid 2px #EFEFF4;
	}
	.fl-s1,.fl-s2,.fl-s3{
		display:inline-block;
		padding: 3px;
		width: 30%;
		color:black;
		text-align: center;
		border-right:solid 1px #EFEFF4;
	}
	.fenlei{
		width: 100%;
		height:500px;
		
	}
</style>