const express=require('express');
const {PORT}=require('./config/serverconfig')
const bodyParser=require('body-parser');
const router=express.Router();
const ApiRoutes=require('./routes/index.js');

const setupAndStartServer=()=>{
    const app=express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',ApiRoutes); // never do router.use() here 


    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })

}

setupAndStartServer();