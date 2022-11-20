const http = require('http')

const server = http.createServer((req, res) => {
  console.log('server is running')
})

server.listen(3002)