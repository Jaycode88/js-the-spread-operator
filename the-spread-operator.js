/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("first array", arr1)
console.log("second array", arr2);
          
arr2.push(4); // Add item to second array
console.log("ammended second array", arr2)
console.log(arr1, "see the ammendment has also been pushed to arr1 this is because arr2 is direct link to arr1")

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3]; //spreads the values from arr3 into arr4

arr4.push(7); // Add item to fourth array
console.log("Third Array", arr3)
console.log(arr4, "see ammended arr4 but not arr3.")

// Copying an object   n.b is similar too an array

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
console.log("first object", obj1)
console.log("second object", obj2)
let obj3 = {...obj1, b: 5}; //this copies obj1 but replaces the value for b: 
console.log("third object", obj3) 

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5)