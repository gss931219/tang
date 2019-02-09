<template>
	<div class="car">
		<div class="content" v-show="conStatus" ref="con1">
			<img :src="item.src[0]"/>
			<p class="title">{{item.title}}</p>
			<p class="price">￥{{item.Price}}.00<span class="ling">￥{{item.oldPrice}}.00</span></p>
			<p class="kaiguang">是否开光:
				<span>{{item.kaiguang}}</span>
				<span>{{item.weikaiguang}}</span>
			</p>
			<p class="size">规格：
				<span>{{item.zhongxiao}}</span>
				<span>{{item.mediumSize}}</span>
				<span>{{item.bigSize}}</span>
			</p>
			<div class="pinpai">
				<p>品牌：&nbsp;{{item.name}}</p>
				<p class="num">已售：{{item.num}}</p>
			</div>
			<div class="des">
				<p class="jj">简介：</p>
				<p class="hetian">
					{{item.des}}
				</p>
			</div>
			<section class="xtb-goods">
				<figure>
					<img src="../../assets/xtb_1.jpg" alt=""  />
					<figcaption>天然玉石</figcaption>
				</figure>
				<figure>
					<img src="../../assets/xtb_2.jpg" alt=""  />
					<figcaption>真品实价</figcaption>
				</figure>
				<figure>
					<img src="../../assets/xtb_2.jpg" alt=""  />
					<figcaption>真品实价</figcaption>
				</figure>
				<figure>
					<img src="../../assets/xtb_2.jpg" alt=""  />
					<figcaption>真品实价</figcaption>
				</figure>
			</section>
			<div class="footer">
				<img src="../../assets/priceIcon3.png"  alt=""/>
				<img src="../../assets/shoucang.jpg"  alt=""/>
				<div>
					<button class="addTocar">加入购物车</button>
					<button class="lj">立即购买</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				item: {
					
				},
				conStatus: true
			}
		},
		created() {

			this.item = {...JSON.parse(localStorage.getItem('item'))}
			console.log('详情'+ this.item)
		},
		methods: {
			back(){
				this.$router.back(-1);
			},
		}
	}
</script>

<style>
	.details{
		box-sizing: border-box;
		width:100%;
	}
	.header{
		width:100%;
		display: flex;
		justify-content: space-between;
	}
	.header .el-icon-arrow-left{
    	color:#666666;
    	font-size: 0.5rem;
    	padding: 10px 10px;
    }
    .detail-head{
    	display: flex;
    	
    }
    .header img{
    	width: 30px;
    	height: 30px;
    	padding: 5px 5px;
    }
    .detail-head li{
    	font-size: 0.34rem;
    	padding: 12px  25px;
    }
    .content{
    	width: 100%;
    }
    .content img{
    	width: 100%;
    }
    .title{
    	padding: 20px 0px 10px 10px;
    	color:#323232;
    }
    .price{
    	color:#D50000;
    	font-size: 0.53rem;
    	padding:0px 10px 20px 10px;
    }
    .pinpai{
    	width: 100%;
    	display: flex;
    	justify-content: space-between;
    }
    .ling{
    	color:#999999;
    	font-size: 0.3rem;
    	padding: 5px 10px;
    	text-decoration: line-through;
    }
    .xtb-goods{
    	width: 100%;
    	display: flex;
    	align-items: center;
    	justify-content: space-around;
    	border-top: solid 10px #F5F5F5;
    }
    .xtb-goods figure{
    	width: 15%;
    	padding: 10px 5px;
    }
     .xtb-goods figure img {
    	padding: 5px;
    	width: 100%;
    }
     .xtb-goods figcaption{
    	text-align: center;
    	color: #232323;
    }
    .kaiguang, .size{
    	color:#323232;
    	padding:10px  10px;
    }
    .kaiguang span{
    	margin-left: 20px;
    	color:#323232;
    	padding: 5px 10px;
    	border:solid 1px #D8D8D8;
    }
    .size span{
    	margin-left: 20px;
    	color:#323232;
    	padding: 5px 10px;
    	border:solid 1px #D8D8D8;
    }
    .pinpai p{
    	margin-left: 10px;
    	color:#B8B8BB;
    }
    .jj{
    	margin-left: 10px;
    	color:#323232;
    }
    .hetian {
    	margin-left: 10px;
    	color:#B8B8BB;
    }
    .footer{
    	width: 100%;
    	position:fixed;
    	bottom: 0;
    	/*top:90%;*/
    	right:0;
    	align-items: center;
    	display: flex;
    	justify-content: space-between;
    	background: white;
    	/*margin-top: 90%;*/
    	
    }
    .footer img{
    	width: 30px;
    	height:30px;
    	margin-left: 10px;
    }
    .addTocar{
    	padding:10px ;
    	background: #CFD9E0;
    	color:#6D7174;
    	border:none;
    }
    .lj{
    	padding:10px 20px;
    	background: #007CC3;
    	color:white;
    	border:none;
    }
</style>
