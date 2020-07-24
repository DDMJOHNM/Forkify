connection = require("../database/db");

let res = [];


var addData = function(callback,name,password,remembertoken,email) {
     
    connection.query('INSERT INTO nodetest.Users (name,password,rememberhash,email) VALUES (?,?,?,?)',[name,password,remembertoken,email],function(err,user,fields){
        if (err) {
            console.log(err);
            callback(err,null);
        }  else {
            callback(null,user);
            console.log(user);
            connection.end(); 
        }      
       
    });
}

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
        console.log("err");  
        return err;
    } else{         
        console.log("result");   
       res.push(result);            
    }
  },username,password);    

    
    return res;

 }
 
 
exports.createUser = (name,password,remembertoken,email) => { 
 
   addData(function (err, result) {
     if (err){
         return err;
     } else{         
         res.push(result);        
     }
   },name,password,remembertoken,email);    
   
   return res;
 }
 