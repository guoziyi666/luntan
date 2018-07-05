<template >
    <div class="sortList">
        <div>
            <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">人气作者</el-menu-item>
            <el-menu-item index="2">人气作品</el-menu-item>
            </el-menu>
        </div>
        <div class="List">
            <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">李泽言520</span>
            </el-menu-item>
          </el-menu>
        </div>
        
    </div>
</template>
<style>
.sortList{
    float: right;
    width: 300px;
    margin-top: 60px;
    font-size: 16px;
}
.sortList .el-menu-item{
    padding: 0 37px;
    font-size: 19px;
}

.List .el-menu-item span{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    color: #909399;
    font-size: 18px;

}
.List .el-menu{
    border: 0;
}
</style>


