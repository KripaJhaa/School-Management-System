const route = require('express').Router()
const path = require('path')
const SubTeachMap = require('../../db').SubTeachMap

// Add new Subject to the database
route.post('/:id/subjects/:Sid/teachers/:Tid', (req, res) => {
    let Lid=req.params.id
    let Sid=req.params.Sid
    let Tid=req.params.Tid
    
    const SubTeachObj = new SubTeachMap({
        subjectId:Sid,
        teacherId:Tid,
        lectureId:Lid
    });

    SubTeachObj.save();

    res.send({
        sucess: true
    })
})

module.exports = route