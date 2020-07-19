connection = require("../database/db");

exports.getUsers = () => {      
    
    let resultArray = [];

    connection.query('SELECT * FROM nodetest.Users',function(err,rows,fields){
        if (err) throw err        
           
        console.log(rows);    

        connection.end(); 
    });

    
}

