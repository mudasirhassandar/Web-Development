// primitive data types 
//Number
let age = 34;
console.log(age);
console.log(typeof age);
// String
let fullName = "mudasir hassan" ;
console.log(fullName);
console.log(typeof fullName);
//Boolean
isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);
//Undefined
let x;
console.log(x);
console.log(typeof x);
// NULL
let y = null;
console.log (y);
console.log(typeof y);
// BigInt
let n = BigInt("123");
console.log(n);
console.log(typeof n);
//Symbol
let m = Symbol("Hello!");
console.log(m);
console.log(typeof m);
//non primitive
//object
const student = {
    fullNmae : "Mudasir Hassan",
    age : 20,
    cgpa: 8.5,
    ispass: true,
};
console.log(student);
console.log(typeof student);
console.log(student["fullNmae"]);// gives only name of student
console.log(student.age);
// update the value of object
student.age += 1;
console.log(student.age);

