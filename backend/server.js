const express= require("express")
const cors= require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.get("/api/get",(req,res)=>{
    res.status(200).json({
        succes:true,
        message:"ok success"
    })
})

app.listen(5001,()=>{
    console.log("server is running in port 5001")
    
})
