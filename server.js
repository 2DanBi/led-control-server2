const express = require('express')
const ejs = require('ejs')
const clc = require('cli-color')

const app = express()

app.set('views', __dirname)
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.render('index.html', { msg:"hello" })
})

app.listen(8080, function() {
    console.log(clc.green('Ready webserver'))
})

