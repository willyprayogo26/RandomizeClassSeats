const routes = require('express').Router();
const Model = require('../../models')
const User = Model.User
const Class = Model.Class

routes.get('/', (req, res) => {
    User.findAll()
    .then(user => {
        res.render("users", {
            title: `Asser's School`,
            message: "Asser's School",
            data: user,
            error: req.query.error
        })
    })
});

routes.get('/add', (req, res) => {
    res.render("users_add", {
        title: `Asser's School`,
        message: "Asser's School",
        error: req.query.error
    })
})

routes.post('/add', (req, res) => {
    User.create({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "password": req.body.password,
        "gender": req.body.gender,
        "dateBirth": req.body.dateBirth,
        "email": req.body.email,
        "role": req.body.role,
        "ClassId": req.body.ClassId
    })
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.redirect(`/users/add?error=${err.errors[0].message}`)
    })
})

routes.get('/edit/:id', (req, res) => {
    let data_kelas = null
    Class.findAll()
    .then(data => {
        data_kelas = data
        return User.findById(req.params.id)
    })
    .then(data => {
        res.render("users_edit", {
            title: `Asser's School`,
            message: "Asser's School",
            infoId: data,
            data_kelas: data_kelas,
            error: req.query.error
        })
    })
    .catch(err => {
        throw err
    })
})

routes.post('/edit/:id', (req, res) => {
    User.update({
        "firstName": req.body.firstName, 
        "lastName": req.body.lastName,
        "gender": req.body.gender, 
        "email": req.body.email, 
        "ClassId": Number(req.body.ClassId)},
        {
            where: {
                "id": req.params.id
            }
        })
    .then(data => {
        res.redirect('/')
    })
    .catch(err => {
        res.redirect(`/users/edit/${req.params.id}?error=${err.errors[0].message}`)
    })
})

routes.get('/delete/:id', (req, res) => {
    User.destroy({
        where: {
            "id": req.params.id
        }
    })
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.redirect(`/users/delete/${req.params.id}?error=${err.errors[0].message}`)
    })
})

module.exports = routes;