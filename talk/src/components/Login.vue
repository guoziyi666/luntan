<template>
    <div class="login-wrapper">
            <el-dialog
                title="登录"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
                <el-form :model="data" :rules="rules" ref="searchForm">
                    <el-form-item label="用户名" label-width="120px" prop="userName">
                        <el-input v-model="data.userName" placeholder="请输入用户名" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="120px" prop="userPassword">
                        <el-input v-model="data.userPassword" placeholder="请输入密码" type="password" clearable></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button @click="handleClose" >取 消</el-button>
                        <el-button type="primary" @click="submit('searchForm')">确 定</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        
    </div>
</template>
<script>
import request from '@/methods/request.js'
  export default {
    request,
    data() {
      return {
          data:{
            userName:"",
            userPassword:""
          },
          rules:{
            userName:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            userPassword:[
                {
                    required:true,
                    message:'请输入密码',
                    trigger:'blur'
                },
                {
                    min:3,
                    max:16,
                    message:'长度在3到16位字符',
                    trigger:'blur'
                }
            ]
            
          }
      };
    },
    props:{
        dialogVisible:{
            type:Boolean,
            default:true
        },
        onCancel:{
            type:Function
        }
    },
    methods: {
      handleClose(done,formName = 'searchForm') {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.$refs[formName].resetFields();
            this.onCancel()
          })
          .catch(_ => {});
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.data.time=new Date().getTime().toString()
            var res={
                method:'get',
                url:'/login',
                params:this.data
            }
            let data={};
            request(res).then((result)=>{
                if(result.data.code===200){
                    data=result.data
                    this.onCancel()
                    this.$message({
                        type:'success',
                        message:'欢迎回来'
                    })
                }else{
                    this.$message({
                        type:'error',
                        message:'用户名或密码错误'
                    }) 
                }
            })          
          } else {         
            console.log('error submit!!');
            this.$refs[formName].resetFields();
            return false;
          }
          this.$refs[formName].resetFields();
        });
          
      }
    }
  }
</script>
<style lang="scss">
.login-wrapper .el-dialog{
    text-align: center;
    width: 450px;
}

.login-wrapper .el-input{
    width: 200px;
    margin-left: -40px;
}
.el-dialog__footer{
    text-align: center;
}
.el-message-box{
    width: 300px;
    height: 150px;
    text-align: center;
}
.el-message-box__btns {
    padding: 25px 15px 0;
    text-align: center;
}
.el-form-item__error{
    left: 25px;
}
</style>

