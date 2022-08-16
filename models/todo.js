const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  Url: {
    type: String,
    require: true
  },
  creatNum: {
    type: String,
    require: true
  }

})

module.exports = mongoose.model('urladress', todoSchema)