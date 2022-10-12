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
                    <li>•发布于：{{post.create_at | formatDate}}</li>
                    <li>• 作者：{{post.author.loginname}}</li>
                    <li>• {{post.visit_count}}次浏览</li>
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
        },
        beforeMount(){
            this.isLoading = true;
            this.getAriticleData();

        },
        methods: {
            // 定义方法使用axios获取Article的数据
           getAriticleData() {
        
            this.$http.get(` https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
             .then(res=>{
                if(res.data.success == true) {
                    this.isLoading = false;
                    this.post = res.data.data;
                }
             })
             .catch(function(err){
                console.log(err)
             })
             
           } 
        },
        
    }

</script>

<style scoped>


</style>