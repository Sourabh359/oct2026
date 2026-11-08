import express from "express";

const course = express.Router();

course.get("/",(req,res)=>{
    res.status(200).send("Courses Home Page");
});

course.get("/javascript",(req,res)=>{
    res.status(200).send("Courses Javascript Page");
});

course.get("/react",(req,res)=>{
    res.status(200).send("Courses React Page");
});

course.get("/nodejs",(req,res)=>{
    res.status(200).send("Courses NodeJS Page");
});

course.use((req,res)=>{
    res.status(404).send("Course Not Found")
});

export default course;