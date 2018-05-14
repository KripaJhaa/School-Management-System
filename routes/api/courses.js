const route = require('express').Router()
const path = require('path')
const Course = require('../../db').Course


route.get('/:id/batches/:Bid/students', (req, res) => {

    res.status(200).json({})
})
route.get('/:id/batches/:Bid/teachers', (req, res) => {

    res.status(200).json({})
})

route.get('/:id/batches/:BId/lectures/:Lid', (req, res) => {

    res.status(200).json({})
})

route.get('/:id/batches/:Bid', (req, res) => {

    res.status(200).json({})
})

route.get('/:id', (req, res) => {

    const courseId=req.params.id

    Course.findAll({ 
        where:{
            id:courseId
        }       
    }).then((courses)=>{

        res.status(200).json({
            courses
        })
        
    })
})

route.get('/', (req, res) => {
    
    Course.findAll({        
    }).then((courses)=>{

        res.status(200).json({
            courses
        })

    })

    
})



/**
 *  POST requests
 */
// Add new course to database
route.post('/', (req, res) => {
    let CourseName = req.query.name

    // console.log("<> " + CourseName)

    const courseObj = new Course({
        name: CourseName
    });

    courseObj.save();
    res.send({
        sucess: true
    })
})




/**
 * PUT requests
 */
// Update Course with given course Id
route.put('/:courseId', (req, res) => {

})

/**
 * DELETE requests
 */
// Delete Course with given course Id
route.delete('/:courseId', (req, res) => {

})


module.exports = route