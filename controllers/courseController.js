const { Courses } = require("../mongoConfig");

const addCourse = async (req) => {
    return Courses.insertOne(res.body)
}

const getAllCourses = async (req) => {
    const { page = 1, count = 10 } = req.query;
    return Courses.find({})
        .skip((parseInt(page) - 1) * parseInt(count))
        .limit(parseInt(count))
        .sort("title", "asc");
}

module.exports = { addCourse, getAllCourses }; 