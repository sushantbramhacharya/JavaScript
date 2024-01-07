const course={
    coursename:"MERN Stack",
    price:"999",
    instructor:"Raman"
}

const {instructor}=course;
//takes property and directly assign as instructor
const {instructor:inst}=course;
//nameing literal as inst
console.log(instructor)
console.log(inst)

