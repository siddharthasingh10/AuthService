'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{
        through:'User_Role'
      })

    }
  }
  User.init({
    email: {type:DataTypes.STRING,
      allowNull:false,
      unique:true,
     validate:{isEmail:true}
    },
    password: {type:DataTypes.STRING ,
      allowNull:false,
      validate:{
        // basic validation provided by sequelize
        len:[4,50]
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  }
);
/// bcrypting and storing the password //
const saltRound=10;

// beforeCreate is used to manipulate the upcoming data before storing it into the db

User.beforeCreate(async(user)=>{
  const SALT =  await bcrypt.genSalt(saltRound);
  const encryptedPassword=bcrypt.hashSync(user.password,SALT) //encrypted the pass
  user.password=encryptedPassword; //change the user's pass with the encrytped one
 
})

  return User;
};