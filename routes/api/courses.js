const route = require('express').Router()
const path = require('path')
const Course = require('../../db').Course
const Batch = require('../../db').Batch


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

    Batch.findAll({
        where:{
            id:req.params.Bid
        }
    }).then((batch)=>{
        res.status(200).json(batch)
    })
   
})

route.get('/:id/batches', (req, res) => {

    let url=req.path;
    let arr=url.split('/');

    const cId=arr[1]
    Batch.findAll({
        where:{
            courseId:parseInt(cId)
        }
    }).then((batch)=>{
        res.status(200).json(batch)
    })
   
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
 * Post request on creating batch
 */
//Adding Batch

route.post('/:id/batches', (req, res) => {
    let url=req.path;
    let arr=url.split('/');
    console.log(arr)
    //odd place index will give ids
    //inserting Batch Table
    const cId=arr[1]
    const batchName=req.query.name

    const batchObj=new Batch({
        name:batchName,
        courseId:parseInt(cId)
    })

    batchObj.save()

    
    res.status(200).json({done:true})
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