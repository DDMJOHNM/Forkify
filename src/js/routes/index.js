const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const passport = require('passport');



exports.appRoute = router => { 
   router.get("/login",loginController.loginController);
   router.post("/loginuser",passport.authenticate('local'),loginController.loginController);                  
};


