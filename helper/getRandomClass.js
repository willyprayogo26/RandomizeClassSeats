const Model = require('../models')
const History = Model.History

module.exports = () => {
    History.findAll({
        where: {
            "createdAt": new Date().toLocaleDateString()
        }
    })
}