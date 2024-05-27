const { promiseResolve, promiseReject } = require('./promises');
const { getDogs, getCats, getBirds } = require('../utils/utilPromises');
/**
 * Materials:
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 *
 */
async function asyncPromiseResolve() {
  //PLACE YOUR CODE HERE:
  let firstResult = await promiseResolve();
  firstResult = firstResult + " with async await";
  return firstResult;
}

/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */
async function asyncPromiseReject() {
  //PLACE YOUR CODE HERE:
  let result
  try {
    result = await promiseReject();
  } catch (error) {
    result = error + " with async await";
    return result;  
  }
  
  
}

/**
 * TASK-3:
 * 1. Get the results array of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file using await syntax;
 * 2. Modify the array ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', ''BIRDS]
 * 3. Return the modified array
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 */
async function asyncPromiseAll() {
  //PLACE YOUR CODE HERE:
  return Promise.all([await getDogs(), await getCats(), await getBirds()])
  .then(results => {
      results[0] = results[0].toUpperCase();
      results[1] = results[1].toUpperCase();
      results[2] = results[2].toUpperCase();

      return results;
  })
  .catch(error => {
      console.error("An error occurred:", error);
  });
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
};
