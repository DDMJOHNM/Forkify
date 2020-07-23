var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const userModel = require("../models/userModel");

  passport.use(new LocalStrategy(
    function(username, password, done) {
        const r = userModel.getUserByID(username,password);
       if(!r){        
           return done(null,false);
        } else {  
           return done(null,r);
        }
    }
  ));

//http://www.passportjs.org/docs/downloads/html/
//https://www.youtube.com/watch?v=JG-8Iy4H-gU