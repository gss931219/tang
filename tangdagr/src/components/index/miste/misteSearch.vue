<template>
    <div class="searchEnter">
        <!--<router-link to="/search">-->
        <input type="text" name="" id="" value="" placeholder="搜索"/>
            <span>
            	<span></span>
            </span>
            <!--<el-input  type="text" >
            	
            </el-input>-->
   <!--     </router-link>-->
    </div>
</template>
<style>
    .searchEnter {
    	box-sizing: border-box;
    	width:100%;
    	position:fixed;
    	top:0;
    	background: white;
    	padding:5px 5%;
    	z-index: 1000;
    }
    .searchEnter input{
    	text-align: center;
    	background-color:rgba(0,0,0,.1);
    	border-radius: 6px;
    	width: 100%;
    	margin: auto;
    	height: 30px;
    	outline: none;
    	border: none;
    }
</style>