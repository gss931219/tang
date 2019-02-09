<!--猜你喜欢-->
<template>
	<div class="cn-wrapper">
		<div class="cn-head">
			<span class="xian"></span>
			<h3>猜你喜欢</h3>
			<span class="xian"></span>
	    </div>
	    <div class="cn-product">
	    	<ul class="product">
					<li class="product-item" v-for="(item,index) in cnLists" :key="index">
						<img :src="item.src" alt="">
			            <p class="product-title">{{item.title}}</p>
			            <p class="product-price">￥{{item.Price}}.00</p>
					</li>
			</ul>
	    </div>
	</div>
</template>

<script>
export default {
		data(){
			return {
				cnLists:[
					{
					   id:"1",
					   title:'【俊雅系列】--和田白玉-山水牌',
					   src:['static/icon/cn_1_01.jpg'],
					   Price:4380,
					},
					{
					   id:"2",
					   title:'【俊雅系列】--和田白玉-舍得',
					   src:['static/icon/cn_1_02.jpg'],
					   Price:4380,
					},
					{
					   id:"3",
					   title:'【俊雅系列】--和田白玉（双鱼戏水）',
					   src:['static/icon/cn_1_03.jpg'],
					   Price:4380,
					},
					{
					   id:"4",
					   title:'【俊雅系列】--和田白玉-佛',
					   src:['static/icon/cn_1_04.jpg'],
					   Price:4380,
					},
					{
					   id:"5",
					   title:'【俊雅系列】--和田白玉--发簪',
					   src:['static/icon/cn_1_05.jpg'],
					   Price:2940,
					},
					{
					   id:"6",
					   title:'【俊雅系列】--和田白玉-项链（四叶草）',
					   src:['static/icon/cn_1_06.jpg'],
					   Price:2940,
					},
					{
					   id:"7",
					   title:'【俊雅系列】--和田白玉-山水牌',
					   src:['static/icon/cn_1_07.jpg'],
					   Price:1980,
					},
					{
					   id:"8",
					   title:'【俊雅系列】--和田白玉-舍得',
					   src:['static/icon/cn_1_08.jpg'],
					   Price:4380,
					},
					{
					   id:"9",
					   title:'【俊雅系列】--和田白玉（双鱼戏水）',
					   src:['static/icon/cn_1_09.jpg'],
					   Price:4380,
					},
					{
					   id:"10",
					   title:'【俊雅系列】--和田白玉-佛',
					   src:['static/icon/cn_1_10.jpg'],
					   Price:4380,
					},
				]
			}
		}
	}
</script>

<style>
	.cn-wrapper{
		width:100%;
		height:300px;
		background:#EBEBEB;
	}
	.cn-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.cn-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.cn-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>