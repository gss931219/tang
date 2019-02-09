<!--典雅系列-->
<template>
	<div class="dy-wrapper">
		<div class="dy-head">
			<span class="xian"></span>
			<h3>典雅系列</h3>
			<span class="xian"></span>
	    </div>
	    <div class="dy-product">
	    	<ul class="product">
					<li class="product-item" v-for="(item,index) in dyLists" 
						:key="index" @click="sendMsg(item)">
						<router-link to="/dydetails">
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
				dyLists:[
					{
						id:"1",
						title:'【典雅系列】--和田白玉-大慈大悲',
						src:['static/icon/dy1_1.jpg'],
						Price:5430,
						oldPrice:0,
					    name:"唐大官人",
					    num:22,
					    des:"和田白玉观音,器型圆润，玉质百润，结构紧密，观音菩萨大慈大悲，保一生平安.规格：50*40*8 35编码：Tellt000811",
					},
					{
						id:"2",
						title:'【典雅系列】--和田白玉-东来佛祖',
						src:['static/icon/dy1_2.jpg'],
						Price:9680,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"3",
						title:'【典雅系列】--和田白玉-佛祖',
						src:['static/icon/dy1_3.jpg'],
						Price:5430,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"4",
						title:'【典雅系列】--和田白玉-观音牌',
						src:['static/icon/dy1_4.jpg'],
						Price:15180,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"5",
						title:'【典雅系列】--和田白玉-关公',
						src:['static/icon/dy_2_5.jpg'],
						Price:15180,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"6",
						title:'【典雅系列】--和田白玉-大势至菩萨',
						src:['static/icon/dy_2_6.jpg'],
						Price:7680, 
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"7",
						title:'【典雅系列】--和田玉-大势至菩萨',
						src:['static/icon/dy_2_7.jpg'],
						Price:5880,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"8",
						title:'【典雅系列】和田白玉-水滴吊坠',
						src:['static/icon/dy_2_8.jpg'],
						Price:5100,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"9",
						title:'【典雅系列】和田碧玉-水滴耳坠',
						src:['static/icon/dy_3_9.jpg'],
						Price:5100,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"10",
						title:'【典雅系列】和田玉糖白玉--虎啸山河吊坠',
						src:['static/icon/dy_3_10.jpg'],
						Price:14880,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"11",
						title:'【典雅系列】和田玉白玉--招财貔貅把件',
						src:['static/icon/dy_3_11.jpg'],
						Price:6480,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
						id:"12",
						title:'【典雅系列】和田白玉--福纹桶珠手串',
						src:['static/icon/dy_3_12.jpg'],
						Price:15780,
						oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
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
	.dy-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.dy-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.dy-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.dy-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>