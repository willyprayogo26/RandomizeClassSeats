const routes = require('express').Router();
const Model = require('../../models')
const User = Model.User

routes.get('/', (req, res) => {
    req.session.destroy()
    res.redirect('/')
});

module.exports = routes;

