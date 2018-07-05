<template>
<div>
  <el-container>
    <el-header class="header-wrapper">
        <label class="messageText">您好，请</label>
        <el-button type='text' @click="onLogin">登录</el-button>
        <el-button type='text' @click="onResign">免费注册</el-button>
        <el-button type='text' class="Right">发表作品</el-button>
    </el-header>
    <el-main class="main-wrapper">
      <div class="searchForm">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-input placeholder="输入你想知道的" v-model="inputSelect" class="input-with-select" size="large">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="用户" value="1"></el-option>
              <el-option label="内容" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form>
      </div>
      <div class="imgplay-menu">
        <div class="imgPlay">
          <el-carousel indicator-position="inside" height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3>{{ item }}</h3> -->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="menu">
          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">导航五</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">导航六</span>
            </el-menu-item>
          </el-menu>
        </div>
        <write-list></write-list>
        <sort-list></sort-list>
      </div>   
    </el-main>
  </el-container>
  <login
    :dialogVisible="this.loginVisible"
    :onCancel='onClose'
  >
  </login>
  <resign
    :dialogVisible="this.resignVisible"
    :onCancel="onClose"
    ></resign>
</div>
</template>
<script>
import sortList from '@/components/sortList'
import writeList from '@/components/writeList'
import login from '@/components/Login'
import resign from '@/components/resign'
export default {
  data(){
    return {
      loginVisible:false,
      resignVisible:false,
      select:{
      },
      formInline:{
        
      },
      inputSelect:""
    }
  },
  components:{
    sortList,
    writeList,
    login,
    resign
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    },
    onClose(){
      this.loginVisible=false
      this.resignVisible=false
    },
    onLogin(){
      this.loginVisible=true
    },
    onResign(){
      this.resignVisible=true
    }
  }
}
</script>
<style>
*{
  font-size: 16px;
}
.header-wrapper {
  border-bottom: 1px solid #eaeaea;
  line-height: 40px;
  height: 40px !important;
  padding: 0 350px;
}
.messageText {
  color: #409EFF;
  font-size: 14px;
}
.el-button {
  text-decoration: underline;
}
.Right {
  float: right;
}
.searchForm{
  width: 800px;
  /* margin: 0 auto; */
  margin-top: 20px;
}
.el-select .el-input {
  width: 100px;
}
.input{
  height: 50px;
  line-height: 50px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.imgPlay {
  width: 800px;
  float: left;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 800px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.main-wrapper{
  width: 100%;
  padding: 20px 350px;
}
.imgplay-menu{
  padding: 50px 0;
}
.menu{
  width: 300px;
  float: right;
}

.el-menu-item, .el-submenu__title {
  height: 67px;
  line-height: 67px;
}

.el-menu-item span{
  font-size: 18px;
}
</style>



