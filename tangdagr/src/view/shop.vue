<template>
	<div>
		<shop-head></shop-head>
		
	</div>
</template>

<script>
	import shopHead from "@components/shop/shopHead"
	export default {
		data(){
			return {
				shopOpt:{}
			}
		},
		mounted(){
			this.$http.getShopInfoById(this.$route.params.id).then(res=>{
				this.shopOpt=res.data;
			})
		},
		components:{
			shopHead
		}
	}
</script>

<style>
</style>