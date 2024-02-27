// fetch("https://api.github.com/uses/udhary")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("something went wrong", e);
//   });

let getResult = () => {
  try {
    setTimeout(async () => {
      let response = await fetch(
        "https://api.github.com/users/hiteshchoudhary"
      );
      let data = await response.json();
      console.log(data);
    }, 3000);
  } catch (error) {
    console.log("there is some error", error);
  }
};
// getResult();

let chai = new Promise((res, rej) => {
  setTimeout(async () => {
    let response = await fetch("https://api.github.com/users/hiteshchoudhary");
    let data = await response.json();
    res(data);
  }, 3000);
}); //promise is an object

chai
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("there is some error");
  });

console.log("chai");
