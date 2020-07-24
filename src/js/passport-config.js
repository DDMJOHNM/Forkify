const LocalStrategy = require('passport-local').Strategy
const userModel = require('./models/userModel');
const bcrypt = require('bcrypt');

function initialize(passport){
    const authenticateUser = async(email,password,done) => {
      const user =  userModel.getUserbyEmail(email)
      console.log(user,"user")
      if (user == null){
          return done(null,false,{message: 'No User with that email'})
      }     

      try {
          if(await bcrypt.compare(password,user.password)){
             return done(null,user)   
          } else {
            return done(null,false,{message:'Passwword Incorrect'})
          }

      } catch(e){
        return done(e)
      }

    }

    passport.use(new LocalStrategy({usernameField: 'email'},
    authenticateUser))
    passport.serializeUser((user,done)=>{})
    passport.serializeUser((id,done)=>{})

}

module.exports = initialize