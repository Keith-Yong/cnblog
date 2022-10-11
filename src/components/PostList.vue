<!-- Postlist组件，首页/主页 -->
<template>
  <!-- 主页的html结构 第一个div是根标签-->
  <div class="PostList">
    <!--  这里的div是在加载慢的时候套一个加载动画 -->
    <!-- v-if的作用：在isLoading状态的时候加载这个标签，在data函数中定义isLoading的值 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="" />
    </div>
    <!-- 一旦数据返回，就加载下面的div, -->
    GGGGG
    <div>
      <!-- 一篇篇博客形成了主题列表，所以用ul>li结构 -->

      <ul class="pics">
        <!--  for循环遍历数组 -->
        <li v-for="post in posts" :key="post.id">
          <!-- 在页面展示图片列表 :是动态绑定什么意思？-->

          <img :src="post.author.avatar_url" alt="" />
          <!-- 为什么要用span标签解释：div跟span最大的区别就是span在一行显示而div换行显示，其实掌握好CSS样式span跟div没什么大的区别，一般都用div布局页面，而span一般包在div里面用的比较多。
span不用样式控制就会在一行显示，而div需要用到float、width的Style样式控制，他才在一行显示。 -->
            <!-- 需要做分块处理所以用span    -->
          <span>
            <!--  回复量用span标签 -->
            <span class="reply_count">{{post.reply_count}}</span>
            <!-- 帖子访问量 -->
            /{{post.visit_count}}
          </span>
          <span>
            <!-- 帖子标题 -->
            {{post.title}}
          </span>
          <!-- 最终回复时间 使用管道过滤器-->
          <!-- 过滤器语法：写在大括号内 -->
               
          <span>{{post.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// export default 向外暴露的成员，可以使用任意变量来接收 这里为什么

export default {
  data() {
    return {
      isLoading: false,
    //    用一个空数组存储axios返回的后端数据
      posts: [],
    };
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
    /* 主页背景色设为白色 */
    .PostList {
        background-color: #e1e1e1;
    }
    /*  头像太大 改小 */
    .pics img {
        width:30px;
        height: 30px;
    }
    ul {
        /* 去除图片列表样式 */
        list-style: none;
        width:100%;
        max-width: 1344px;
        margin: 0 auto;

    }

</style>