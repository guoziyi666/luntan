<template>
    <div class="writelist">
        <ul>
            <li v-for="i in 4" :key=i>
                <el-card  class="boxCard" shadow="always">
                    <p class="title">我在等一个人</p>
                    <p class="content">
                        我在等一个人，一个愿意走进我的生命分享我的喜怒哀乐的人，一个知道我曾经无尽的等待因而更加珍惜我的人，一个也许没能参与我的昨天却愿意和我携手走过每一个明天的人，一个知道我不完美却依然喜欢我甚至连我得不完美也一并欣赏的人。
                    </p>
                    </el-card>
                <div class="interaction">
                    <el-button  icon="iconfont el-icon-my-xiaoxi" circle size="mini" @click="shuru($event)"></el-button>
                    <el-button  v-bind:class="{plain:isplain}" icon="iconfont el-icon-my-xihuan1" circle size="mini" @click="shuru($event)"></el-button>
                    <el-button  v-bind:class="{plain:isplain}" icon="iconfont el-icon-my-shoucang1" circle size="mini" @click="shuru($event)"></el-button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isplain:false
        }
    },
    methods: {
        shuru(e){         
            e.currentTarget.isplain=(e.currentTarget.isplain?false:!e.currentTarget.isplain)
            this.isplain=e.currentTarget.isplain

        }
    }
}
</script>

<style>
.interaction .el-button:focus{
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
}
.interaction .el-button{
    margin-right: 10px;
}
.plain {
    background: #ecf5ff;
    color: #409EFF !important;
    border-color: #b3d8ff !important;
}

.writelist{
    float: left;
    margin-top: 90px;
    font-size: 16px;
}
.writelist>ul{
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
}
.writelist li{
    margin-bottom: 30px;
    font-size: 16px;
}
.title{
    font-weight: 700;
    text-decoration: underline;
    font-size: 20px;
    margin: 5px 0;
}
.content{
    height: 80px;
    line-height: 26px;
    font-size: 16px;
    color: #909399;
    text-overflow: ellipsis; 
    word-break: break-all;
    text-indent: 2em;
    display: -webkit-box;
    -webkit-line-clamp: 3;  /*限制在一个块元素显示的文本的行数*/
    -webkit-box-orient: vertical;
    
}
.boxCard{
    height: 200px;
}
.el-card__body{
    width: 750px;    
    overflow: hidden;
}
.interaction{
    width: 200px;
    float: left;
    margin: -40px 0 0 45px;
}

</style>
