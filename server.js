const express = require('express')
const ejs = require('ejs')
const clc = require('cli-color')
const onoff = require('onoff')

const app = express()
const gpio = onoff.Gpio

const led1 = new gpio(6, 'out')
const led2 = new gpio(13, 'out')

app.set('views', __dirname)
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.render('index.html', { msg:"hello" })
})

app.get('/ledon', (req, res, next) => {
    led1.writeSync(1)
    led2.writeSync(1)
    res.send('led on - ok')
})

app.get('/ledoff', (req, res, next) => {
    led1.writeSync(0)
    led2.writeSync(0)
    res.send('led off - ok')
})

app.listen(8080, function() {
    console.log(clc.green('Ready webserver'))
})

