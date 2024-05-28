const { getDogs, getCats, getBirds, firstPromise, secondPromise } = require('../utils/utilPromises');

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  //PLACE YOUR CODE HERE:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, 1000);
  });
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  //PLACE YOUR CODE HERE:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected!");
    }, 1000);
  });
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  //PLACE YOUR CODE HERE:
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  });
}

fullPromise(true)
    .then((data) => {
      console.log(data);
    })

fullPromise(false)
  .catch((data) => {
    console.log(data);
  })


/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function (please do NOT use async/await)
 */

function promisesChaining() {
  let chainingResult = '';

  //PLACE YOUR CODE BETWEEN THIS LINE:
  return firstPromise()
    .then(result => {
      chainingResult = result  ;
      return secondPromise();
    })
    .then(finalResult => {
      chainingResult = chainingResult + " " + finalResult;
      return chainingResult;
    })
    .catch(error => {
      chainingResult =  error;
    });
  
  //AND THIS ONE
}

/**
 * Task-5:
 * 1. Implement a function getAnimals() that will return the result of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * 2. Please use .then() operator
 * 3. Convert ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', 'BIRDS']
 * getAnimals() -> ['DOGS', 'CATS', 'BIRDS']
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * do NOT use async/await syntax here
 */

function getAnimals() {
  //PLACE YOUR CODE BETWEEN THIS LINE:
  return Promise.all([getDogs(), getCats(), getBirds()])
  .then(results => {
      results[0] = results[0].toUpperCase();
      results[1] = results[1].toUpperCase();
      results[2] = results[2].toUpperCase();

      return results;
  })
  .catch(error => {
      console.error("An error occurred:", error);
  });
  //AND THIS ONE
}

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
};
