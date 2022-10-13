<template>
    <div class="UserInfo">
        <div class="loading" v-if="isLoading">
        <img src="../assets/loading.gif" alt="">
        
    </div>
    <div class="userInfomation" v-else>
        <section>
            <img :src="userinfo.avatar_url" alt="">
            <span>{{userinfo.loginname}}</span>
            <p>
                {{userinfo.score}}积分
            </p>
            <p>
                注册时间：{{userinfo.creat_at | formatDate}}
            </p>
        </section>
        <!-- 回复内容 -->
        <div class="replies">
            <p>回复的主题</p>
            <ul>
                <!-- 回复的主题内容，可以点击的，用路由进行链接对应的组件 -->
                <li v-for="item in userinfo.recent_replies" :key="item">
                    <router-link :to="{
                      name:'post_content',
                      params:{
                        id:item.id
                      }
                      
                    }">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>

        </div>
        <!-- 创建的主题 -->
        <div class="topics">
            <p>创建的主题</p>
            <ul>
                <!-- 这里的路由和最近的主题一样直接复制即可 -->
                <li v-for="item in userinfo.recent_topics" :key="item">
                    <router-link :to="{
                      name:'post_content',
                      params:{
                        id:item.id
                      }
                      
                    }">
                        {{item.title}}
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"UserInfo",
        data() {
            return {
                isLoading:false,
                userinfo:{}
            }
        },
        created(){
        this.isLoading = true;//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
      },

        methods:{
            getData() {
           
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
        });
    },
    
  }
        }

    
    

</script>
<style>

</style>