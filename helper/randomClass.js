const shuffle = require('shuffle-array')
const Model = require('../models')
const Class = Model.Class
const Chair = Model.Chair
const User = Model.User
const History = Model.History

module.exports = () => {
    Class.findAll({
        include: [
            { model: User },
            { model: Chair }
        ]
    })
    .then(data => {
        data.forEach(classroom => {
            let users = classroom.Users
            let chairs = classroom.Chairs
        
            let temp = []
            users.forEach(e => {
                temp.push(e.dataValues.id)
            });
        
            shuffle(temp)
        
            let all_data = []
            chairs.forEach((e, index) => {
                all_data.push({
                    "date": new Date(),
                    "ChairId": e.dataValues.id,
                    "UserId": temp[index],
                    "ClassId": e.dataValues.ClassId,
                    "createdAt": new Date().toLocaleDateString(),
                    "updatedAt": new Date().toLocaleDateString()
                })
            })
            History.bulkCreate(all_data)
        })
    })
    .catch(err => {
        throw err
    })
}