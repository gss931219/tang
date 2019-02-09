<template>
	<div class="mine">
		<!--我的-->
		<v-minehead></v-minehead>
		<v-dengluzhuce></v-dengluzhuce>
	</div>
</template>

<script>
	import vMinehead from "@/components/profile/mineHead.vue"
	import vDengluzhuce from "@/components/profile/dengluzhuce.vue"
	
	export default{
		components:{
			vMinehead,
			vDengluzhuce,
		}
	}
</script>

<style>
	.mine{
		width:100%;
		background:white;
	}
</style>