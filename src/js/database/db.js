const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'john',
    database:'nodetest'
});

connection.connect();

module.exports = connection;

