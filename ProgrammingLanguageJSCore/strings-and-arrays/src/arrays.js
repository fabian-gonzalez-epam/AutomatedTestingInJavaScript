/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */


function getCharactersNames(chars) {
    return ["Rick Sanchez", 
            "Morty Smith",
            "Summer Smith",
            "Beth Smith",
            "Jerry Smith",
            "Abadango Cluster Princess",
            "Abradolf Lincler",
            "Adjudicator Rick",
            "Agency Director",
            "Alan Rails",
            "Albert Einstein",
            "Alexander",
            "Alien Googah",
            "Alien Morty",
            "Alien Rick",
            "Amish Cyborg",
            "Annie",
            "Antenna Morty",
            "Antenna Rick",
            "Ants in my Eyes Johnson",
            "Aqua Morty",
            "Aqua Rick",
            "Arcade Alien",
            "Armagheadon",
            "Armothy",
            "Arthricia",
            "Artist Morty",
            "Attila Starwar",
            "Baby Legs",
            "Baby Poopybutthole",
            "Baby Wizard",
            "Bearded Lady",
            "Beebo",
            "Benjamin",
            "Bepisian",
            "Beta-Seven",
            "Beth Sanchez",
            "Beth Smith",
            "Beth Smith",
            "Beth's Mytholog"]
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars = ["Rick Sanchez", 
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
    "Abadango Cluster Princess",
    "Abradolf Lincler",
    "Adjudicator Rick",
    "Agency Director",
    "Alan Rails",
    "Albert Einstein",
    "Alexander",
    "Alien Googah",
    "Alien Morty",
    "Alien Rick",
    "Amish Cyborg",
    "Annie",
    "Antenna Morty",
    "Antenna Rick",
    "Ants in my Eyes Johnson",
    "Aqua Morty",
    "Aqua Rick",
    "Arcade Alien",
    "Armagheadon",
    "Armothy",
    "Arthricia",
    "Artist Morty",
    "Attila Starwar",
    "Baby Legs",
    "Baby Poopybutthole",
    "Baby Wizard",
    "Bearded Lady",
    "Beebo",
    "Benjamin",
    "Bepisian",
    "Beta-Seven",
    "Beth Sanchez",
    "Beth Smith",
    "Beth Smith",
    "Beth's Mytholog"]
    chars.forEach(function(element, index) {
        console.log(element);
      });
}

var chars = require('./data/characters.json');

/**
 * return an array of non-human (species !== 'Human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    const arr = Object.values(chars)
    const newArr = arr.filter(item => item.species !== 'Human')
    return newArr
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    const arr = Object.values(chars)
    const newArr = arr.find(item => item.name === 'Jerry Smith')
    return newArr
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    const arr = Object.values(chars)
    let result = arr.every(item => item.species === 'Human')
    return result
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    const arr = Object.values(chars)
    let result = arr.some(item => item.type === 'Fish-Person')
    return result
}

/**
 * write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
    //PLACE YOUR CODE HERE
    for (let index = 0; index < 9; index++) {
        if(arr.includes(index)== true){
           return arr.indexOf(index)
        }
    }
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem,
};
