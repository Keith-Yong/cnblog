<!-- Postlist组件，首页/主页 -->
<template>
  <!-- 主页的html结构 第一个div是根标签-->
  <div>
    <!--  这里的div是在加载慢的时候套一个加载动画 -->
    <!-- v-if的作用：在isLoading状态的时候加载这个标签，在data函数中定义isLoading的值 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="" />
    </div>
    <!-- 一旦数据返回，就加载下面的div, -->
    GGGGG
    <div>
      <!-- 一篇篇博客形成了主题列表，所以用ul>li结构 -->

      <ul>
        <li v-for="post in posts" :key="post.id">
          

          <img :src="post.author.avatar_url" alt="" />
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

<style>
</style>