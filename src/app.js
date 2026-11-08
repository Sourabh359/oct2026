import express from "express";
import course from "./routes/courses.js";
import products from "./routes/products.js";

// const router=express.Router();

const app=express();

const port=3000;

// function isAuthenticated(req,res){
// res.send("you are welcome");
// }

// app.use((req,res,next)=>{
//     console.log("Time: %d",Date.now());
    
//     if(new Date().getHours() <= 1){
//         next();
//     }
//     else{
//         res.status(503).send("currently unavailable");
//     }
// });

app.use(express.static("src/public"));

app.use(course)
app.use("/products",products);

// function isAuthenticated(req,res,next){
// if(new Date().getHours() >= 17){
//     return next();
// }
// else{
//     res.status(401).send("Not Authorised")
// }

// }


// app.get("/api",isAuthenticated,(req,res)=>{
//     res.send("Hello NodeJS this is home page"); 
// });

app.get("/",(req,res)=>{
    res.send("This Is My Home Page")
});

app.get("/about",(req,res)=>{
    res.send("This Is My About Page")
});

// app.get("/contact",(req,res)=>{
//     res.status(404).send("This is my contact Page")
// })

app.get("/data",(req,res)=>{
    res.setHeader("Content-Type",'text/html');
    res.status(200).send(req.url);
})


// app.get('/search',(req,res)=>{
//   res.json( {parameters:req.query});
// })

// app.get('/product/:id/:name',(req,res)=>{
//   res.json( req.params);
// }) 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/product',(req,res)=>{
    console.log('Mila hua product data:',req.body);
    
  res.send( req.body);
}) 


// app.get('/get',(req,res)=>{
//     res.redirect("/about")
// });    



app.get("/*splat",(req,res)=>{
    console.log(req.url);
    
    res.status(404).send("Page Not Found , Please Use Correct URL")
})

app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
    
})

console.log("Hello NodeJS");

console.log("done");

