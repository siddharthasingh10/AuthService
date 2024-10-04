const validateUserAuth=(req,res,next)=>{
// same middleware can be used for the signup or the login
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:'something went wrong',
            err:'email or password is missing'

        })

    }
    next();
}
module.exports={
    validateUserAuth
}