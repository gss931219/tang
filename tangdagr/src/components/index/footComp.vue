<template>
	<footer>
		<router-link to="/miste">
			<dl>
				<dt><img :src="$route.path=='/miste'?arr[0].imgNew:arr[0].imgOld" alt="" /></dt>
				<dd>首页</dd>
			</dl>
		</router-link>
		<router-link to="/whole">
			<dl>
				<dt><img :src="$route.path=='/whole'?arr[1].imgNew:arr[1].imgOld" alt="" /></dt>
				<dd>全部</dd>
			</dl>
		</router-link>
		<router-link to="/car">
			<dl>
				<dt><img :src="$route.path=='/car'?arr[2].imgNew:arr[2].imgOld" alt="" /></dt>
				<dd>购物车</dd>
			</dl>
		</router-link>
		<router-link to="/profile">
			<dl>
				<dt><img :src="$route.path=='/profile'?arr[3].imgNew:arr[3].imgOld" alt="" /></dt>
				<dd>我的</dd>
			</dl>
		</router-link>
		
	</footer>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				arr:[
					{
					  imgNew:require  ("../../assets/sy1.png"),	
					  imgOld:require  ("../../assets/sy2.png"),	
					},
					{
					  imgNew:require  ("../../assets/fl1.png"),	
					  imgOld:require  ("../../assets/fl2.png"),	
					},
					{
					  imgNew:require  ("../../assets/gwc1.png"),	
					  imgOld:require  ("../../assets/gwc2.png"),	
					},
					{
					  imgNew:require  ("../../assets/kf1.png"),	
					  imgOld:require  ("../../assets/kf2.png"),	
					},
				]
			}
		}
	}
	
</script>
<style>
	footer{
		width:100%;
		height: 1.5rem;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        align-items: center;
        position: fixed;
        bottom: 0;
        z-index: 22;
        background: white;
    }
    footer img{
    	width:25%;
    }
    footer a{
        display: inline-block;
        text-align: center;
        flex: 1;
        color:#323232;
    }
</style>