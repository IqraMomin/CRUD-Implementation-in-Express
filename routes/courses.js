const express = require('express');
const router = express.Router();

const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];



router.get("/courses", (req, res) => {
    const courseList = courses.map(ele => ele.name).join(",");
    res.send(`Course : ${courseList}`);
})

router.get("/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find(ele => ele.id === id);
    if (course) {
        res.send(`Course : ${course.name}`);
    } else {
        res.send("Course not found");
    }
})

module.exports = router;