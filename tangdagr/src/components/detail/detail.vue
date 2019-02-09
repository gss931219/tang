<template>
	<div id="app">
		<h3 class="title-line">商品参数</h3>
		<div>
			<p class="xilie"><span>系列</span><span>俊雅系列</span></p>
			<p class="xilie"><span>玉种</span><span>白玉</span></p>
			<p class="xilie"><span>器型</span><span>吊坠</span></p>
			<p class="xilie"><span>题材</span><span>佛</span></p>
			<p class="xilie"><span>产状</span><span>山料</span></p>
		</div>
		<div class="img">
			<img class="first-img" src="../../assets/xq_1.png" alt=""/>
			<img src="../../assets/xq_2.png" alt=""/>
			<img src="../../assets/xq_3.png" alt=""/>
			<img src="../../assets/xq_4.png" alt=""/>
			<img src="../../assets/xq_5.png" alt=""/>
			<img src="../../assets/xq_6.png" alt=""/>
			<img src="../../assets/xq_7.png" alt=""/>
		</div>
		<div class="footer">
				<img src="../../assets/priceIcon3.png"  alt=""/>
				<img src="../../assets/shoucang.jpg"  alt=""/>
				<div>
					<button class="addTocar">加入购物车</button>
					<button class="lj">立即购买</button>
				</div>
		</div>
	</div>
</template>

<style>
	.title-line{
		width: 100%;
		padding: 10px;
		border-top: solid 1px #F4F4F4;
		border-bottom: solid 1px #F4F4F4;
		color:#7A7A7A;
	}
	
	.xilie{
		color:#C2C2C5;
		padding: 14px 10px 0px 10px;
		font-size: 0.35rem;
	}
	.xilie span:first-of-type{
		margin-left: 10px;
	}
	.xilie span:nth-of-type(2){
		margin-left: 50px;
	}
	.img {
		width:100%;
		
	}
	.first-img{
		margin-top: 20px;
	}
	.img img{
		width:100%;
	}
	.footer{
    	width: 100%;
    	position:fixed;
    	bottom: 0;
    	/*top:100%;*/
    	right:0;
    	align-items: center;
    	display: flex;
    	justify-content: space-between;
    	background: white;
    }
    .footer img{
    	width: 30px;
    	height:30px;
    	margin-left: 10px;
    }
</style>