/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * write function that will do sum for two numbers
 * @example
 * console.log(sum(1, 3)) //4
 * console.log(sum(-1, 1)) //0
 */
function sum(a, b) {
    return a + b
}

/**
 * write function that returns firstName and lastName of a given object that contains firstName and lastName
 * @example
 * const person = {
 *    firstName: "John",
 *    lastName: "Dou"
 * }
 * console.log(getFullName(person)) // John Dou
 */
function getFullName(object) {
    return object.firstName + " " + object.lastName
}

/**
 * write function that checks if number is odd
 * true if odd, false if even
 * @example
 * console.log(isOdd(2)) // false
 * console.log(isOdd(3)) // true
 * hint: try using Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder operator
 */
function isOdd(n) {
    if ((n % 2) == 0) {
        return false
    } else {
        return true
    }
}

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "three", "four"])) // one
 */
function getShortest(wordArray) {
    let short = ""
    let max = 10
    for (const element of wordArray) {
        if (element.length < max) {
            short = element;
            max = element.length
        }
    }
    return short
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {
    let answer = "g"
    for (let index = 0; index < n; index++) {
        answer = answer + "o";
    } 
    answer = answer + "gle";
    return answer
}

/**
 * write function that returns object based on the given information
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John",
 *    lastName: "Dou",
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
    return user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 * @example
 * const travel = [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}];
 * console.log(getTotalPath(travel)) //2969
 */

function getTotalPath(path) {
    let total = 0;
    for (const element of path) {
        total = total + element.distance
    }
    return total
}

/**
 * write a function that calculates a final price considering the Amount
 * reduced by discount percentage(hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
    let discount = percentage
    return function (amount) {
        return amount - (amount * (discount / 100))
    };
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe, and I am 25 years old. My best friend is Daniel'
 * referring to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    friends: ['Mike', 'Alan', 'Daniel'],
    keys() {
        for (const key in myObject) {
            console.log(key, myObject[key])
        }
    },
    call() {
        return "My name is " + this.name + " " + this.lastName + ", and I am " + this.age + " years old. My best friend is " + this.friends[2]
    },
};

module.exports = {
    sum,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject,
};
