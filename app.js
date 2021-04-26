const express = require('express');
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'test',
	port: 3307
})

// connection.connect();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => { res.send('hello world'); })
app.get('/db', (req, res) => {
	const query = 'select * from users';
	connection.query(query, (err, rows) => {
		if(err){
			console.log(err)
		}else{
			res.send(rows)
		}
	});
})

app.listen(app.get('port'), () => {
	console.log(app.get('port'), '번 포트 사용중');
});
