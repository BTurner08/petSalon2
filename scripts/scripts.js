//var colors = ["white","black","blue","green"]

//for (var i = 3; i < colors.length; i=i+2)
//{
//    console.log(colors[i])
//}
var globalVariable = "hi im a global variable"; // this is a global variable
function myFunction(){
    var localVariable = "hi im a local variable"
    console.log(globalVariable)
    console.log(localVariable)
}
myFunction();

//object literal
let student1 ={
    name: "Blake",
    email: "Blake@gmail.com",
    grades101: 10,
    grades102: 8,
    favSport: "Basketball",
}
let student2 ={
    name: "Kevin",
    email: "Kevin@gmail.com",
    grades101: 8,
    grades102: 10,
    favSport: "Futbol",
}
let students = [student1, student2];
console.log(students)
console.log(student1.name); //try to get the email address from the students and console log it
console.log(student1.email, student2.email);

//display the sum of all the grades of the 101
function getSum(){
    let grades = 0;
    for(let i = 0;i<2;i++){
        grades=grades+students[i].grades101
    }
    console.log(grades)
}
getSum();