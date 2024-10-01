const UserRepository=require('../repository/user-repository')

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
}
module.exports=UserService;