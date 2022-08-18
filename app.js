// 以下為 原生資料
const express = require('express')
const handleBars = require('express-handlebars')
const parser = require('body-parser')

// 以下為 自己產出必要資料
const randomNumber = require('./public/javascripts/Urlcreate')
const urlAdress = require('./models/todo')
require('./config/mongoose')

const PORT = process.env.PORT || 3000

// 啟用 express 給app 變數賦予值 
const app = express()

// 載入 前端模板 >>> 再來啟用 模板引擎
app.engine('handlebars', handleBars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 在設定路由前 與 連線前 先讓app啟用中間件函數
app.use(express.static('public'))
app.use(parser.urlencoded({ extended: 'ture' }))



// 以下開始設定路由-------------------------------------------------------
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let creatNum = randomNumber()
  const Url = req.body.url
  if (!Url || !Url.includes('http')) {
    return res.render('index', { alart: '清輸入正確網址 或 不能留白' })
  }
  // 以上為何要return其實有點不太能理解 助教有看到的話 希望可以幫我回答 哈哈!!
  const newUrl = new urlAdress({
    Url,
    creatNum
  })
  urlAdress.findOne({ Url: Url })
    .lean()
    .then((data) => {
      if (data) {
        creatNum = data.creatNum
        return data
      } else {
        return newUrl.save()
      }
    })
    .then(() => {
      res.render('index', { endUrl: creatNum, headerUrl: req.headers.origin })
    })
    .catch(error => console.error(error))
})

app.get('/:short', (req, res) => {
  const shortUrl = req.params.short
  urlAdress.findOne({ creatNum: shortUrl })
    .then((data) => {
      if (!data) {
        res.render('index', { alart: "check your URL" })
      } else {
        res.redirect(data.Url)
      }
    })
    .catch((error) => { console.error(error) })
})
// 監聽 是否連上瀏覽器
app.listen(PORT, () => {
  console.log('connect susessful')
})