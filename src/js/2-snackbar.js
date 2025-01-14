
import iziToast from 'izitoast';

function createPromise({ delay, fulfilled }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function handlePromise(promiseInstance) {
  promiseInstance
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${value}ms`,
        position: 'topRight'
      });
    })
    .catch(value => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${value}ms`,
        position: 'topRight'
      });
    });
}

const formElement = document.querySelector('.promise-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.target.elements;

  const promise = createPromise({
    delay: formElements.delay.value,
    fulfilled: formElements.state.value === 'fulfilled',
  });

  handlePromise(promise);
});
