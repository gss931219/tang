import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'
import miste from '@/view/index/miste.vue'
import whole from '@/view/index/whole.vue'
import car from '@/view/index/car.vue'
import details from '@/view/index/details.vue'
import jydetails from '@/view/index/jydetails.vue'
import dydetails from '@/view/index/dydetails.vue'
import zydetails from '@/view/index/zydetails.vue'
import fcdetails from '@/view/index/fcdetails.vue'
import zzdetails from '@/view/index/zzdetails.vue'
import profile from '@/view/index/profile.vue'
import tologin from '@/view/index/tologin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"/miste",
      children:[{
      	path:"/miste",
      	name:"miste",
      	meta:{
      		isLogin:false
      	},
      	component: miste
      },{
      	path:"/whole",
      	name:"whole",
      	meta:{
      		isLogin:false
      	},
      	component: whole
      },{
      	path:"/tologin",
      	name:"tologin",
      	meta:{
      		isLogin:false
      	},
      	component: tologin
      
      }

      ]
    },
    {
      	path:"/profile",
      	name:"profile",
      	meta:{
      		isLogin:false
      	},
      	component: profile
     },
     {
      	path:"/car",
      	name:"car",
      	meta:{
      		isLogin:false
      	},
      	component: car
     },
     {
     	path:"/details",
      name:"details",
      component: details
     },
     {
     	path:"/jydetails",
      name:"jydetails",
      component: jydetails
     },
     {
     	path:"/dydetails",
      name:"dydetails",
      component: dydetails
     },
     {
     	path:"/zydetails",
      name:"zydetails",
      component: zydetails
     },
     {
     	path:"/fcdetails",
      name:"fcdetails",
      component: zydetails
     },
     {
     	path:"/zzdetails",
      name:"zzdetails",
      component: zzdetails
     },

  ]
})
