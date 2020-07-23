const mysql = require("mysql");
require('dotenv').config();

//replace with process.env.HOST

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'john',
    database:'nodetest'
});

connection.connect();

module.exports = connection;

