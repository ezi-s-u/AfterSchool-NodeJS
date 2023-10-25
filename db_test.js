const mysql = require('mysql2'); // require : import

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1111',
  database: 'hozu'
})

pool.query(`SELECT 1 FROM dual`, function(err, rows, fields) { // dual : 임시 테이블
  console.log(rows)
  pool.end()
})