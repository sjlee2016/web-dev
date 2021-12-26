//@ts-check
// Formatting, Linting , Type Checking
// Formating : Prettier
// Linting:ESLint

const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log('The server is listening to port : ${PORT}')
})
