<!--尊雅系列-->
<template>
	<div class="zy-wrapper">
		<div class="zy-head">
			<span class="xian"></span>
			<h3>尊雅系列</h3>
			<span class="xian"></span>
	    </div>
	    <div class="jy-product">
	    	<ul class="product">
					<li class="product-item" v-for="(item,index) in zyLists"
						 :key="index" @click="sendMsg(item)">
						<router-link to="/zydetails">
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
				zyLists:[
				{
				   id:"1",
				   title:'【尊雅系列】和田玉糖白玉--玉琮把件',
				   src:['static/icon/zy_1_01.jpg'],
				   Price:24180,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"玉棕为我国古代重要利器，是权势和财富的象征，雕刻吉祥，更添吉祥之意，不屈君子之风编码：Twxg000702",
				   
				},
				{
				   id:"2",
				   title:'【尊雅系列】和田玉碧玉--手镯',
				   src:['static/icon/zy_1_02.jpg'],
				   Price:55000,
				   oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"3",
				   title:'【尊雅系列】和田玉翠青--雕花手镯',
				   src:['static/icon/zy_1_03.jpg'],
				   Price:38800,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"4",
				   title:'【尊雅系列】和田玉白玉--无结构白玉对牌',
				   src:['static/icon/zy_1_04.jpg'],
				   Price:58000,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"5",
				   title:'【尊雅系列】和田玉籽料--观音',
				   src:['static/icon/zy_2_05.jpg'],
				   Price:288000,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"6",
				   title:'【尊雅系列】和田玉白玉--女款圆条手镯',
				   src:['static/icon/zy_2_06.jpg'],
				   Price:23800,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"7",
				   title:'【尊雅系列】和田玉白玉--花开富贵摆件',
				   src:['static/icon/zy_2_07.jpg'],
				   Price:300000,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"8",
				   title:'【尊雅系列】和田玉籽料--天然原石',
				   src:['static/icon/zy_2_08.jpg'],
				   Price:500000,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"9",
				   title:'【尊雅系列】和田玉碧玉--凤戏牡丹',
				   src:['static/icon/zy_3_09.jpg'],
				   Price:30000,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"10",
				   title:'【尊雅系列】和田玉籽料--手串',
				   src:['static/icon/zy_3_10.jpg'],
				   Price:36000,
				   oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"11",
				   title:'【尊雅系列】和田白玉-翠青--翠青手镯',
				   src:['static/icon/zy_3_11.jpg'],
				   Price:53930,
				    oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
				},
				{
				   id:"12",
				   title:'和田玉白玉--素镯',
				   src:['static/icon/zy_3_12.jpg'],
				   Price:50180,
				   oldPrice:0,
				   name:"唐大官人",
				   num:2,
				   des:"和田玉碧玉手镯，人生若如初见，几经人间烟火待到季幕回首时，但愿，时光未老，而你还在那该多好~请将这份好缠绕身旁~编码：Twxg00074",
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
	.zy-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.zy-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.zy-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.zy-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>