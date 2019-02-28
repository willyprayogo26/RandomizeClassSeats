const app = require('express')()
const port = 3001
const express = require('express')
// const routes = require('./routes')
// const view = require('./views/classSeats')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use('/', routes)
app.get('/', (req,res) =>{
    res.render('./classSeats')
})
app.get('/home', (req,res) =>{
    res.render('./home')
})

app.listen(port, () => {
    console.log(`Listening port: ${port}`)
})