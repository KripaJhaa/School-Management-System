const route = require('express').Router()
const path = require('path')
const Student = require('../../db').Student





/**
 * GET requests
 */
route.get('/:id/batches', (req, res) => {

    res.status(200).json({})
})

route.get('/:id', (req, res) => {

    res.status(200).json({})
})
route.get('/', (req, res) => {
    Student.findAll({})
    .then((students)=>{
        res.status(200).json(students)
    })
   
})






/**
 * POST requests
 */
// Add new student to the database
route.post('/', (req, res) => {
    const studentName=req.query.name
    console.log("<>  "+studentName)
    const obj=new Student({
        name:studentName
    })
    obj.save()

    res.send({
        sucess:true
    })
})

/**
 * PUT requests
 */
// Update student with given student Id
route.put('/:name', (req, res) => {


})

/**
 * DELETE requests
 */
// Delete student with given student Id
route.delete('/:studentId', (req, res) => {

})

module.exports = route