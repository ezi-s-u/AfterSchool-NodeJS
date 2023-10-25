const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/hello", (req, res) => {
  res.header("Content-Type", "text/plain") // Content-type : body가 뭐가 들어있는지
  res.send("<h1>Hello<h1>")
})

app.get("/data", (req, res) => {
  res.json({name : "John", age : 20}) // json을 보내는 send
})



// GET, POST, PUT, PATCH, DELETE
let array = []

app.get("/array", (req, res) => {
  res.json(array)
  // res.json(1) 이나 res.json("Hello") 도 된다
})

app.post("/array", (req, res) => {
  array.push({content : array.length + 1})
  res.json({result : "ok"}) // body로 감
})

app.delete("/array", (req, res) => {
  array = []
  res.json({result : "ok"}) // body로 감
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})