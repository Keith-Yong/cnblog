<template>
  <div id="app">
<!-- 渲染Header组件 -->
  <Header></Header>
  <!-- 渲染PostList组件 -->
  <!-- 用一个div包裹所有的内容 -->
  <div class="main">
     <!--sliderbar组件  -->
     <router-view name="slidebar"></router-view>
    <!-- <PostList></PostList> -->
    <!--路由 默认访问postlist组件，点击标题后路由后指向Article组件 -->
    <router-view name="main"></router-view>
    
  </div>
  
  </div>
</template>

<script>
// ../是上级目录
// ?出现红色是什么原因
  import Header from './components/Header.vue';
 
  // import PostList from './components/PostList.vue';
  
  
export default {
  name: 'App',
   
  //  注册Header,PostList组件
  components:{
   Header,
  }
  
}
</script>


<style scoped>
 .main{
  width: 80%;
  margin: 0 auto;
 }
</style>
