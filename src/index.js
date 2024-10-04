const express=require('express');
const {PORT}=require('./config/serverconfig')
const bodyParser=require('body-parser');
const router=express.Router();
const ApiRoutes=require('./routes/index.js');
const db=require('./models/index.js')
const {User,Role}=require('./models/index.js')




const setupAndStartServer=async()=>{
    const app=express(); 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',ApiRoutes); // never do router.use() here 
     
    if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true});
    }

const u1=await User.findByPk(4);
const r1=await Role.findByPk(2);
u1.addRole(r1);



    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })

}

setupAndStartServer();