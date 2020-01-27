const http = require('http');
const mysql = require('mysql');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "foodplanner"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "select * from days order by id;";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
