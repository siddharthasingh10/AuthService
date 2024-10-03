const jwt=require('jsonwebtoken');
const {JWT_KEY}=require('../config/serverconfig');
const bcrypt=require('bcrypt')
const UserRepository=require('../repository/user-repository');


class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async createUser(data){
        try{
            
                const user= await this.userRepository.create(data);
                return user;
        }
        catch(error){
            console.log('something wrong happend at service user layer')
            throw {error}
        }
    }
    async deleteUser(userId){
        try{
               const response= await this.userRepository.destroy(userId);
                return response;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
    async getUser(userId){
        try{
               const response= await this.userRepository.getByID(userId);
                return response;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
    createToken(user){
        try{
            const token=jwt.sign(user,JWT_KEY,{expiresIn:'1d'})
            return token;
        }catch(error){
            console.log('something wrong in creating token')
            throw error;

        }
       
    }
    verifyToken(token){
        try{
                const response=jwt.verify(token,JWT_KEY);
                return response;
        }
        catch(error){
            console.log('soething wrong in verifying token',error)

        }

    }
    verifyPassword(userInputPlainPassword,encrytpedPassword){

        try{
            const response=bcrypt.compareSync(userInputPlainPassword,encrytpedPassword); 
            return response;

        }catch(error){
            console.log('something wrong in checking password')
            throw error;
            
        }

    }
    signIn(email,plainPassword){
      //  1. fetch the user based on email entered
        const user=this.userRepository.getByEmail(email);
    // 2/ compare incoming plain password with stored encrypted pass
    const matchPassword=this.verifyPassword(plainPassword,user.password);
    if(!password){
        console.log('incorrect pass')
        throw new Error('incorrect pass')
    }

    // if password get matched
    const newJwt=this.createToken({email:user.email,id:user.id})
    return newJwt; 

    }
}

module.exports=UserService;