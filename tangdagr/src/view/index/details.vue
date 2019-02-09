<template>
	<div class="details">
		<div class="header">
			<i class="el-icon-arrow-left" @click="back"></i>
			<ul class="detail-head">
				<li @click="nihao('zu1')">商品</li>
				<li @click="nihao('zu2')">详情</li>
				<li @click="nihao('zu3')">评价</li>
			</ul>
			<img src="../../assets/xiaoche.jpg">
		</div>
		 <component :is="currentTab"></component>
	</div>
</template>

<script>
	import vCar from "@/components/gwc/gwc.vue"
	import zu1 from "@/components/detail/info.vue"   //商品
	import zu2 from "@/components/detail/detail.vue"  //详情
	import zu3 from "@/components/detail/comment.vue"  //评论
	
	export default {
		data(){
			return {
				currentTab:'zu1',
				item: {
					
				},
				conStatus: true
			}
		},
		components:{
			vCar,
			zu1,
			zu2,
			zu3
		},
		created() {
			this.item = {...JSON.parse(localStorage.getItem('item'))}
			console.log('详情'+ this.item)
		},
		methods: {
			nihao(tab) {
				this.currentTab = tab
			},
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