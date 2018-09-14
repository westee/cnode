import Vue from 'vue'
import Router from 'vue-router'
import Article from './../components/article.vue'
import PostList from '../components/postLsit.vue'
import UserInfo from './../components/userinfo.vue'
import slidebar from './../components/slidebar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main: PostList
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:name',
      components:{             //走这个路由的时候会渲染两个组件
        main: Article, 
        slidebar:slidebar
      }
    },{
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})
