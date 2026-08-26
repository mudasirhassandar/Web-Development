// Function definition
// function myFunction() {
//   console.log("Hello i am learning JS");
//   console.log("Function....");
// }

// //Function call
// myFunction();

//Function with parameters
// function myFunction(msg) {
//   console.log(msg);
// }

// //Function call
// let msg = "Who i am?";
// myFunction(msg);

//create a function which calculates the sum of two numbers

// function add(n, m) {
//   s = n + m;
//   return s;
// }

// let val = add(9, 10);
// console.log(val);

//<--------------ARROW FUNCTIONS-------->
//compact way of writing functions
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

// arrowSum(2, 4);

// const printHello = () => { //without arguments
//   console.log("Hello");
// };
// printHello();

//-----forEach Loop---------
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printvalue(val){
//     console.log(val);
// })
// arr.forEach((val) => {
//   //arrow function
//   console.log(val);
// });

// let arr = ["tral","pulwama","awantipora"];
// arr.forEach((val,indx,arr) => {
//   //arrow function
//   console.log(val.toUpperCase(),indx,arr);
// });

//-------map method-------

// let arr = [1, 2, 3, 4, 5, 6];
// arr.map((val) => {
//   console.log(val); //printing the values using map
// });

//make a new array using map

// let newArray = arr.map((val) => {
//   return val * 2;
// });
// console.log(newArray);
// console.log(arr);

//-----------Filter Method-------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenArr = arr.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(arr);
// console.log(evenArr);

//-----------Reduce Method----------

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((result, current) => {  //(arr[0],arr[1])
//   return result + current; //this thing stores into result
// });
// console.log(sum);

//find the largest element in te array

// let arr = [10, 56, 84, 52, 32];

// let largest = arr.reduce((prv, cur) => {
//   return prv > cur ? prv : cur;
// });
// console.log(largest);
