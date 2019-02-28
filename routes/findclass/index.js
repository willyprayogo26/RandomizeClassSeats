const routes = require('express').Router();
const Model = require('../../models')
const Class = Model.Class
const History = Model.History

routes.get('/', (req, res) => {
    let classes = null
    Class.findAll()
    .then(data => {
        classes = data
        return History.findAll()
    })
    .then(data => {
        res.send(classes)
        // res.render("findclass", {
        //     title: `Asser's School`,
        //     message: "Asser's School",
        //     classes: classes,
        //     history: data,
        //     error: req.query.error
        // })
    })
    .catch(err => {
        res.send(err)
    })
});

routes.post('/', (req, res) => {
    res.send(req.body.class)
})

module.exports = routes;