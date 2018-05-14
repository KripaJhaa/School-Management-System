const Sequelize = require('sequelize')

const DB = new Sequelize('Dbname', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5
    },
    storage: './schoolMgmt.db'
})

/**
 *  Database Models
 * 
 */
const Course = DB.define('courses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Batch = DB.define('batches', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Subject = DB.define('subjects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Teacher = DB.define('teachers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Lecture = DB.define('lectures', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const Student = DB.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

const SubTeachMap = DB.define('sub-teach-map', {}, {
    timestamps: false
})

const StudentBatchMap = DB.define('student-batch-map', {}, {
    timestamps: false
})

/** 
 * Relationships 
 */

// One to many Courses:Batches
Course.hasMany(Batch)
Batch.belongsTo(Course)

// One to many Batches:Lectures
Batch.hasMany(Lecture)
Lecture.belongsTo(Batch)

// Subject - teacher map
Subject.hasMany(SubTeachMap)
SubTeachMap.belongsTo(Subject)
Teacher.hasOne(SubTeachMap)
Lecture.hasOne(SubTeachMap)

// many to many Students:Batches
Batch.belongsToMany(Student, {
    through: StudentBatchMap,
    timestamps: false
})
Student.belongsToMany(Batch, {
    through: StudentBatchMap,
    timestamps: false
})
//one to one Lecture:Sub-teach-map


/**
 * Database Sync
 */
DB.sync()
    .then(() => {
        force: true
        console.log('database has been synced')
    })
    .catch((err) => {
        console.log("error syncing database " + err)
    })

module.exports = {
    Course,
    Batch,
    Subject,
    Teacher,
    Lecture,
    Student,
    SubTeachMap,
    StudentBatchMap
}