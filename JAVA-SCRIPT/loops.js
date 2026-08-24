// { FOR LOOP

// Print hello world 5 times
// for (let i = 0; i < 5; i++) {
//   console.log("Hello World");
// }

// Calculate sum of 1 to n
// let n = prompt("Enter the Number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("Sum from 1 to", n, "=", sum);

//Infinite LOOP
// for(let i=1;i>0;i++){
//     console.log("i = ",i);
// }

//}

//{ WHILE LOOP

// let i=1
// while(i<=5){
//     console.log("Hello");
//     i++;
// }
//}

//{ DO-WHILE LOOP

// let i = 1;
// do {
//   console.log("Hello");
//   i++;
// } while (i <= 5);
//}

//{ For of LOOP

// let str ="mudasirhassan"
// for(let i of str){
//   console.log("i = ",i);
// }

// calculate the size of string
// let size = 0;
// let str = "JAVASCRIPT";
// for (let i of str) {
//   size++;
// }
// console.log("Size of string =", size);
//}

//{ FOR-IN-LOOP

let student = {
  name: "Mudasir hassan",
  rollno: 72,
  age: 21,
  cgpa: 8.3,
};
for (let key in student) {
  console.log("key =", key, "->Value->", student[key]);
}
//}
