<template>
  <!-- 复制PostList组件中对应的标签即可 -->
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="" />
      <!-- 搭建页面结构 -->
    </div>
    <!-- v-else必须和v-if同时使用 c什么意思？ -->
    <div class="markdown-text" id="content" v-else>
      <!-- 把div定义成两部分，header +title-->
      <div class="topic_header">
        <div class="topic_title">{{ post.title }}</div>
        <!-- 一列一列都可以用ul来表示 -->
        <ul>
          <!-- 日期 ，用户名，访问量，来源-->
          <li>•发布于：{{ post.create_at | formatDate }}</li>
          <li>• 作者：{{ post.author.loginname }}</li>
          <li>• {{ post.visit_count }}次浏览</li>
          <li>•来自{{ post | tabFormatter }}</li>
        </ul>
        <!-- 获取本组件中正文的数据 -->
        <!-- 后端拿到的数据是使用了markdown的语法，所以需要把markdown语法引进来 -->
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <!-- article页面中回复的内容 -->
      <div id="reply">
        <div class="topbar">回复</div>

        <!--  -->
        <div
          v-for="(reply, index) in post.replies"
          :key="index"
          class="replySec"
        >
          <!--  -->
          <div class="replyUp">
            <router-link
              :to="{
                //  传递参数
                name: 'user_info',
                params: {
                  name: reply.author.loginname,
                },
              }"
            >
              <img :src="reply.author.avatar_url" alt="" />
            </router-link>

            <!-- bug解决方法：不要用对象或是数组作为key，用string或value作为key -->

            <!-- 用户名字 也加一个路由-->
            <router-link
              :to="{
                name: 'user_info',
                params: {
                  name: reply.author.loginname,
                },
              }"
            >
              <span>{{ reply.author.loginname }}</span>
            </router-link>

            <!-- 楼层index+1循环 -->
            <span> {{ index + 1 }}楼 </span>
            <span v-if="reply.ups.length > 0"> ☝ {{ reply.ups.length }} </span>
            <span v-else> </span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false, //是否正在加载
      post: {}, // 空对象：当前文章页的所有内容，所有属性 为什么这里是用空的对象，而不是数组
    };
  },
  beforeMount() {
    this.isLoading = true;
    this.getAriticleData();
  },
  
  methods: {
    // 定义方法使用axios获取Article的数据
    getAriticleData() {
      this.$http
        .get(` https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.success == true) {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },

  watch:{

          $route(){
            this.getAriticleData()
          }
      }
};

    
</script>

<!-- 引入css必须把Scoped去掉 -->
<style >
@import "../assets/markdown-github.css";
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

/* .markdown-text img {
      width: 92% !important;
    } */
</style>
  