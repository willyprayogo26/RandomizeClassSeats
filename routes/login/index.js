const routes = require('express').Router();
const Model = require('../../models')
const User = Model.User
const bcrypt = require('bcryptjs');

routes.get('/', (req, res) => {
    res.render("login", {
        title: `Asser's School`,
        message: "Asser's School",
        error: req.query.error
    })
});

routes.post('/', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then((data) => {
        if(data) {
            if(bcrypt.compareSync(req.body.password, data.password) && data.role == "admin") {
                req.session.user = data.id
                res.redirect('/')
            } else {
                throw new Error('Wrong Username / Password')
            }
        } else {
            throw new Error('Wrong Username / Password')
        }
    })
    .catch(err => {
        res.redirect(`/login?error=${err.message}`)
    })
})

module.exports = routes;