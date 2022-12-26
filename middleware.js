const mware = (req,res,next)=>{
    req.send("This is mware calling")
    next()
}
module.exports=mware