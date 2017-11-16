var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var ejs = require('ejs')
var randomstring = require('randomstring')
var app = express()
var PORT = process.env.PORT || 9674

mongoose.connect("mongodb://localhost/DB_NAME", (err) => {
    if (err) {
        throw err
    }
    else {
        console.log('DB Connect')
    }
})

var schema = mongoose.Schema
//디비 연동코드

var UserSchema = schema({
    username: {type: String},
    id: {type: String},
    password: {type: String},
    gender: {type: Boolean},
    birthday: {type: String},
    phoneNumber: {type: String}
})

var User = mongoose.model('user', UserSchema)
//스키마 생성?
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'html')
app.set('views', 'templates')
app.engine('html', require('ejs').renderFile);
app.use(express.static('static'))

app.listen(PORT, () => {
    console.log('Server Running At ' + PORT + ' Port!')
})

app.get('/register', (req, res) => {
    res.render('register.html')
})
app.get('/login', (req, res) => {
    res.render('index.html')
})
app.get('/',(req,res) =>{
    res.redirect('/login')
})
app.post('/register', (req, res) => {
    var body = req.body
    console.log(body)
    User.findOne({
        id: body.id
    }, (err, data) => {
        if (err) {
            throw err
        }
        else if (data) {
            res.send(404, 'Already In Database')
        }
        else {
            var saveuser = new User({
                username: body.username,
                id: body.id,
                password: body.password,
                gender: body.gender,
                birthday: body.birthday,
                phoneNumber: body.phoneNumber
            })
            saveuser.save((err) => {
                if (err) {
                    throw err
                }
                else {
                    res.send(200, body.username)
                }
            })
        }
    })
})

app.post('/login', (req, res) => {
    var body = req.body
    console.log(body)
    User.findOne({
        id: body.id,
        password: body.password
    }, (err, data) => {
        if (err) {
            throw err
        }
        else if (data) {
            res.send(200, data.username)
        }
        else {
            res.send(404, 'User Not Founded')
        }
    })
})
