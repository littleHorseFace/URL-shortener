// 以下為 原生資料
const express = require('express')
const handleBars = require('express-handlebars')
const parser = require('body-parser')
const randomNumber = require('./public/javascripts/Urlcreate')

const urlAdress = require('./models/todo')
require('./config/mongoose')

const PORT = process.env.PORT || 3000

const app = express()

app.engine('handlebars', handleBars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(parser.urlencoded({ extended: 'ture' }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let creatNum = randomNumber()
  const url = req.body.url
  if (!url) {
    return res.redirect('/')
  }
  // 以上為何要return
  const newUrl = new urlAdress({
    Url: url,
    creatNum
  })

  urlAdress.findOne({ Url: url })
    .lean()
    .then((data) => {
      console.log(data)
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
  // newUrl.save()
  //   .then(() => res.render('index', { shortUrl: creatNum }))
  //   .catch(error => console.error(error))
})

app.get('/:short', (req, res) => {
  const shortUrl = req.params.short
  console.log(shortUrl)
  urlAdress.findOne({ creatNum: shortUrl })
    .then((data) => {
      if (!data) {
        res.render('index', { alart: "check your url" })
      }
      res.redirect(data.Url)
    })
    .catch((error) => { console.error(error) })
})

app.listen(PORT, () => {
  console.log('connect susessful')
})