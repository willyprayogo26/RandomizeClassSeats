const routes = require('express').Router();
const Model = require('../../models')
const Class = Model.Class
const History = Model.History

routes.get('/', (req, res) => {
    Class.findAll()
    .then(data => {
        res.render("findclass", {
            title: `Asser's School`,
            message: "Asser's School",
            classes: data,
            error: req.query.error
        })
    })
    .catch(err => {
        res.send(err)
    })
});

routes.post('/show', (req, res) => {
    History.getRandomClass(req.body.class)
    .then(data => {
        res.render('classroom', {
            title: `Asser's School`,
            message: "Asser's School",
            seats: data
        })
    })
})

module.exports = routes;