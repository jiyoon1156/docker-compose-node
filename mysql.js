const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secure',
	port: 3307,
	database: 'test'
})

connection.query(
  'SELECT * FROM users',
  (err, results) => {
    if (err) throw err
    console.log(results)
    connection.end()
  }
)
