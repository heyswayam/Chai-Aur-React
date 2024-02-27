let textInput = document.querySelector("#insert");

window.addEventListener("keypress", (e) => {
  textInput.innerHTML = `'${e.key === " " ? "Space" : e.key}' key was pressed`;
});

let car = () => {
  console.log("hello");
  return;
};
