// var Mock = require("mockjs")

// var Random = Mock.Random
// var list = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-100': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'price': Math.ceil(Math.random() * 9),
//         'name': "@cname",
//         'addr': "@city",
//         "content": "@cparagraph"
//     }]
// })
const data=require('./data.json')
console.log(data)
// 接口的开放
module.exports=function(app){
    app.get("/api/data",function(req,res,next){
        res.send(data)
    })
}