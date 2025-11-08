'use strict';

const logoMate = document.querySelector('.logo');
const divResolve = document.createElement('div');

const prom1 = new Promise((resolve, reject) => {
  logoMate.addEventListener('click', () => {
    resolve('Promise was solved!');
  });

  setTimeout(reject, 5000, 'Promise was denied!');
});

prom1.then((respons) => {
  if (respons) {
    // const divResolve = document.createElement('div');

    divResolve.innerHTML = respons;
    divResolve.classList.add('message');

    document.body.append(divResolve);
  }
});

prom1.catch((error) => {
  // const divResolve = document.createElement('div');

  divResolve.innerHTML = error;
  divResolve.classList.add('message', 'error-message');

  document.body.append(divResolve);
});
