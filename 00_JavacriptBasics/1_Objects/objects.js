// ##Two method to declare objects
// 1- using new (creates singleton)
// const car = new Object({
//     name: "ferrari",
// });

// 2- normally (object literals)
const obj1 = { 1: "a", 2: "b" };
const obj2 = { "car": "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };


let obj = { ...obj1, ...obj2 }; //spread operator
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.hasOwnProperty(obj1));

//destructuring of object and array
const demoObj = [
  {
    course: "js in hindi",
    coursePrice: "free",
    courseInstructor: "hitesh choudhary",
  },
  {
    course: "js eng",
    coursePrice: "paid",
    courseInstructor: "hitesh choudhary",
  },
];
const [{ coursePrice: price }, b] = demoObj;
// console.log(b.courseInstructor);

console.log(obj2["car"]);
