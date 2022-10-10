<template>
      <!-- 定义header标签 -->
  <div class="header">
   <!-- 头部的列表标签用ul>li -->
   <img src="../assets/cnodejs_light.svg" alt="">
   <ul>
    <!--  把header组件引入到app组件中 -->
    <li><a href="#">首页</a></li>
    <li><a href="#">新手入门</a></li>
    <li><a href="#">API</a></li>
    <li><a href="#">关于</a></li>
    <li><a href="#">注册</a></li>
    <li><a href="#">登录</a></li>
   </ul>
  </div>
</template>

<script>
    //  导出Header组件
    export default {
        name:"Header"
    }
</script>

<!-- scoped代表样式只对当前组件有效  定义Header组件的样式-->
<style scoped>
.header {
    background-color:#333 ;
    height: 50px;
}
/* 图片的样式 */
img {
    max-width: 120px;
    margin-left:50px ;
    margin-top: 10px;

}
/* 列表的样式 */
ul {
    /* 取消默认样式 */
    list-style: none;
    /* 使标签成为浮动元素 向右移动 ？默认颜色为什么是紫色*/
    float: right;
    /*  设置列表项的上下距 */
    margin: 4px;  

}
li {
    /* 转换为行内块元素 */
    display: inline-block;
    /*  列表之间间距过小设置 */
    padding:10px 15px;

}
a {
    text-decoration: none;
    color:#ccc;
    font-size: 14px;


}

</style>