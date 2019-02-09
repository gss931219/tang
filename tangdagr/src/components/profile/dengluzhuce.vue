<template>
	<div class="dengluzhuce">
		<input type="text"  class="zh" maxlength="11" placeholder="用户名/手机号码" />
		<input type="text" class="pas" placeholder="密码"/>
	    <input type="button" class="button"  value="登录" />
	    <p><a href="#">忘记密码?</a></p>
		<div class="three">
			<span></span>
		    <span>第三方账号快速登录</span><br/>
			<span></span>
		</div>
		<div class="weixin">
			<figure>
				<img src="../../assets/wechat.png" alt=""/>
				<figcaption>微信</figcaption>
			</figure>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"vdengluzhuce",
	}
</script>

<style type="text/css">
	.dengluzhuce{
		box-sizing: border-box;
		width: 100%;
		padding:0 2%;
	}
	.dengluzhuce input{
		height:1rem;
		width: 100%;
		margin-top: 4%;
		outline: none;
		border: none;
		border-bottom: 1px solid #CCCCCC;
	}
	.dengluzhuce .zh{
		box-sizing: border-box;
		font-size: 16px;
		border-radius:0.04rem;
		padding-left: 3%;
	}
	.dengluzhuce .pas{
		box-sizing: border-box;
		font-size: 16px;
		border-radius:0.04rem;
		padding-left: 3%;
	}
	.dengluzhuce .button{
		font-size:16px;
		border-radius:0.05rem;
		text-align: center;
		background-color: #d2d2d2;
		color: #fff;
	}
	p{
		text-align: center;
	}
	p>a{
		display: inline-block;
		padding:20px 0px;
		font-size: 17px;
		text-decoration: none;
		color:#000000;
	}
	.three{
		display:flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
	.three span:nth-of-type(1){
		width:90px;
		height:1px;
		background: #d2d2d2 ;
	}
	.three span{
		font-size: 17px;
		text-align: center;
		margin-bottom: 0.625rem;
	}
	.three span:nth-of-type(3){
		width:90px;
		height:1px;
		background: #d2d2d2;
	}
	.weixin{
		width: 100%;
		text-align: center;
	}
	.weixin figure img{
		width: 15%;
	}
	.weixin figcaption{
		
	}
</style>