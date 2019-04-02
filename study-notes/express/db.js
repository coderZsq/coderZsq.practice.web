const mysql = require('mysql');


exports.base = (sql, data, callback) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'book'
    }) ;
    connection.connect();
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
    connection.end();
};