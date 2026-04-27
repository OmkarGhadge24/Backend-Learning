const express = require('express')
const validationRules = require('./middlewares/validation.middleware')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  const message = 'Hello, World!'
  res.status(200).json({
    message,
  })
})

app.post("/register", validationRules.registerUserValidationRules, (req, res) => {
  const { username, password, email } = req.body

  res.status(200).json({
    message: 'User registered successfully',
    data: {
      username,
      email
    }
  })
})

module.exports = app