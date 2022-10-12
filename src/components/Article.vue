<template>
    <!-- 复制PostList组件中对应的标签即可 -->
    <div class="PostList">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" alt="" >
            <!-- 搭建页面结构 -->
        </div>
        <!-- v-else必须和v-if同时使用 -->
        <div class="c" v-else>
            <!-- 把div定义成两部分，header +title-->
            <div class="topic_header"></div>
            <!-- 一列一列都可以用ul来表示 -->
                <ul>
                    <!-- 日期 ，用户名，访问量，来源-->
                    <li>•发布于：{{post.title}}</li>
                    <li>•作者:{{post.author.loginname}}</li>
                    <li>•{{post.visit_count}}次浏览</li>
                    
                    <li>•来自{{post | tabFormatter}}</li>
                </ul>
                <div class=""></div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return {
                isLoading:false, //是否正在加载
                post:[]  //当前文章页的所有内容，所有属性
            }
        }
    }

</script>

<style scoped>


</style>