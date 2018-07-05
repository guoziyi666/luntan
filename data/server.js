var express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var cors=require('cors')
var app=express()
app.use(cors());
app.use(bodyParser.json())
mongoose.Promise=global.Promise;

mongoose.connect("mongodb://localhost:27017/people",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("ok")
    }
})
var user=mongoose.model("user",{
    userName:String,
    userPassword:String
})
app.get("/login",function(req,res){
    var params={
        userName:req.query.userName,
        userPassword:req.query.userPassword
    }
    user.findOne(params).then((data)=>{
        if(data!=null){
            return res.json({ code: 200, message:"请求成功",data})
        }else{
            return res.json({ code: 404, message:"未找到",data})
        }       
    },(err)=>{
    })
})
app.get("/resign",function(req,res){
    var params={
        userName:req.query.userName,
        userPassword:req.query.userPassword
    }
    user.findOne({userName:params.userName}).then((data)=>{
        if(!data){
            user.insertMany(params).then((data)=>{
                return res.json({ code: 200, message:"请求成功",data})
            },(err)=>{
            })
        }else{
            return res.json({ code: 300, message:"用户名已存在",data})
        }
    })
    
})
app.listen(3000)