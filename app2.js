const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json()) // body에 있는 것 중에 json만 받겠다
const port = 3000

// POST "/calc1/100/200"
// 데이터를 "주소"를 통해서 보내기 (id 같은 것을 이용해서 조회할 때 자주 사용)
app.post("/calc1/:num1/:num2", (req, res) => { // :는 변수로 취급하라는 것
  const num1 = +req.params.num1 // params라는 객체 안에 num1
  const num2 = +req.params.num2 // +를 붙이면 parseInt된다
  res.json({ result: num1 + num2 })
})


// POST /clac2?num1=100&num2=200 - ?로 시작해서 &로 이어붙이기
// db에서 where절에 붙는 조건문이 들어감
// 데이터를 "쿼ㅅ리스트링"을 통해서 보내기 (쇼핑몰에서 조건같은 거로 거를 때)
app.post("/calc2", (req, res) => { // :는 변수로 취급하라는 것
  const num1 = +req.query.num1
  const num2 = +req.query.num2
  res.json({ result: num1 + num2 })
})



// 데이터를 "바디"를 통해서 보내는 방법
app.post("/body_data", (req, res) => { // req : 요청메세지
  console.log(req.body)
  res.json({})
})

// 데이터를 "헤더"를 통해서 보내는 방법
app.post("/calc3", (req, res) => { // :는 변수로 취급하라는 것
  console.log(JSON.stringify(req.headers));
  const num1 = +req.header("My-Number1")
  const num2 = +req.header("My-Number2")
  res.json({ result: num1 + num2 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})