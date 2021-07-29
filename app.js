const express = require('express')
require('dotenv').config()
const app = express()
const port = 3005
const IP_SERVER = process.env.IP_SERVER;

app.get('/', (req, res) => {
  // res.send(`Hello World from ${IP_SERVER}! Los cambios se despliegan solos 😀`)
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from('<html><body><img src="https://www.uncsa.edu/mysa/img/announcements/2021/trophy-award-confetti.jpg"></body></html>'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
