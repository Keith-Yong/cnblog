<!-- Postlist组件，首页/主页 -->
<template>
    <!-- 主页的html结构 第一个div是根标签-->
    <div>
        <!--  这里的div是在加载慢的时候套一个加载动画 -->
        <!-- v-if的作用：在isLoading状态的时候加载这个标签，在data函数中定义isLoading的值 -->
        <div class="loading" v-if="isLoading">
            <img src="" alt="">

        </div>
        <!-- 一旦数据返回，就加载下面的div, -->
        <div>
            <!-- 一篇篇博客形成了主题列表，所以用ul>li结构 -->

            <ul>

            </ul>
        </div>
    </div>
</template>


<script>
    // export default 向外暴露的成员，可以使用任意变量来接收? 这里为什么
    export default {
        data() {
            return {
                isLoading:false
            }
        }
    }
</script>

<style>

</style>