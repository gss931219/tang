<template>
	<div class="dy-wrapper">
	    <div class="dy-product">
	    	<ul class="product">
				<li class="product-item" v-for="(item,index) in shangPins"
					 :key="index" @click="sendMsg(item)">
					<router-link to="/jydetails">
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
				shangPins:[
				{
					id:"1",
					title:'【俊雅系列】--和田碧玉-水滴戒指',
					src:['static/icon/fl_1.jpg'],
					Price:630,
					oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:48,
					   des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"2",
					title:'【典雅系列】--和田白玉-佛祖',
					src:['static/icon/fl_2.jpg'],
					Price:5430,
				},
				{
					id:"3",
					title:'【典雅系列】--和田白玉-东来佛祖',
					src:['static/icon/fl_3.jpg'],
					Price:9680,
					oldPrice:0,
					name:"唐大官人",
					num:53,
					des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"4",
					title:'【典雅系列】--和田白玉-大慈大悲',
					src:['static/icon/fl_4.jpg'],
					Price:5430,
					oldPrice:0,
					name:"唐大官人",
					num:22,
					des:"和田白玉观音,器型圆润，玉质百润，结构紧密，观音菩萨大慈大悲，保一生平安.规格：50*40*8 35编码：Tellt000811",
				},
				{
					id:"5",
					title:'【典雅系列】--和田白玉-观音牌',
					src:['static/icon/fl_1_01.jpg'],
					Price:15180,
					oldPrice:0,
					name:"唐大官人",
					num:53,
					des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"6",
					title:'【典雅系列】--和田白玉-关公',
					src:['static/icon/fl_1_02.jpg'],
					Price:15180,
					oldPrice:0,
					    name:"唐大官人",
					    num:53,
					    des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"7",
					title:'【典雅系列】--和田白玉-大势至菩萨',
					src:['static/icon/fl_1_03.jpg'],
					Price:15180,
					oldPrice:0,
					name:"唐大官人",
					num:53,
					des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"8",
					title:'【俊雅系列】--和田白玉-山水牌',
					src:['static/icon/fl_1_04.jpg'],
					Price:4380,
					oldPrice:0,
					kaiguang:"开光",
					weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"9",
					title:'【俊雅系列】--和田白玉-佛',
					src:['static/icon/fl_1_05.jpg'],
					Price:4380,
					oldPrice:0,
					kaiguang:"开光",
					weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"10",
					title:'【俊雅系列】--和田白玉（双鱼戏水）',
					src:['static/icon/fl_1_06.jpg'],
					Price:4380,
					oldPrice:0,
					kaiguang:"开光",
					weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"11",
					title:'【俊雅系列】--和田白玉-舍得',
					src:['static/icon/fl_1_07.jpg'],
					Price:4380,
					oldPrice:0,
					kaiguang:"开光",
					weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"12",
					title:'【俊雅系列】--和田白玉-关公',
					src:['static/icon/fl_1_08.jpg'],
					Price:4380,
					oldPrice:0,
					kaiguang:"开光",
					weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"13",
					title:'【典雅系列】--和田玉-大势至菩萨',
					src:['static/icon/fl_1_09.jpg'],
					Price:5880,
					oldPrice:0,
					name:"唐大官人",
					num:53,
					des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"14",
					title:'【典雅系列】--和田白玉-大日如来',
					src:['static/icon/fl_1_10.jpg'],
					Price:15180,
					oldPrice:0,
					name:"唐大官人",
					num:53,
					des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"15",
					title:'【俊雅系列】--和田碧玉-手镯',
					src:['static/icon/fl_1_11.jpg'],
					Price:7680,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"16",
					title:'【金镶玉】--和田白玉-弥勒佛',
					src:['static/icon/fl_1_12.jpg'],
					Price:4980,
					oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:53,
					   des:"金镶玉系列，和田玉+足金镶嵌，玉质百润，造型独特，层次分明，弥勒佛面容慈祥，笑不露齿，坦胸挺肚，寓意知足常乐，能容世间凡事.编码：Tpjxyx000637",
				},
				{
					id:"17",
					title:'【金镶玉】--和田白玉-莲花观音',
					src:['static/icon/fl_1_13.jpg'],
					Price:675,
					oldPrice:0,
					   kaiguang:"开光",
					   weikaiguang:"未开光",
					   zhongxiao:"中小款",
					   mediumSize:"中款",
					   bigSize:"大款",
					   name:"唐大官人",
					   num:91,
					   des:"和田白玉，足金镶玉镶嵌，莲花观音慈眉善目,意境悠悠,一朵圣莲,纯洁雅致，观之赏心悦目，佩之祥和平安.编码：Tpjxyx000637",
				},
				{
					id:"18",
					title:'【俊雅系列】--和田白玉--发簪',
					src:['static/icon/fl_1_14.jpg'],
					Price:2940,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"19",
					title:'【俊雅系列】--和田碧玉-平安牌',
					src:['static/icon/fl_1_15.jpg'],
					Price:4500,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
					
				},
				{
					id:"20",
					title:'【俊雅系列】--和田碧玉-圆托戒指',
					src:['static/icon/fl_1_16.jpg'],
					Price:1680,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"21",
					title:'【俊雅系列】--和田碧玉-戒指（贵人）',
					src:['static/icon/ffl.jpg'],
					Price:1680,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"22",
					title:'【俊雅系列】--和田碧玉-双子戒',
					src:['static/icon/ffl_2.jpg'],
					Price:630,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"23",
					title:'【俊雅系列】--和田碧玉-戒指（青春的活力）',
					src:['static/icon/ffl_3.jpg'],
					Price:630,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"24",
					title:'【俊雅系列】--和田碧玉-戒指（祥瑞）',
					src:['static/icon/ffl_4.jpg'],
					Price:630,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"25",
					title:'【俊雅系列】--和田碧玉-戒指（玉美人）',
					src:['static/icon/ffl_5.jpg'],
					Price:630,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"27",
					title:'【俊雅系列】--和田白玉-项链（四叶草）',
					src:['static/icon/ffl_6.jpg'],
					Price:1980,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"28",
					title:'【俊雅系列】--和田碧玉-项链（圆满）',
					src:['static/icon/ffl_7.jpg'],
					Price:4500,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				{
					id:"29",
					title:'【俊雅系列】--和田碧玉-戒指',
					src:['static/icon/ffl_8.jpg'],
					Price:1680,
					oldPrice:0,
					kaiguang:"开光",
				    weikaiguang:"未开光",
					zhongxiao:"中小款",
					mediumSize:"中款",
					bigSize:"大款",
					name:"唐大官人",
					num:48,
					des:"和田白玉弥勒佛挂件,玉质白皙,作品以包身佛为主题，弥勒佛面部线条饱满，笑不漏齿，颇具瑞意，寓意笑口常开，知足常乐.规则：40*30*8重23.5g编码：Telt000805",
				},
				]
			}
		},
		methods:{
			sendMsg(item) {
				console.log(item)
				localStorage.setItem('item',JSON.stringify(item))
			}
		},
		//离开当前路由前触发
		beforeRouteLeave (to, from, next) {
            // ...
            console.log("离开了");
            window.onscroll = null;
            next()
        }
	}
</script>

<style>
	.dy-wrapper{
		width:100%;
		margin-top: 84px;
		background:#EBEBEB;
	}
	.product{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.product-item{
		width: 45%;
		padding: 0px 0px 5px 0px;
		border:solid 6px white;
	}
	.product-item img{
		width: 100%;
	}
	.product-title{
		text-align: left;
		background: white;
		padding: 10px 5px;
	}
	.product-price{
		padding: 0 10px 10px;
		color:red;
		background: white;
	}
</style>