const headers = require('./headers')

const errorHandle = (res) => {
  res.writeHead(400, headers)
  res.write(
    JSON.stringify({
      status: 'false',
      message: '欄位填寫錯誤或無此 todo ID',
    })
  )
  res.end()
}
module.exports = errorHandle
