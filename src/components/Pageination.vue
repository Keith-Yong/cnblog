<!-- 分页组件 -->
<template>
    <!-- 定义页码html结构 -->
<div class="pagination">
    <button>首页</button>
    <button>«</button>
    
    <!-- 定义页面数字的按钮 -->
    <!-- 动态绑定点击按钮的样式-->
    <!-- 点击事件调用函数changeBtn用于 点击后使当前页码==被点击页码 -->
    <!-- 将btn作为参数传入 -->
    <button v-for="btn in pagebtns" :key="btn" 
    :class="[{currentPage:btn==currentPage},'pagebtn']"
  
    @click="changeBtn(btn)">
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
                pagebtns:[1,2,3,4,5,'.....'],
                //  定义一个变量，描述当前点击的页码按钮
                currentPage:1
            }
        },
        methods: {
            // 定义函数currentPage，使点击后变量==点击的标签页码
            changeBtn(page){
                // 这里是赋值不是等于号
                this.currentPage = page
                // 点击页码按钮，使展示的页码数字发生变化,页面只展示5页

                // 页码为数组的最后一个，则移除第一个元素，添加最后一个元素
                if(page == this.pagebtns[4]){
                    this.pagebtns.shift(); //移除第一个元素
                    this.pagebtns.splice(4,0,this.pagebtns[3]+1); //添加最后一个元素
                    // 页码为数组的第一个且不为1，则移除最后一个元素，添加第一个元素
                }else if(page == this.pagebtns[0]&&page !=1){
                    this.pagebtns.unshift(this.pagebtns[0]-1);  //先在第一个位置加一个
                    this.pagebtns.splice(5,1);//移除最后一个数字
                }


                


            }
        }
    }
</script>

<style scoped>
 .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>