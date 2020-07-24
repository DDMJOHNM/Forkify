const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const passport = require('passport');
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

exports.appRoute = router => { 
   router.get("/login",loginController.loginController);
  
   router.get("/register",loginController.registerController);
  
   router.post("/loginuser",passport.authenticate('local',{session:false}),function(req,res){    
       res.send("User Logged In");
   });   
  
   router.post("/registeruser", async(req,res)=>{    
      try {
        const hashPassword = await bcrypt.hash(req.body.password,10)         
        const user = userModel.createUser(req.body.username,hashPassword,"token",req.body.email);
       if(user){
            console.log(user);  
            res.redirect('/login')
        }

      } catch {
        res.redirect('/register')
      }
   
    });                 
};


