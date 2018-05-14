const route = require('express').Router()


route.use('/courses', require('./courses'))
route.use('/students', require('./students'))
route.use('/subjects', require('./subjects'))
route.use('/teachers', require('./teachers'))
route.use('/student-batch', require('./student-batch'))

module.exports = {
    route
}