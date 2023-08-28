const express=require("express")
const app=express()

app.get("/", (req, res)=>{
  res.json({result: 'ok'})
})


app.listen(process.env.PORT || 3000, ()=>{
  console.log(`Servier is running port ${process.env.PORT}`)
})

