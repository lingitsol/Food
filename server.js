const express = require("express");

const app= express();

const port = process.env.PORT || 5000;
app.get("/check",(req,res)=> {
    res.send("This is working check route");
})
app.get("/test",(req,res)=> {
    res.send("This is working");
})
app.listen(port,()=> {
    console.log("Server is running",port);
})