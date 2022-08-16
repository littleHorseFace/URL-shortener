const urladress = require('../../models/todo')
const randomNumber = require('../../public/javascripts/Urlcreate')
const db = require('../../config/mongoose')

db.once('open', () => {
  urladress.create({
    Url: 'https://www.google.com.tw/?hl=zh_TW',
    creatNum: randomNumber()

  })
  console.log('seed connect is ok')
})