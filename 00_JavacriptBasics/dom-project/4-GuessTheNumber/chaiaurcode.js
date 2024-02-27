let number = Math.floor(Math.random() * 100 + 1);

let form = document.querySelector(".form");
const submit = document.querySelector("#subt");
let remainingGuess = parseInt(document.querySelector(".remainingGuess").innerHTML);
let prevGuesses = document.querySelector(".prevGuesses");
const startOver = document.querySelector('.resultParas');
const userInput = document.querySelector('#guessField');
const p = document.createElement('p');
// console.log(remainingGuess);

let playGame = true;
if (playGame) {
  form.addEventListener("submit", (e) => {
    // console.log(e.target[0].value);
    e.preventDefault();
    let guessNumber = e.target[0].value; //knew target[0] after console.log(e)
    // console.log(guessNumber);
    checkGuess(guessNumber);
  });
}
const checkGuess = (num) => {
  console.log(num);
  if (num < 0 || num > 100 || isNaN(num)) {
    alert("Enter a valid number");
  } else {
    displayData(num);
  }
};

const displayData = (guessNumber) => {
  if(remainingGuess<=0){
    endGame();
  }
  else if (guessNumber > number) {
    document.querySelector(".lowOrHi").innerHTML = "enter a smaller number";
    prevGuesses.innerHTML += `${guessNumber},`;
  } else if (guessNumber < number) {
    document.querySelector(".lowOrHi").innerHTML = "enter a bigger number";
    prevGuesses.innerHTML += `${guessNumber},`;
  } else {
    document.querySelector(
      ".lowOrHi"
    ).innerHTML = `You guessed the number in ${remainingGuess} guesses`;
    playGame = false;
    endGame();
  }
  document.querySelector(".remainingGuess").innerHTML = remainingGuess--;
};
const endGame = ()=>{
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  submit.setAttribute('disabled', '')
  
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game: nuumber was ${number}</h2>`;
  startOver.appendChild(p);
  newGame();
}
const newGame=()=>{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    document.querySelector(".remainingGuess").innerHTML = "10";
    prevGuesses.innerHTML="";
    remainingGuess = 10;
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled', '')
    startOver.removeChild(p);

    playGame = true;
  });
}