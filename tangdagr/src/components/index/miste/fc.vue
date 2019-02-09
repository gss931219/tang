<!--翡翠专区-->
<template>
	<div class="fc-wrapper">
		<div class="fc-head">
			<span class="xian"></span>
			<h3>翡翠专区</h3>
			<span class="xian"></span>
	    </div>
	    <div class="fc-product">
	    	<ul class="product">
					<li class="product-item" v-for="(item,index) in fcLists"
						 :key="index" @click="sendMsg(item)">
						 <router-link to="/fcdetails">
						 	<img :src="item.src" alt="">
				            <p class="product-title">{{item.title}}</p>
				            <p class="product-price">￥{{item.Price}}.00</p>
						 </router-link>
					</li>
			</ul>
	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				fcLists:[
				{
				   id:"1",
				   title:'天然翡翠A货-男士多彩手串',
				   src:['static/icon/fc_1_01.jpg'],
				   Price:480,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"2",
				   title:'天然翡翠（A货）-福袋吊坠',
				   src:['static/icon/fc_1_02.jpg'],
				   Price:330,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"3",
				   title:'天然翡翠（A货）-弥勒笑佛',
				   src:['static/icon/fc_1_03.jpg'],
				   Price:3180,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"4",
				   title:'天然翡翠（A货）-福瓜',
				   src:['static/icon/fc_1_04.jpg'],
				   Price:3180,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"5",
				   title:'天然翡翠（A货）-送子观音',
				   src:['static/icon/fc_1_05.jpg'],
				   Price:3180,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"6",
				   title:'天然翡翠（A货）-多子多福',
				   src:['static/icon/fc_1_06.jpg'],
				   Price:4680,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"7",
				   title:'天然翡翠（A货）-平安扣',
				   src:['static/icon/fc_1_07.jpg'],
				   Price:1680,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"8",
				   title:'天然翡翠（A货）-福禄',
				   src:['static/icon/fc_1_08.jpg'],
				   Price:330,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"9",
				   title:'天然翡翠（A货）-平安豆',
				   src:['static/icon/fc_1_09.jpg'],
				   Price:3180,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"10",
				   title:'天然翡翠（A货）-手串',
				   src:['static/icon/fc_1_10.jpg'],
				   Price:1680,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"11",
				   title:'天然翡翠（A货）-祥和观音',
				   src:['static/icon/fc_1_11.jpg'],
				   Price:2730,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				{
				   id:"12",
				   title:'天然翡翠（A货）-金枝玉叶',
				   src:['static/icon/fc_1_12.jpg'],
				   Price:2730,
				   oldPrice:0,
			       name:"唐大官人",
				   num:8,
				   des:"天然翡翠A货,冰凉贴肤，婉约飘然于玉手间，清雅精致，水润清透，色泽油亮，选用高档翡翠原石经过成百上千的剖光打磨，让每颗珠子如绸缎般细润光滑.规格：15颗*18mm 重约67g编码：Tellt000811",
				   tishi:"温馨提示：此作品为纯天然和田玉原料打造而成，每一件都有区别(天然宝石没有一模一样的，纹理，颜色，内部结构分布不相同)图片仅供参考，唐大官人保证同款式，同档次，同级别"
				},
				]
			}
		},
		methods: {
			sendMsg(item) {
				console.log(item)
				localStorage.setItem('item',JSON.stringify(item))
			}
		}
	}
</script>

<style>
	.fc-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.fc-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.fc-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.fc-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>