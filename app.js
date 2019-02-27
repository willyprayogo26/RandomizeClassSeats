const app = require('express')()
const port = 3001
const routes = require('./routes')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)

app.listen(port, () => {
    console.log(`Listening port: ${port}`)
})