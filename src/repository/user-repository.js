const{User}=require('./../models/index');

class UserRepository{

    async create(data){
        try{
        
            const user=await User.create(data);
           
            return user; 
        }
        catch(error){
            console.log('somethinh happended wrong in User repository level')
            throw {error};
        }
        }
        async destroy(userId){
            try{
                    await User.destroy({
                        where:{
                            id:userId
                        }
                    })
                    return true;
    
            }
            catch(error){
                console.log('somethinh happended wrong in User  repository level')
                throw {error};
            }
    
        }   
        async getByID(userId){
            try{
                  const user=  await User.findByPk(userId,{
    attributes:['email','id'] //only show the email and id {we do it to not showcase even the hashed password}
                  })
                    return user;
    
            }
            catch(error){
                console.log('somethinh happended wrong in User  repository level')
                throw {error};
            }
    
        }   

}
module.exports=UserRepository;
//if you are passing as object then also fetch it as object wrna not a constructor error aayega 
