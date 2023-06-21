const express = require('express')
const ejs = require('ejs')
const dotenv = require('dotenv').config()
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const app = express()
const bcrypt = require('bcrypt')
var path = require('path')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors')
const samplerouter = require('./src/routes/sample.route')
const programmingLanguagesRouter = require('./src/routes/programmingLanguages.route');

// setup the session
// the `session` function is available thru the session package
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// initialize passport
// Because passport requres session to be enabled,
// make sure to initialize passport after initialize the sessions
app.use(passport.initialize());
app.use(passport.session());

//  enable static files
app.use(express.static('src/public'))

// enable form processing
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
// app.use(
//     express.urlencoded({
//         extended: false,
//     })
// )

// set the view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))

app.get('/', (req, res) => {
    res.json({ message: 'ok' })
})

app.use('/sample', samplerouter)
app.use('/programming-languages', programmingLanguagesRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })

    return
})

app.listen(process.env.port || 3000, () => {
    console.log('server has started')
})
