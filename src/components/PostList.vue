<!-- Postlist组件，首页/主页 -->
<template>
  <!-- 主页的html结构 第一个div是根标签-->
  <div class="PostList">
    <!--  这里的div是在加载慢的时候套一个加载动画 -->
    <!-- v-if的作用：在isLoading状态的时候加载这个标签，在data函数中定义isLoading的值 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="" >
    </div>
    <!-- 一旦数据返回，就加载下面的div, -->
    
    <div class="posts" v-else>
      <!-- 一篇篇博客形成了主题列表，所以用ul>li结构 -->

      <ul >
        <li>
            <!-- 顶部列表 -->
            <div class="toobar">
                <span>全部</span>
                <span>精华</span>
                <span>分享</span>
                <span>问答</span>
                <span>招聘</span>
            </div>
        </li>
        <!--  for循环遍历数组 -->
        <li v-for="post in posts" :key="post.id" class="first">
          <!-- 在页面展示图片列表 :是动态绑定什么意思？-->
          <!-- 头像 -->
          <img :src="post.author.avatar_url" alt="" />
          <!-- 为什么要用span标签解释：div跟span最大的区别就是span在一行显示而div换行显示，其实掌握好CSS样式span跟div没什么大的区别，一般都用div布局页面，而span一般包在div里面用的比较多。
span不用样式控制就会在一行显示，而div需要用到float、width的Style样式控制，他才在一行显示。 -->
            <!-- 需要做分块处理所以用span    -->
          <span class="allcount">
            <!--  回复量用span标签 -->
            <span class="reply_count">{{post.reply_count}}</span>
            <!-- 帖子访问量 -->
            /{{post.visit_count}}
          </span>
          <!-- 帖子的分类 动态绑定class -->
          <!-- 会根据传进来的变量属性值自动选择对应的 class样式 -->
          <span :class="[{put_good:(post.good == true), put_top:(post.top == true),
            'topiclist-tab':(post.good != true) && (post.top !=true)}]"  id="fenlei" >
            
            <!-- 过滤器第一个值是传入的参数，|是管道，第二个参数是过滤器名字 -->
            <span >{{post | tabFormatter}}</span>
        </span>
            <!-- 帖子标题  超链接使用路由包裹起来 -->
            <!-- 这里的name和id是传过Index.js中的路由数组 -->
            <router-link :to="{name:'post_content',params:{
                id:post.id,
                name:post.author.loginname
                }}">
                <span class="title"> {{post.title}}</span>
            </router-link>
          
          <!-- 最终回复时间 使用管道过滤器-->
          <!-- 过滤器语法：写在大括号内 -->     
          <span class="last-time">{{post.last_reply_at | formatDate}}</span>
        </li>
          <li>
            <!-- 分页组件在主页组件中的位置 -->
          <Pageination />
          </li>
      </ul>
    </div>
  </div>
</template>


<script>
// export default 向外暴露的成员，可以使用任意变量来接收 这里为什么
//  引入分页组件
import Pageination from './Pageination.vue'

export default {
  data() {
    return {
      isLoading: false,
    //    用一个空数组存储axios返回的后端数据
      posts: [],
    };
  },
  components:{
    Pageination,
  },
  created() {
    
    this.isLoading = true; //加载成功之前加载动画
   
    this.getData(); // 在页面加载之前获取数据
  },
    // 在页面加载之前就执行请求函数getData
  methods: {
    getData() {
      
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20,
        })
        // then后面加成功的 具体行为
        .then((res) => {
          this.isLoading = false; //加载成功，去除动画
          console.log(res.data);
        //   将请求成功拿到的数据 存入数组posts中
          this.posts = res.data.data;
        })

        .catch(function (err) {
          //   处理返回失败后的问题
          
          console.log(err);
        });
    },
    
  },
};
</script>
<style scoped>
    .PostList{
      background-color: #e1e1e1;
    }
    .posts {
      margin-top: 10px;
    }
  
    .PostList img {
      height: 30px;
      width: 30px;
      vertical-align: middle;
    }
  
    ul {
      list-style: none;
      width: 100%;
      max-width: 1344px;
      margin: 0 auto;
    }
  
    ul li:not(:first-child) {
      padding: 9px;
      font-size: 15px;
      font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
      font-weight: 400;
      background-color: white;
      color: #333;
      border-top: 1px solid #f0f0f0;
    }
  
    li:not(:first-child):hover {
      background: #f5f5f5;;
    }
  
    li:last-child:hover {
      background: white;
    }
  
    li span {
      line-height: 30px;
    }
  
    .allcount {
      max-width: 80px;
      display: inline-block;
      text-align: center;
      font-size: 12px;
    }
  
    .reply_count {
      
      color: #9e78c0;
      font-size: 14px;
    }
  
    .put_good, .put_top {
      background: #80bd01;
      padding: 2px 4px;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      color: #fff;
      font-size: 12px;
      margin-right: 10px;
    }
  
    .topiclist-tab {
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      font-size: 12px;
      margin-right: 10px;
    }
  
    .last_reply {
      text-align: right;
      min-width: 50px;
      display: inline-block;
      white-space: nowrap;
      float: right;
      color: #778087;
      font-size: 12px;
    }
  
    .toobar {
      height: 40px;
      background-color: #f5f5f5;
    }
  
    .toobar span {
      font-size: 14px;
      color: #80bd01;
      line-height: 40px;
      margin: 0 10px;
      cursor: pointer;
    }
  
    .toobar span:hover {
      color: #9e78c0;
    }
  
    a {
      text-decoration: none;
      color: black;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    .loading {
      text-align: center;
      padding-top: 300px;
    }

    .first {
        position: relative;
    }
/* 修改时间的位置 */
    .last-time {
        position: absolute;
        right: 0;
        bottom: 0;
    }

     /* 修改分类标签的位置 */
    #fenlei {
        position: absolute;
        left:110px
    }

    /* 修改题目的位置 */
    .title {
        position: absolute;
        left: 145px;
    }


    
  </style>