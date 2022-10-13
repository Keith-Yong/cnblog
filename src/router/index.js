import Vue from 'vue'
import Router  from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo  from '../components/UserInfo'

Vue.use(Router)

export default new Router({
    routes: [
        // 需要在路由中定义一个名字name的参数
        {
            name:'root',
            path:'/',
            components:{
              main:PostList
            }
          },
        // 需要在路由中定义一个名字name的参数
        {
        name:"post_content",
        // 需要在路由中定义一个路径path的参数
        path:'/topic/:id',
        // 需要在路由中定义一个参数用于路由指向的组件
        components:{
            main:Article
          }
            
        },
        {
            // 定义指向UserInfo组件的路由
         name : "user_info",
         path:'/userinfo/:name',
         components:{
            main:UserInfo
         }
        }
        
    ]
})


//  在其他组件中能点击的标签都用路由超链接包裹起来