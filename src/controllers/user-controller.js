const UserService = require('../services/user-service');
const userService = new UserService();

const create = async (req, res) => {
    try {
        
        const data={
            email:req.body.email,
            password:req.body.password
        }
        const user = await userService.createUser(data);
        return res.status(201).json({
            data: user,
            success: true,
            message: 'Successfully created a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a user',
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a user',
            err: error
        });
    }
};
const getOne = async (req, res) => {
    try {
        const response = await userService.getUser(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully feteched a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetched a user',
            err: error
        });
    }
};

const signIn=async(req,res)=>{
 
    try{
        const {email,password}=req.body;
        const response =await   userService.signIn(email,password);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully signIn a user',
            err: {}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to signin a user',
            err: error
        });
    }
}
const isAuthenticated=async(req,res)=>{
    try{
        //get the token 
        const token =req.headers['x-access-token'];
       
        // now it could happen that after authentication deletes the acc then token  should not be valid
const response =await userService.isAuthenticated(token)
        res.status(200).json({
            success:true,
            error:{},data:response,
            message:'user is authenticated and token is valid'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to authenticate a user',
            err: error
        });
    }
}
module.exports = {
    create,
    destroy,
    getOne,signIn,isAuthenticated
};
