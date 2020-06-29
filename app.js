const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// サーバーを起動するコードを貼り付けてください
app.listen(3000);

