const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
      // button.style.backgroundColor = 'black';
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
      // button.style.backgroundColor = 'grey';
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
      // button.style.backgroundColor = 'grey';
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
      // button.style.backgroundColor = 'grey';
    }
  });
});
