const express=require('express');
const {PORT}=require('./config/serverconfig')
const bodyParser=require('body-parser')


const setupAndStartServer=()=>{
    const app=express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })

}

setupAndStartServer();