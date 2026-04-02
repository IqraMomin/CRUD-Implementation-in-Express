const express = require('express');
const router = express.Router();

const students = [

    { id: 1, name: "Alice" },

    { id: 2, name: "Bob" },

    { id: 3, name: "Charlie" }

];



router.get("/students", (req, res) => {
    const studentsList = students.map(ele=>ele.name).join(",");
    res.send(`Students : ${studentsList}`);
})

router.get("/students/:id",(req,res)=>{
    const id = Number(req.params.id);
    const student = students.find(ele=>ele.id===id);
    if(student){
        res.send(`Student : ${student.name}`);
    }else{
        res.send("Student not found");
    }
})

module.exports = router;