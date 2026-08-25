//For a given array with marks of students find the average marks of the entire class

// let marks = [98, 67, 54, 90, 87, 73];
// let totalMarks = 0;
// for (let i = 0; i < marks.length; i++) {
//   totalMarks += marks[i];
// }
// for (let val of marks) {
//   totalMarks += val;
// }
// console.log("Average = ", totalMarks / marks.length);

//------------------Q2----------------------
//FOR A GIVEN ARRAY WITH PRICES OF FIVE ITEMS .ALL THE ITEMS HAVE AN OFFER OF 10%  OFF ON THEM . CHANGE THE ARRAY TO STORE THE FINAL PRICE AFTER THE APPLYING OFFER

let originalPrices = [250, 645, 300, 900, 50];
let offerPrice = [];
for (let i = 0; i < originalPrices.length; i++) {
  offerPrice[i] = originalPrices[i] - originalPrices[i] * (10 / 100);
}
console.log(offerPrice);
