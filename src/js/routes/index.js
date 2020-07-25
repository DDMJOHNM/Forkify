const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const passport = require('passport');
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");


exports.appRoute = router => { 

   router.get("/",(req,res)=>{    
     res.render("index/index");
   });  
   router.get("/login",loginController.loginController);  
   router.get("/register",loginController.registerController);
  
   router.post("/loginuser",passport.authenticate('local',{ successRedirect: '/',
   failureRedirect: '/login' },function(req,res){
     console.log(res);
   }));
  
   router.post("/registeruser", async(req,res)=>{    
      try {
        const hashPassword = await bcrypt.hash(req.body.password,10)      
        let user = userModel.createUser(req.body.username,hashPassword,"token",req.body.email);
        //TODO add salt to hash 
        //TODO generate random string for token for session           
       if(user){            
          res.redirect('/login')
        }

        } catch {
          res.redirect('/register')
        }
  
    });                 
};


