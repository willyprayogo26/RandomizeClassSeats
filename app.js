const express = require('express')
const app = express()
const CronJob = require('cron').CronJob;
const session = require('express-session')
const routes = require('./routes')
const random = require('./helper/randomClass')
const port = 3001

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let sess = {
	secret: 'abcd',
	cookie: {}
}
app.use(session(sess))

const randomize = new CronJob('30 22 * * *', function() {
	random()
});
randomize.start();

app.use('/', routes)

app.listen(port, () => {
    console.log(`Listening port: ${port}`)
})