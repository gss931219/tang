<!--珍珠专区-->
<template>
	<div class="zz-wrapper">
		<div class="zz-head">
			<span class="xian"></span>
			<h3>珍珠专区</h3>
			<span class="xian"></span>
	    </div>
	    <div class="zz-product">
	    	<ul class="product">
					<li class="product-item" v-for="(item,index) in zzLists" 
						:key="index" @click="sendMsg(item)">
						<router-link to="/zzdetails">
							<img :src="item.src" alt="">
				            <p class="product-title">{{item.title}}</p>
				            <p class="product-price">￥{{item.Price}}.00</p>
						</router-link>
					</li>
			</ul>
	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				zzLists:[
				{
				   id:"1",
				   title:'天然珍珠--米型珠手链',
				   src:['static/icon/zz_1_01.jpg'],
				   Price:855,
				   oldPrice:0,
				   name:"唐大官人",
				   num:12,
				   des:"天然珍珠,挑选米粒形珠状打造而成,时尚靓丽;规格：每颗7-8,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"2",
				   title:'天然珍珠--正圆珠吊坠',
				   src:['static/icon/zz_1_02.jpg'],
				   Price:2205,
				   oldPrice:0,
				   color:["灰色","白色","金色"],
				   name:"唐大官人",
				   num:8,
				   des:"天然珍珠,三色可选(灰金白),搭配925银链;规格：10-11,(天然珍珠每颗都有细微差别)编码：Thng0001",
//				   pl:
				},
				{
				   id:"3",
				   title:'天然珍珠--正圆金色珠吊坠',
				   src:['static/icon/zz_1_03.jpg'],
				   Price:2980,
				   oldPrice:0,
				   name:"唐大官人",
				   num:22,
				   des:"天然珍珠,纯银链配饰，金珠圆润无暇，高贵时尚;规格：11-12mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"4",
				   title:'天然珍珠--贵人项链',
				   src:['static/icon/zz_1_04.jpg'],
				   Price:2880,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"天然珍珠,颜色纯正高贵,颗颗甄选，贵人必备;规格：10-11mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				   
				},
				{
				   id:"5",
				   title:'天然珍珠--靓丽套装',
				   src:['static/icon/zz_1_05.jpg'],
				   Price:2580,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"天然珍珠,精心挑选,靓丽套装由项链+手链+耳钉组成,时尚靓丽,富贵堂皇,配珠为'绿玛瑙';规格：每颗9-10mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"6",
				   title:'天然珍珠--正圆白珠手链',
				   src:['static/icon/zz_1_06.jpg'],
				   Price:1830,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"天然珍珠,颜色纯正高贵,颗颗甄选，贵人必备;规格：10-11mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"7",
				   title:'天然珍珠--圆型手链',
				   src:['static/icon/zz_1_07.jpg'],
				   Price:1530,
				   oldPrice:0,
				   name:"唐大官人",
				   num:5,
				   des:"天然珍珠,整圆型珠搭配而成;规格：10mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"8",
				   title:'天然珍珠--挂坠',
				   src:['static/icon/zz_1_08.jpg'],
				   Price:1380,
				   oldPrice:0,
				   name:"唐大官人",
				   num:3,
				   des:"天然珍珠,神韵内敛，贵气逼人",
				},
				{
				   id:"9",
				   title:'天然珍珠项链+手链（套装）',
				   src:['static/icon/zz_1_09.jpg'],
				   Price:1680,
				   oldPrice:0,
				   name:"唐大官人",
				   num:12,
				   des:"天然珍珠套装,项链55颗珍珠+配饰(四颗天然南红)手链22颗珍珠(一颗天然南红),天然珍珠,色泽纯正,住院圆润.配以天然南红圆珠,时尚漂亮又不失尊贵大气;规格：10-11mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"10",
				   title:'天然珍珠--正圆珠手链',
				   src:['static/icon/zz_1_10.jpg'],
				   Price:1380,
				   oldPrice:0,
				   name:"唐大官人",
				   num:18,
				   des:"天然珍珠,正圆手链典雅时尚,;规格：7-8mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"11",
				   title:'天然珍珠--手链',
				   src:['static/icon/zz_1_11.jpg'],
				   Price:930,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"天然珍珠,颜色纯正高贵,颗颗甄选，贵人必备;规格：10-11mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				},
				{
				   id:"12",
				   title:'天然珍珠--手链',
				   src:['static/icon/zz_1_11.jpg'],
				   Price:1530,
				   oldPrice:0,
				   name:"唐大官人",
				   num:0,
				   des:"天然珍珠,颜色纯正高贵,颗颗甄选，贵人必备;规格：10-11mm,(天然珍珠每颗都有细微差别)编码：Thng0001",
				}
				
				]
			}
		},
		methods: {
			sendMsg(item) {
				console.log(item)
				localStorage.setItem('item',JSON.stringify(item))
			}
		}
	}
</script>

<style>
	.zz-wrapper{
		width:100%;
		background:#EBEBEB;
	}
	.zz-head{
		width: 50%;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 2% 0;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.zz-head h3{
		padding: 10px 0;
		color:#323232;
		font-size: 0.3rem;
	}
	.zz-head .xian{
		width: 0.6rem;
		height: 0.02rem;
		background: #bfbfbf;
	}
</style>