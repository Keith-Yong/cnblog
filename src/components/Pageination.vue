<!-- 分页组件 -->
<template>
    <!-- 定义页码html结构 -->
<div class="pagination">
    <button>首页</button>
    <button>«</button>
    
    <!-- 定义页面数字的按钮 -->
    <button v-for="btn in pagebtns" :key="btn">
        {{btn}} 
    </button>
    <button>»</button>
</div>
</template>
<script>
    export  default {
        name:"Pageination",
        data(){
            return {
                // 定义数组 分页展示的页码数字，
                pagebtns:[1,2,3,4,5,'.....']
            }
        }
    }
</script>

<style>

</style>