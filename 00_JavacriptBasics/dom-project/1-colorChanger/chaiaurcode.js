let btn = document.querySelectorAll('.button');
let body = document.querySelector('body');

btn.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
