//引入express模块
var express = require('express')

//创建路由
var router = express.Router();

//添加路由，做出响应
router.get('/',function(req,res){
    res.send("register page")
    res.end();
})

router.get('/register',function(req,res){
    res.send("register page")
    res.end();
})

module.exports=router;
