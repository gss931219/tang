<template>
	<div class="car">
		<v-car></v-car>
	</div>
</template>

<script>
	import vCar from "@/components/gwc/gwc.vue"
	export default {
		data(){
			return {
				
			}
		},
		components:{
			vCar
		}
	}
</script>

<style>
	.car{
		background:#F5F5F5;
		width:100%;
		height:100%;
	}
</style>