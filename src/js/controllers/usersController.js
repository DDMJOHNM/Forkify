const userModel = require("../models/userModel");

exports.getUsersController = (req,res,next) =>{
    const users = userModel.getUsers();
    if(users){
        console.log(users);
    }
    res.json(users);
};