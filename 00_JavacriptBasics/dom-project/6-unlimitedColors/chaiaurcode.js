let randomColor = () => {
  let str = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * 16)];
  }
  return color;
};
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let colorInterval = null;

let startGenerating = () => {
  // console.log(colorInterval);
  if (!colorInterval) {
    colorInterval = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
    console.log(colorInterval);
  }
};

start.addEventListener("click", () => {
  startGenerating();
});
stop.addEventListener("click", () => {
  clearInterval(colorInterval);
  colorInterval = null;
});
