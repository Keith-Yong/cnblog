<template>
  <div id="app">
<!-- 渲染Header组件? 这里的/为啥标红了 -->
  <Header></Header>

  </div>
</template>

<script>
// ../是上级目录
// ?出现红色是什么原因
  import Header from './components/Header.vue';
  
  
export default {
  name: 'App',
   
  //  注册Header组件
  components:{
   Header
  }
  
}
</script>

<style>

</style>
