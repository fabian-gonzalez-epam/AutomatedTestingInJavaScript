const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const {
    sum,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject
} = require('../src');
const {evenValues, oddValues, fullNames, expectedKeys} = require('./data');

describe('sum', () => {
    it('should return 3 if passing 1 and 2', () => {
        expect(sum(1, 2)).to.equal(3);
    });

    it('should return 1 if passing -1 and 2', () => {
        expect(sum(-1, 2)).to.equal(1);
    });

    it('should return -3 if passing -1 and -2', () => {
        expect(sum(-1, -2)).to.equal(-3);
    });
});

describe('getFullName', () => {
    fullNames.forEach(name => {
        const [firstName, lastName] = name.split(' ');

        it(`should return "${name}" if passing "${firstName}" and "${lastName}"`, () => {
            expect(getFullName({firstName, lastName})).to.equal(name);
        });
    });
});

describe('isOdd', () => {
    evenValues.forEach(value => {
        it(`should return false if passing ${value}`, () => {
            expect(isOdd(value)).to.equal(false);
        });
    });

    oddValues.forEach(value => {
        it(`should return true if passing ${value}`, () => {
            expect(isOdd(value)).to.equal(true);
        });
    });
});

describe('getShortest', () => {
    it('should return "one" if passing ["one", "two", "three"]', () => {
        expect(getShortest(['one', 'three', 'four'])).to.equal('one');
    });

    it('should return "x" if passing ["one", "two", "three", "x"]', () => {
        expect(getShortest(['one', 'two', 'three', 'x'])).to.equal('x');
    });
});

describe('getGoogle', () => {
    it('should return "goooooogle" if passing 6', () => {
        expect(getGoogle(6)).to.equal('goooooogle');
    });

    it('should return "gooogle" if passing 3', () => {
        expect(getGoogle(3)).to.equal('gooogle');
    });
});

describe('getUser', () => {
    it('should return object if passing "John", "Dou", 42', () => {
        const user = getUser('John', 'Dou', 42);
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal('Dou');
        expect(user.age).to.equal(42);
    });

    it('should return property null if passing param is not passed', () => {
        const user = getUser('John');
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal(null);
        expect(user.age).to.equal(null);
    });
});

describe('getTotalPath', () => {
    it('should return total path for 3 segment', () => {
        const path = [
            {
                direction: 'Kiyv - Minsk',
                distance: 567,
            },
            {
                direction: 'Kiyv - Paris',
                distance: 2402,
            },
            {
                direction: 'Paris - London',
                distance: 466,
            },
        ];
        expect(getTotalPath(path)).to.equal(3435);
    });

    it('should return total path for 2 segment', () => {
        const path = [
            {
                direction: 'Kiyv - Minsk',
                distance: 567,
            },
            {
                direction: 'Kiyv - Paris',
                distance: 2402,
            },
        ];
        expect(getTotalPath(path)).to.equal(2969);
    });
});

describe('discountFunction', () => {
    it('should return discount10', () => {
        const discount10 = discountFunction(10);
        expect(discount10(90)).to.equal(81);
    });

    it('should return discount15', () => {
        const discount15 = discountFunction(15);
        expect(discount15(110)).to.equal(93.5);
    });

    it('should return discount20', () => {
        const discount20 = discountFunction(20);
        expect(discount20(1000)).to.equal(800);
    });
});

describe('Object methods', () => {
    it('should print object keys', () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        myObject.keys();
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(expectedKeys).to.deep.equal(calls);
    });

    it('should return the provided string', () => {
        expect(myObject.call()).to.equal('My name is John Doe, and I am 25 years old. My best friend is Daniel');
    });

    it('should return the provided string', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(myObject, 'name').value('Brendan');
        sandbox.stub(myObject, 'lastName').value('Eich');
        sandbox.stub(myObject, 'age').value(61);
        sandbox.stub(myObject, 'friends').value(['', '', 'Elon']);

        expect(myObject.call()).to.equal('My name is Brendan Eich, and I am 61 years old. My best friend is Elon');
        sandbox.restore();
    });
});
