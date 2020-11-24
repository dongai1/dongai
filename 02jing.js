//导入模块
const http = require("http");
const fs = require("fs");
const path = require("path");

//创建web实例
const server = http.createServer();

//监听request请求 

server.on("request" , (req,res) =>{
    let pathname = req.url;
    pathname = pathname === "/" ? "/index.html" : pathname;
    let filename = path.join(__dirname , 'public' , pathname);
    fs.readFile(filename , (err,data) =>{
        if(err){
            res.statusCode = 500;
            res.end('dongai');
        }else{
            res.end(data);
        }
    })

})

//启动服务
server.listen(8080,() =>{
    console.log("server is running at http://127.0.0.1:8080");
})