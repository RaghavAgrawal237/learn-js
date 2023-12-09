// const ar1 = [1,2,3,4,5];
// const ar2 = ar1;

// ar2[3] = 9;
// console.log(ar1);
// console.log(ar2);

// const newar1 = new Array(1,2,3,4,5);
// // const newar2 = newar1;
// const newar2 = new Array(1,2,3,4,5);

// newar2[4] = 10;
// console.log(newar1);
// console.log(newar2);

// slice(start, end exclusive)  -> returns a new array
// splice()   -> extracts the part from original array and modifies it

// Array.from()
// const ar = Array.from("Hitesh");
// console.log(ar);

// const ar1 = Array.from({name: "Dev"});  // wont work
// console.log(ar1);
// // use this

// const obj = {
//     name: "dev"
// };

// const ar2 = Array.from(Object.keys(obj));
// console.log(ar2);



// Array.isArray()

console.log(Array.isArray("123"));
console.log(Array.isArray(Array.from(["123"])));

// Array.of()

const ar = Array.of(1, 2, "split");  // creates array with given values;
console.log(ar);
