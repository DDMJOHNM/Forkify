var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const userModel = require("../models/userModel");
   //username & apssword injected by authenticate method in the post method  
  passport.use(new LocalStrategy(
    function(username, password, done) {
         console.log(username,password,"inside ");
       const r = userModel.getUserByID(username,password);
        console.log(r,"result")
        if(r){           
            return (done,r)
        } else {
            return (done, err)
        }
       
    }
  ));

//http://www.passportjs.org/docs/downloads/html/
//https://www.youtube.com/watch?v=JG-8Iy4H-gU