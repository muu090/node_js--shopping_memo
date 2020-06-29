const express = require('express');
const mysql = require('mysql');
const app = express();

// CSSや画像ファイルを置くフォルダを指定するコード
app.use(express.static('public'));

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: '#',
//   password: 'password',
//   database: '#'
// });


// top画面で表示
app.get('/',(req, res) => {
  res.render('top.ejs');
});

// index画面表示
app.get('/index',(req, res) => {
  res.render('index.ejs');
});

// サーバーを起動するコード
app.listen(3000);

