//it is a ' method ' for arrays only
//method means its a function declared in its protoype
// it doesnt returns any values
// expects a function as parameter


const coding = ["cpp", "java", "python", "javascript"];

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

//has 3 parameters(in this order)---> element, index, array
