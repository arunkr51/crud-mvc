const express=require("express")
const path=require("path")
const hbs=require("hbs")

const Router=require("./routes/Router")
require("./db-connect")

const app=express()
app.set("view engine", "hbs")
 
app.use("/",Router)

hbs.registerPartials(path.join(__dirname+"/views/partials"))

app.listen(8000, ()=>{
    console.log("server is running at http://localhost:8000/")
})

