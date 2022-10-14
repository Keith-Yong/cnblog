<template>
<!--  side侧边栏html结构 -->
 <div class="autherinfo">
    <div class="authersummary">
        <router-link
              :to="{
                //  点击头像会传参数name，即入参name，
                name: 'user_info',
                params: {
                  name: userinfo.loginname,
                },
              }"
            >
              <img :src="userinfo.avatar_url" alt="" />
            </router-link>
    <div>作者最近主题</div>
    <ul>
        <!-- topclimtby5是computed函数 -->
        <li v-for="list in topclimtby5" :key="list">
            <!-- 只需要显示5条，这里会显示多条 -->
            <!-- 路由指向文章详情页Artist组件 -->
            <router-link :to="{
              name:'post_content',
              params:{
                // Artist组件需要的参数包括id和name
                id:list.id,
                name:list.author.loginname
              }

            }">
            {{list.title}}
        </router-link>
        </li>
    </ul>
</div>
    <div class="recent_topics">
        <div class="topbar">作者最近回复</div>
        <!-- 头像用路由 和aritcle中的一样，直接复制修改参数即可，参数不同,因为接口不同 -->
        <ul>
        <!-- topclimtby5是computed函数 -->
        <li v-for="list,index in replylimtby5" :key="index">
            <!-- 只需要显示5条，这里会显示多条 -->
            <router-link :to="{
              name:'post_content',
              params:{
                // Artist组件需要的参数包括id和name
                id:list.id,
                name:list.author.loginname
              }

            }">
            {{list.title}}
        </router-link>
            
        </li>
    </ul>
       
            
        

 </div>
</div>
</template>


<script>
    export default {
        name: "SliderBar",
        data(){
            return {
                isLoading:false,
                userinfo:{}  //定义userinfo的数据格式，对象
            }
        },
        computed:{
            topclimtby5(){
                if(this.userinfo.recent_topics){
                    return this.userinfo.recent_topics.slice(0,5);
                }else{
                        return this.userinfo.recent_topics;
                    }
                },
            replylimtby5(){
                if(this.userinfo.recent_replies){
                    return this.userinfo.recent_replies.slice(0,5);
                }else{
                        return this.userinfo.recent_topics;
                    }
                },

            }
        ,

        // 用计算属性实现最近回复主题只展示5条数据
        
        
        methods:{
            getData() {
        //    走的api和userinfo一样
           this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
       // then后面加成功的 具体行为
       .then((res) => {
         this.isLoading = false; //加载成功，去除动画
         console.log(res.data);
       //   将请求成功拿到的数据 存入数组posts中
         this.userinfo = res.data.data;
       })

       .catch(function (err) {
         //   处理返回失败后的问题
         
         console.log(err);
       })
   }
},
    created(){
            this.isLoading = true; //加载成功之前加载动画
   
            this.getData(); // 在页面加载之前获取数据
        },
    

}

        
    
</script>

<style>
    .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>