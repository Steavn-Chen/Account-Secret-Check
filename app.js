const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

const users = require('./users.json')

const { checkUser } = require('./tools/checkUser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = checkUser(email, password, users)
  const message = user.message
  if (message === 'warning') return res.render('login', { message })
  return res.render('welcomePage', { user })
})

app.listen(port, () => {
  console.log(`Account-Secret-Check Web on http://localhost/${port}`)
})