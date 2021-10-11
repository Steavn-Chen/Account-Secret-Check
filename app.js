const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

const users = require('./users.json')
// const { checkUser } = require('./tools/checkUser')
const { checkUser } = require('./tools/checkUser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('login')
})

// 第一種解法
// app.post('/login', (req, res) => {
//   const body = req.body
//   const { email, password } = req.body
//   console.log(body, email, password)
//   const user = users.find(item => (item.email === email && item.password === password))
//   console.log(user)
//   if (!user) return res.render('loginError')
//   return res.render('welcomePage', { user })
// })

//第二種
// app.post('/login', (req, res) => {
//   const { email, password } = req.body
//   const user = checkUser(email, password, users)
//   console.log(user)
//   if (!user) return res.render('loginError')
//   return res.render('welcomePage', { user })
// })

//第三種
// app.post('/login', (req, res) => {
//   const message = '你輸入的 Email 或 Password 錯誤'
//   const { email, password } = req.body
//   const user = checkUser(email, password,users)
//   if (user === null) return res.render('login', { message })
//   return res.render('welcomePage', { user })
// })

// 第四種
app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = checkUser(email, password,users)
  const message = user.message
  if (message === 'warning') return res.render('login', { message })
  return res.render('welcomePage', { user })
})

app.listen(port, () => {
  console.log(`Account-Secret-Check Web on http://localhost/${port}`)
})