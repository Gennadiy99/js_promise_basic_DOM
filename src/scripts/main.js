'use strict';

const logoMate = document.querySelector('.logo');
const divResolve = document.createElement('div');

const prom1 = new Promise((resolve, reject) => {
  logoMate.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

prom1.then((respons) => {
  if (respons) {
    divResolve.innerHTML = respons;
    divResolve.classList.add('message');

    document.body.append(divResolve);
  }
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
});

prom2.catch((error) => {
  divResolve.innerHTML = error;
  divResolve.classList.add('message', 'error-message');

  document.body.append(divResolve);
});
