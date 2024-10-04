const UserController=require('../../controllers/user-controller'); //objects ko destructure mt krna remember 
const {AuthRequestValidators}=require('../../middlware/index')
const express=require('express')
const router=express.Router();

router.post('/signup',
    AuthRequestValidators.validateUserAuth,
    UserController.create
);

router.post('/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);
router.delete('/users/:id',UserController.destroy);
router.get('/users/:id',UserController.getOne);
router.get('/isAuthenticated',UserController.isAuthenticated)
 
module.exports=router;// remember always