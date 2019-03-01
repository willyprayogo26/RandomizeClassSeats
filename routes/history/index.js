const routes = require('express').Router();
const Model = require('../../models')
const User = Model.User
const Chair = Model.Chair
const History = Model.History

routes.get('/', (req, res) => {
    User.findAll({
        include: [{
            model: Chair
        }]
    })
    .then(data => {
        res.send(data)
        // res.render("history", {
        //     title: `Asser's School`,
        //     message: "Asser's School",
        //     histories: data,
        //     error: req.query.error
        // })
    })
    .catch(err => {
        res.send(err)
    })
});

module.exports = routes;