const express=require('express');
const {PORT}=require('./config/serverconfig')
const bodyParser=require('body-parser');
const router=express.Router();
const ApiRoutes=require('./routes/index.js');
const db=require('./models/index.js')
const setupAndStartServer=()=>{
    const app=express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',ApiRoutes); // never do router.use() here 
     
    if(process.env.DB_SYNC){
        db.sequelize.sequelize({alter:true})
    }

    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })

}

setupAndStartServer();