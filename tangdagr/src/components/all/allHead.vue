<template>
	<div class="allHead">
		<i class="el-icon-arrow-left" @click="back"></i>
	    <h2>所有分类-唐大官人官网</h2>
	</div>
</template> 
<script type="text/javascript">
	export default {
		name:"vall",
		methods:{
			back(){
				//路由回退
				this.$router.back(-1);
			}
		}
	}
</script>
<style type="text/css">
	.allHead{
		box-sizing: border-box;
		width: 100%;
		position:fixed;
		top:0;
		left:0;
		right:0;
		display: flex;
		padding:2% 3% 2% 2%;
		align-items: center;
		background: #F7F7F7;
		border-bottom: 1px solid #CCCCCC;
		z-index: 1000;
	}
	.allHead .el-icon-arrow-left{
    	color:#666666;
    	font-size: 0.5rem;
    }
    .allHead h2{
    	margin-left: 16%;
    	font-size: 0.36rem;
    	color: #323232;
    }
</style>