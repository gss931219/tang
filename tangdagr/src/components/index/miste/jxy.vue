<!--金镶玉系列-->
<template>
	<div class="jxy-wrapper">
		<div class="jxy-head">
			<span class="xian"></span>
			<h3>金镶玉系列</h3>
			<span class="xian"></span>
	    </div>
	    <div class="jxy-product">
	    	<ul class="product">
				<li class="product-item" v-for="(item,index) in jxyLists" 
					:key="index" @click="sendMsg(item)">
			    		<router-link to="/details">
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
				jxyLists:[
					{
					   id:"1",
					   title:'【金镶玉】--和田白玉-莲花观音',
					   src:['static/icon/jxy_1.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:91,
					   des:"和田白玉，足金镶玉镶嵌，莲花观音慈眉善目,意境悠悠,一朵圣莲,纯洁雅致，观之赏心悦目，佩之祥和平安.编码：Tpjxyx000637",
					},
					{
					   id:"2",
					   title:'【金镶玉】--和田白玉-笑佛吊坠',
					   src:['static/icon/jxy_2.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:107,
					   des:"和田白玉弥勒佛面容和蔼，大笑而不露齿，坦胸挺肚,寓意着知足常乐，能容世间凡事,保平安，祛烦恼.编码：Tpjxyx000637",
					},
					{
					   id:"3",
					   title:'【金镶玉】--和田白玉-凤凰牌吊坠',
					   src:['static/icon/jxy_3.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:40,
					   des:"和田白玉,方牌镀金凤凰,凤凰为祥瑞之鸟，凤舞天翔，傲视天下，玉佩戴提升气质，助消灾解难，遇难成祥，万事如意,编码：Tpjxyx000637",
					},
					{
					   id:"4",
					   title:'【金镶玉】--和田白玉-转运桶珠吊坠',
					   src:['static/icon/jxy_4.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:96,
					   des:"和田白玉方牌，五爪金龙腾飞，体态蜿蜒，神态庄严生动，长期佩戴可护佑平安，驱邪辟邪，照福纳言，.编码：Tpjxyx000637",
					},
					{
					   id:"5",
					   title:'【金镶玉】--和田白玉-貔貅吊坠',
					   src:['static/icon/jxy_6.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:95,
					   des:"貔貅灵动霸气吾闻之，唯侯德志能受多福厚德载物，雅量容人，找八方财，受全家福.编码：Tpjxyx000637",
					   
					},
					{
					   id:"6",
					   title:'【金镶玉】--和田白玉-武财神吊坠',
					   src:['static/icon/jxy_5.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:50,
					   des:"和田白玉方牌，武财神关公屹立其上，身穿金甲神形兼备，栩栩如生，保平安，消灾邪，照福纳瑞，.编码：Tpjxyxqx000606",
					},
					{
					   id:"7",
					   title:'【金镶玉】--和田白玉-平安扣吊坠',
					   src:['static/icon/jxy_7.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:94,
					   des:"和田白平安扣，圆圆敦厚,代表平安圆满，金莲点缀白玉时尚典雅与富贵共存.编码：Tpjxyxqx000676",
					},
					{
					   id:"8",
					   title:'【金镶玉】--和田白玉-转运桶珠吊坠',
					   src:['static/icon/jxy_8.jpg'],
					   Price:395,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:82,
					   des:"和田白玉，足金镶玉镶嵌，转运之珠，圆润饱满，简单漂亮.可做项链佩戴更可作为配饰，带来幸运吉祥如意.编码：Tpjxyxqx000667",
					},
					{
					   id:"9",
					   title:'【金镶玉】--和田白玉-十字架吊坠',
					   src:['static/icon/jxy_9.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:139,
					   des:"金镶玉十字架，爱与救赎，神圣不可侵犯.编码：Tpjxyxqx000678",
					},
					{
					   id:"10",
					   title:'【金镶玉】--和田白玉-弥勒佛吊坠',
					   src:['static/icon/jxy_10.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:53,
					   des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
					},
					{
					   id:"11",
					   title:'【金镶玉】--和田白玉-葫芦吊坠',
					   src:['static/icon/jxy_11.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:89,
					   des:"和田白玉，足金镶玉镶嵌，莲花观音慈眉善目,意境悠悠,一朵圣莲,纯洁雅致，观之赏心悦目，佩之祥和平安.编码：Tpjxyx000637",
					},
					{
					   id:"12",
					   title:'【金镶玉】--和田白玉-岁岁平安锁吊坠',
					   src:['static/icon/jxy_12.jpg'],
					   Price:675,
					   oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:0,
					   des:"和田白玉，足金镶玉镶嵌，莲花观音慈眉善目,意境悠悠,一朵圣莲,纯洁雅致，观之赏心悦目，佩之祥和平安.编码：Tpjxyx000637",
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
	.jxy-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.jxy-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.jxy-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.jxy-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
	.product{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.product-item{
		width: 45%;
		padding: 0px 0px 5px 0px;
		border:solid 6px white;
	}
	.product-item img{
		width: 100%;
	}
	.product-title{
		
		text-align: left;
		background: white;
		padding: 10px 5px;
	}
	.product-price{
		padding: 0 10px 10px;
		color:red;
		background: white;
	}
</style>