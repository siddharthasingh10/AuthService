const UserController=require('../../controllers/user-controller'); //objects ko destructure mt krna remember 

const express=require('express')
const router=express.Router();

router.post('/signup',UserController.create)
// router.delete('/users/:id',UserController.destroy)
 
module.exports=router;// remember always