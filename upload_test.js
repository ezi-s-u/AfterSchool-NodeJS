const express = require('express')
const multer = require('multer') // body 에 있는 파일을 추출할 수 있도록 하는

const port = 3000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename : function (req, file, cb) {
    console.log(file.originalname)
    console.log(file.mimetype)
    const filename = Date.now() + "_" + file.originalname
    cb(null, filename)
  }
})

const upload = multer({ storage }) // { storage : storage }
const app = express()

app.post("/upload", upload.single("my_file"), (req, res) => { // 파일 하나만 받기 때문에 single, file
  console.log(req.file)
  console.log(req.body)
  res.send("ok")
})

app.post("/photos", upload.array("photo"), (req, res) => { // 파일 여러 개 받기 때문에 array, files
  console.log(req.files)
  res.send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})