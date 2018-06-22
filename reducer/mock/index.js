const data=require('./data.json')
const shop=require('./shop.json')
module.exports=function(app){
    app.get("/api/list",function(req,res,next){
        res.send(data)
    })
    app.get("/api/shopping",function(req,res,next){
        res.send(shop)
    })
}