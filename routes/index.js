const routes = require('express').Router()
const findclass = require('./findclass')
const login = require('./login')
const logout = require('./logout')
const user = require('./users')
const isLogin = require('../middlewares/isLogin')

routes.use(isLogin)
routes.use('/findclass', findclass)
routes.use('/login', login)
routes.use('/logout', logout)
routes.use('/users', user)

routes.get('/', (req, res) => {
    res.render("home", {
        title: `Asser's School`,
        message: `Asser's School`
    })
});

module.exports = routes