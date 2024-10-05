const{User,Role}=require('./../models/index');


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
        async getByEmail(emailId){
            try{
                const user=await User.findOne({where:{email:emailId}});
                if(!user) throw new Error('no user with this email')
                    return user;
            }
            catch(error){
                console.log('something wrong in fetching user by email')
                throw error;
            }
        } 
        async isAdmin(userId){
            try{
                    const user=await User.findByPk(userId);
                    const adminRole=await Role.findOne({
                        where:{
                            name:'ADMIN'
                        }
                    });
                    return user.hasRoles(adminRole);  // if user is admin or not
            }
            catch(error){
                console.log('something wrong in fetching user by email')
                throw error;  
            }
        }

}
module.exports=UserRepository;
//if you are passing as object then also fetch it as object wrna not a constructor error aayega 
