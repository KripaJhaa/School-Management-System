const route = require('express').Router()


route.use('/courses', require('./courses'))
route.use('/students', require('./students'))
route.use('/subjects', require('./subjects'))
route.use('/teachers', require('./teachers'))
route.use('/lectures', require('./lectures'))


module.exports = {
    route
}