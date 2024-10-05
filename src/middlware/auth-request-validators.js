// we are using middleware to validate the upcoming data from req.body like id its okay to give a response on it or not

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
const validateIsAdminRequest=async(req,res,next)=>{

    if(!req.body.id){
        res.status(400).json({
            success:false,
            data:{},
            err:'user id is not given',
            message:'something went wrong'
        })
    }
    next();
}
module.exports={
    validateUserAuth,
    validateIsAdminRequest
}