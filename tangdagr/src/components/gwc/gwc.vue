<template>
	<div >
		<div class="gwcHead">
			<i class="el-icon-arrow-left" @click="back"></i>
		    <h2>购物车</h2>
		    <span class="edit">编辑</span>
		    
		</div>
		<div class="cart-content" ref="cartWrapper">
			<!--<div>
				<cartDetail :allCartChoose="allChoose"></cartDetail>
			    <div class="recommend">
			    	<div class="rec-title">
			    		<span :class="index==chooseIndex?'isRecChoose':''"
			    			v-for="(item,index) in recommends"
			    			@click="chooseIndex = index">
			    		 {{item}}
			    		 </span>
			    	</div>
			    </div>
			</div>-->
			
		</div>
		<div class="footer">
			<div>
				<input type="radio"  />全选
			</div>
			<div class="zj">
				<span>总计：￥0.00</span>
				
				<span><button>去结算</button></span>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:"vcar",
		methods:{
			back(){
				//路由回退
				this.$router.back(-1);
			}
		}
	}
</script>

<style>
	.gwcHead{
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding:2% 3% 2% 2%;
		align-items: center;
		background: white;
		border-bottom: 1px solid #CCCCCC;
	}
	.gwcHead .el-icon-arrow-left{
    	color:#666666;
    	font-size: 0.5rem;
    }
    .gwcHead h2{
    	font-size: 0.36rem;
    	color: #323232;
    }
	.gwcHead span{
		font-size: 0.32rem;
		color:#323232;
	}
	.cart-content{
		box-sizing:border-box ;
		width: 100%;
		background: #F5F5F5;
	}
	.recommend{
		width:100%;
	}
	.rec-title{
		display: flex;
		font-size: .444975rem;
	}
	.rec-title span{
		flex:1;
		height:1.375rem;
		line-height: 1.275rem;
		text-align: center;
		
	}
	.footer{
		width: 100%;
		height:50px;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer>div{
		padding: 10px;
	}
	.footer>div>input{
		background: blue;
		color:#999;
		
	}
	.zj span button{
		padding: 10px;
		color:white;
		background:#007CC3 ;
		border:none;
		
	}
</style>



