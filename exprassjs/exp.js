var express = require('express')

const path =require("path")
var app = express()
port=8000;
httppaths=path.join(__dirname,"./templates")
// to set view engion
app.set('view engine','hbs')
app.set('views',httppaths)
//app.use(express.static(httppaths))
app.get("/",(req,res)=>{
    res.render('index',{name:"yusuf"})
})
app.get("/yusuf",(req,res)=>{
    res.send("data")
})


app.listen(port,()=>{
    console.log(`listning ${port}`)
})