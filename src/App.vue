<template>
  <div id="app">
<!-- 渲染Header组件 -->
  <Header></Header>
  <!-- 渲染PostList组件 -->
  <div class="main">
    <PostList></PostList>
  </div>
  
  </div>
</template>

<script>
// ../是上级目录
// ?出现红色是什么原因
  import Header from './components/Header.vue';
 
  import PostList from './components/PostList.vue';
  
  
export default {
  name: 'App',
   
  //  注册Header,PostList组件
  components:{
   Header,PostList,
  }
  
}
</script>


<style scoped>
 .main{
  width: 80%;
  margin: 0 auto;
 }
</style>
