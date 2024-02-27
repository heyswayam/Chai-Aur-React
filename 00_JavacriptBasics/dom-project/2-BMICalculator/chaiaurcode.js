const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = document.querySelector('#height').value;
  parseFloat(height);
  let weight = document.querySelector('#weight').value;
  parseFloat(weight);
  if (
    height === '' ||
    weight === '' ||
    height <= 0 ||
    weight <= 0 ||
    isNaN(height) ||
    isNaN(weight)
  ) {
    document.querySelector('#results').innerHTML = `Please enter valid data`;
  } else {
    let ans = (weight / ((height * height) / 10000)).toFixed(2);
    if (ans < 18.6) {
      document.querySelector(
        '#results'
      ).innerHTML = `Your BMI: ${ans}. You are under weight`;
    } else if (ans > 24.9) {
      document.querySelector(
        '#results'
      ).innerHTML = `Your BMI: ${ans}. You are over weight`;
    } else {
      document.querySelector(
        '#results'
      ).innerHTML = `Your BMI: ${ans}. You have normal weight`;
    }
  }
});
