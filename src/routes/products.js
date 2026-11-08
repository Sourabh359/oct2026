import express from "express";

const products = express.Router();

products.use(function specific(req,res,next){
    console.log("Login user at ", Date.now());
    next();
});

products.get("/",(req,res)=>{
    console.log("Hello Product");
    res.send("Hi Product");
});

export default products;