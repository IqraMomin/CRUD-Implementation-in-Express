const express = require('express');
const port = 3000;
const app = express();

const studentsRouter = require('./routes/students');

const homeRouter = require('./routes/home');
const coursesRouter = require('./routes/courses');

app.use(express.json());
app.use("/",homeRouter);

app.use("/",studentsRouter);
app.use("/",coursesRouter);

app.listen(port,()=>{
    console.log(`Server is Up and Running on port${port}`);
})