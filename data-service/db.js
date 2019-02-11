var mysql = require('mysql');
const DB_INFO = require('./config');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : DB_INFO.username,
    password : DB_INFO.password,
    database : 'fifadreamteam'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;