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

var  getDataByID = function(callback,username,password) {

    connection.query('SELECT * FROM nodetest.Users WHERE name=? AND password=?',[username,password],function(err,rows,fields){        
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
  },username,password);    

    
    return res;

 }
 
 