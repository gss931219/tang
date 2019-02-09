<template>
	<div class="minehead">
		<i class="el-icon-arrow-left" @click="back"></i>
	    <!--<router-link>-->
	        <h2 class="login">登录</h2>
	    <!--</router-link>-->
	    <!--<router-link>-->
	    	<span class="siginup">注册</span>
	    <!--</router-link>-->
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"vminehead",
		methods:{
			back(){
				//路由回退
				this.$router.back(-1);
			}
		}
	}
</script>

<style>
	.minehead{
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding:2% 3% 2% 2%;
		align-items: center;
		background: white;
		border-bottom: 1px solid #CCCCCC;
	}
	.minehead .el-icon-arrow-left{
    	color:#666666;
    	font-size: 0.5rem;
    }
    .minehead h2{
    	font-size: 0.36rem;
    	color: #323232;
    }
	.minehead span{
		font-size: 0.32rem;
		color:#323232;
	}
</style>