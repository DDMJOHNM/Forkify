var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const userModel = require("../models/userModel");

  passport.use(new LocalStrategy(
    function(username, password, done) {
       const r = userModel.getUserByID(username,password);
       if(!r){    
          //get user id from cookie 
           return done(null,false,{message:'Password or Username Incorrect'});
        } else {  
           return done(null,{user:r.ID},{message:'User successfully logged in'});
        }
    }
  ));

//http://www.passportjs.org/docs/downloads/html/
//https://www.youtube.com/watch?v=JG-8Iy4H-gU