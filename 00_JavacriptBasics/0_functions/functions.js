let demo = function () {
  console.log("demo function");
};

// console.log(demo); //reference of funtion (like used in DOM)
// demo(); //() means functions has been executed

let user = {
  name: "cars",
  class: "s1",
  color: "yellow",
  printThis: function () {
    console.log(this);
  },
};
function demoFun() {
  let username = "swayam";
  console.log(this.username);
}
demoFun();

// ARROW FUNTIONS

// normal way (explicit way)
// In { }, we need to use return word. Inside scope, we need to use return keyword

let chai = (a, b) => {
  return a + b;
};

//return likhne ki jaroorat nhi h (implicit return)
//In (), we dont need to use return word.
let tea2 = (a, b) => a + b;

//returning an object, just wrap it around parenthesis
let tea3 = (a, b) => ({
  name: "swayam",
  ans: a + b,
});
