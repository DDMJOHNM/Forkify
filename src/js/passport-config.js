const LocalStrategy = require('passport-local').Strategy
const userModel = require('./models/userModel');
const bcrypt = require('bcrypt');

function initialize(passport){
    const authenticateUser = async(email,password,done) => {
     let user = []; 
     user = await userModel.getUserbyEmail(email);  
     
     if (user == null){           
          return done(null,false,{message: 'No User with that email'})
      }     
       try {           
           if(user && await bcrypt.compare(password,JSON.parse(JSON.stringify(user[0][0].password)))){                    
             return done(null,user,{message: 'User logged in'})   
           } else {
             return done(null,false,{message:'Passwword Incorrect'})
           }

       } catch(e){
        //console.log(e) 
        return done(e)
       }

    }

    passport.use(new LocalStrategy({usernameField: 'email'},
    authenticateUser))
    
     passport.serializeUser(function(user, done) {
         done(null,JSON.parse(JSON.stringify(user[0][0].ID)));
     });
     passport.deserializeUser(function(id, done) {
      console.log(id,"deserialize")
      //  User.findById(id, function(err, user) {
      //    done(err, user);
      //  });
     });
}

module.exports = initialize