const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const port = 3002
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")));


app.use('/sendtome', require('./routes/sendToMe'))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
    console.log(`app is live on ${port}`)
  })

  $.ajax({
    url: 'your-heroku.com',
    type: 'POST',
    headers: {'Accept': 'application/json;'},
    data: {
    "subject": "subject",
    "message": "some body text"
    },
    }).done(function (res) {
      console.log(res); // it shows your email sent message.
    });