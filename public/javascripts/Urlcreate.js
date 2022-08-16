const create = function () {
  let code = ''

  const number = '123456789'
  const tolowercase = 'abcdefghijklmnopqrstuvwxyz'
  const toupcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomcode = number + tolowercase + toupcase

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 61)
    const Word = randomcode.split('')
    const randomWord = Word[random]
    code += randomWord
  }
  return code
}
module.exports = create