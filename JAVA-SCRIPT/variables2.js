// key words of js
// var -> used befor 2015 now we dont use this keyword. Global scope
var age = 25;
var age = 35;
console.log(age);
// in var we can redeclared the varaible that is why we ignore this
//let-> in this we can only update the variable. Block scope{}
let item = 35;
item = 23;
console.log(item);

//const-> nither we update nor we redeclared. Block scope{}

const pi = 3.14;
console.log(pi);
// we can also declared variables like:
let a; // it does not work for constants
a = 10;
console.log(a);
