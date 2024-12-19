import express from "express"
import conn from "./db/conn.js";
import { configDotenv } from "dotenv";
// import cors form "cors";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

configDotenv({
    path:'./env'
})

const app = express()
// const __dirname 
app.set('view engine' , 'ejs')
// app.use(cors)
app.use(express.static('public'));
app.use(express.json({
    limit : "16kb"
}))
app.use(express.urlencoded({
    extended:true,
    limit : "16kb"
    
}))


console.log(express.static('public'));

import menuRoutes from "./routes/menu.routes.js"


app.use('/menu',menuRoutes)


app.get('/upload',(req,res)=>{
    // console.log("you are at the main page");
   res.render("upload")
})

// app.get('/')


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/menu',(req,res)=>{
    res.render("menu")
})





app.listen(5000,()=>{
    console.log("server is running on 5000");
})




// conn()
// .then(()=>{
//     app.on('error',(error)=>{
//         throw error
//     })
//     app.listen(5000,()=>{
//         console.log("server is running on 5000");
//     })
// })
// .catch((error)=>{
//     console.log("Error while connecting DB");
//     process.exit(1);
// })




