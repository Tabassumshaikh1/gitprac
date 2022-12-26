const express=require('express')
const PORT=1000
const app=express()
// const route = express.Router()
// const mware = require('./middleware')
// route.use(mware)
// app.use('/',route)
// app.use(mstore)
// const path = require('path')
// const staticpath=path.join(__dirname,"./public")
// const path=require('path')
// const pathsave= path.join(__dirname,"./public")
// app.use(express.static(pathsave))
app.get("/",(req,res)=>{
    console.log("name is ", req.params.age);
    res.send("This is homw page")

})
// app.get("/contact",(req,res)=>{
//     res.send("This is contact page")
// // })
// console.log(pathsave);


app.listen(PORT)