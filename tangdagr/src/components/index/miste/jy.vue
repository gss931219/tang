<!--俊雅系列-->
<template>
	<div class="jy-wrapper">
		<div class="jy-head">
			<span class="xian"></span>
			<h3>俊雅系列</h3>
			<span class="xian"></span>
	    </div>
	    <div class="jy-product">
	    	<ul class="product">
				<li class="product-item" v-for="(item,index) in jyLists"
					 :key="index" @click="sendMsg(item)">
					<router-link to="/jydetails">
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
				jyLists:[
					{
					   id:"1",
					   title:'【俊雅系列】--和田白玉-佛',
					   src:['static/icon/jy_1_01.jpg'],
					   Price:4380,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"2",
					   title:'【俊雅系列】--和田白玉-关公',
					   src:['static/icon/jy_1_02.jpg'],
					   Price:4380,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"3",
					   title:'【俊雅系列】--和田碧玉-戒指',
					   src:['static/icon/jy_1_03.jpg'],
					   Price:1680,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"4",
					   title:'【俊雅系列】--和田白玉-项链（四叶草）',
					   src:['static/icon/jy_1_04.jpg'],
					   Price:1980,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"5",
					   title:'【俊雅系列】--和田玉-多宝手串',
					   src:['static/icon/jy_2_05.jpg'],
					   Price:1680,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"6",
					   title:'【俊雅系列】和田白玉--貔貅',
					   src:['static/icon/jy_2_06.jpg'],
					   Price:3330,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"7",
					   title:'【俊雅系列】--和田碧玉-皇冠戒指',
					   src:['static/icon/jy_2_07.jpg'],
					   Price:480,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"8",
					   title:'【俊雅系列】--和田青玉--手镯',
					   src:['static/icon/jy_2_08.jpg'],
					   Price:980,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"9",
					   title:'【俊雅系列】--和田白玉-圆珠项链',
					   src:['static/icon/jy_3_09.jpg'],
					   Price:180,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"10",
					   title:'【俊雅系列】--和田白玉-圆珠项链',
					   src:['static/icon/jy_3_10.jpg'],
					   Price:3180,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"11",
					   title:'【俊雅系列】和田白玉--手镯',
					   src:['static/icon/jy_3_11.jpg'],
					   Price:4680,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
					{
					   id:"12",
					   title:'【俊雅系列】和田白玉-手串',
					   src:['static/icon/jy_3_12.jpg'],
					   Price:4680,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					},
				]
			}
		},
		methods:{
			sendMsg(item) {
				console.log(item)
				localStorage.setItem('item',JSON.stringify(item))
			}
		}
	}


</script>

<style>
	.jy-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.jy-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.jy-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.jy-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>