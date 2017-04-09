var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'mailing'
});

connection.connect();

connection.query('Show databases', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();