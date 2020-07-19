usersController = require("../controllers/usersController");

exports.appRoute = router => { 
   router.get("/users", usersController.getUsersController);          
};