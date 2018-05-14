const route = require('express').Router()
const path = require('path')
const Subject = require('../../db').Subject

/*
    Get Requests
*/
route.get('/:id/teachers', (req, res) => {
    
})

route.get('/:id', (req, res) => {
    const subjectId=req.params.id
    Subject.findAll({
        where:{
            id:subjectId
        }
    })
    .then((subject)=>{
        res.status(200).json(subject)
    })
})


route.get('/', (req, res) => {
    Subject.findAll({})
    .then((subjects)=>{
        res.status(200).json(subjects)
    })
})



/**
 * POST requests
 */
// Add new Subject to the database
route.post('/', (req, res) => {
    let SubName = req.query.name

    // console.log("<> " + CourseName)

    const SubjectObj = new Subject({
        name: SubName
    });

    SubjectObj.save();
    res.send({
        sucess: true
    })
})

/**
 * PUT requests
 */
// Update subject with given subject Id
route.put('/:subjectId', (req, res) => {

})

/**
 * DELETE requests
 */
// Delete subject with given subject Id
route.delete('/:subjectId', (req, res) => {

})



/**
 * POST requests
 */
// Add new Subject to the database
route.post('/', (req, res) => {

})

/**
 * PUT requests
 */
// Update subject with given subject Id
route.put('/:subjectId', (req, res) => {

})

/**
 * DELETE requests
 */
// Delete subject with given subject Id
route.delete('/:subjectId', (req, res) => {

})



module.exports = route