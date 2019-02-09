<!--首页中的和田玉专区，商品部分   咨询部分-->
<template>
	<div class="goods">
		<div class="content">
			<div>
				<ul class="types">
					<li class="type-item" v-for="(item,index) in types" :key="index">
						<img :src="item.src" alt="">
				            <p class="text">
				              {{item.name}}
				            </p>
					</li>
				</ul>
				<span class="news">
					{{tabs}}
				</span>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				types:[
				{name:'和田玉专区',src:'static/icon/1.jpg'},
				{name:'翡翠专区',src:'static/icon/2.jpg'},
				{name:'珍珠专区',src:'static/icon/3.jpg'},
				{name:'魅力套装',src:'static/icon/4.jpg'},
				{name:'热销金榜',src:'static/icon/5.jpg'},
				{name:'私人订制',src:'static/icon/6.jpg'},
				{name:'珠宝鉴定',src:'static/icon/7.jpg'},
				{name:'VIP奖品领取',src:'static/icon/8.jpg'},
				],
				tabs:["唐大官人--致力于打造值得国人信赖的珠宝"]
			}
		},
	}
</script>

<style>
	.goods{
		overflow: hidden;
		width:100%;
		display: flex;
	}
	.content{
		flex: 1;
	}
	.types{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-around;
		padding: 4px 2px;
	}
	.type-item{
		width: 23%;
		text-align: center;
		padding: 18px 0px;
		cursor: pointer;
	}
	.type-item img{
		width: 63%;
	}
	p{
	   color: #787878;   
	}
	.news{
		display: inline-block;
		text-align: center;
		color: #323232;
		margin-left: 69px;
	}
</style>