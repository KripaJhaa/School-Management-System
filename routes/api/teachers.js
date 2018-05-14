const route = require('express').Router()
const path = require('path')
const Teacher = require('../../db').Teacher

route.get('/:id/batches', (req, res) => {
    res.status(200).json({})
})


route.get('/:id', (req, res) => {

    const teacherId=req.params.id
    Teacher.findAll({
        where:{
            id:teacherId
        }
    })
    .then((teacher)=>{
        res.status(200).json(teacher)
    })

})


route.get('/', (req, res) => {
    Teacher.findAll({})
    .then((teachers)=>{
        res.status(200).json(teachers)
    })
})




/**
 * POST requests
 */
// Add new Teacher to the database
route.post('/', (req, res) => {

    let TeacherName = req.query.name

    // console.log("<> " + CourseName)

    const TeacherObj = new Teacher({
        name: TeacherName
    });

    TeacherObj.save();
    res.send({
        sucess: true
    })
})

/**
 * PUT requests
 */
// Update Teacher with given subject Id
route.put('/:teacherId', (req, res) => {

})

/**
 * DELETE requests
 */
// Delete Teacher with given subject Id
route.delete('/:teacherId', (req, res) => {

})


module.exports = route