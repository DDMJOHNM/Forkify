connection = require("../database/db");

let res = [];

var getData = function(callback) {
    
    connection.query('SELECT * FROM nodetest.Users',function(err,rows,fields){
        if (err) {
            callback(err,null);
        }  else {
            callback(null,rows);
            connection.end(); 
        }      
       
    });
}

var  getDataByID = function(callback) {
    //check if id received from function call    
    connection.query('SELECT * FROM nodetest.Users WHERE name=? AND password=?',['john','test'],function(err,rows,fields){
        if (err) {
            callback(err,null);
        }  else {
            callback(null,rows);
            connection.end(); 
        }      
       
    });
};

exports.getUsers = () => {      
   getData(function (err, result) {
    if (err){
        return err;
    } else{         
        res.push(result);        
    }
  });    
  
  return res;
}

exports.getUserByID = (username,password) => {   
   getDataByID(function (err, result) {
    if (err){
        return err;
    } else{         
        res.push(result);        
    }
  });    
  
 }
 
 