<template>
	<div class="banner">
		<div class="block">
            <el-carousel trigger="click" height="150px">
	            <el-carousel-item  v-for="item in arr" :key="item">
	               <h3><img :src="item"/></h3>
	            </el-carousel-item>
            </el-carousel>
        </div>
	</div>
</template>

<script>
	export default{
		name:"vlunbo",
		data(){
			 return {
                arr:[
               	"http://localhost:3000/upload/lunbo1_01.jpg",
               	"http://localhost:3000/upload/lunbo2_02.jpg",
               	"http://localhost:3000/upload/lunbo3_03.jpg",
               	"http://localhost:3000/upload/lunbo4_04.jpg",
               	"http://localhost:3000/upload/lunbo5_05.jpg",
               	"http://localhost:3000/upload/lunbo6_06.jpg",
                ]
            }
		}
}
	
</script>

<style>
	.banner{
		box-sizing: border-box;
		width: 100%;
		margin-top: 40px;
	}
	.el-carousel{
		height: 150px;
	}
	.el-carousel__button{
		width: 10px;
		height:10px;
		border-radius: 50%;
	}
	.el-carousel__indicator{
		padding: 3px 5px;
	}
	.bannerner{
		width: 94%;
		margin: auto;
		background: white;
	}
	.el-carousel img {
		width: 100%;
		height: 200px;
	}
</style>