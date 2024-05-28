const { expect } = require('chai');

const { taskA, taskB, calc, calculateDiscount, forFactorial, whileFactorial, doFactorial, str, totalIncome } = require('../src');

describe('Condition Test Suite', () => {
  describe('Task 1 - y < 10', () => {
    it('z1 should equal expected value', () => {
      expect(taskA(3, 7), 'x = 3; y = 7 → 3 + 7 should equal 10').to.equal(10);
      expect(taskA(8, 15), 'x = 8; y = 15 → 8 * 15 should equal 120').to.equal(120);
      expect(taskA(20, 10), 'x = 20; y = 10 → 20 * 10 should equal 200').to.equal(200);
    });
  
    it('z2 should equal expected value', () => {
      expect(taskB(3, 7), 'x = 3; y = 7 → 3 + 7 should equal 10').to.equal(10);
      expect(taskB(8, 15), 'x = 8; y = 15 → 8 * 15 should equal 120').to.equal(120);
      expect(taskB(20, 10), 'x = 20; y = 10 → 20 * 10 should equal 200').to.equal(200);
    });
  });
  
  describe('Task 2 - calculator', () => {
    it('task2 should equal expected value', () => {
      expect(calc('add', 6, 2), '6 + 2 should equal 8').to.equal(8);
      expect(calc('subtract', 5, 3), '5 - 3 should equal 2').to.equal(2);
      expect(calc('multiply', 3, 2), '3 * 2 should equal 6').to.equal(6);
      expect(calc('divide', 4, 2), '4 / 2 should equal 2').to.equal(2);
    });
  });
  
  describe('Task 3 - discount', () => {
    it('discount should equal expected value', () => {
      expect(calculateDiscount(10), '10 ransom should produce 0% discount').to.equal(0);
      expect(calculateDiscount(350), '350 ransom should produce 0% discount').to.equal(0);
      expect(calculateDiscount(351), '351 ransom should produce 15% discount').to.equal(15);
      expect(calculateDiscount(400), '400 ransom should produce 15% discount').to.equal(15);
      expect(calculateDiscount(1350), '1350 ransom should produce 15% discount').to.equal(15);
      expect(calculateDiscount(1351), '1351 ransom should produce 30% discount').to.equal(30);
      expect(calculateDiscount(2000), '2000 ransom should produce 30% discount').to.equal(30);
      expect(calculateDiscount(2700), '2700 ransom should produce 30% discount').to.equal(30);
      expect(calculateDiscount(2701), '2701 ransom should produce 45% discount').to.equal(45);
      expect(calculateDiscount(6000), '6000 ransom should produce 45% discount').to.equal(45);
    });
  });
});

describe('Loops Test Suite', () => {
  describe('Task1', () => {
    it('forFactorial', () => {
      expect(forFactorial).to.equal(3628800);
    });
  
    it('whileFactorial', () => {
      expect(whileFactorial).to.equal(3628800);
    });
  
    it('doFactorial', () => {
      expect(doFactorial).to.equal(3628800);
    });
  });
  
  describe('Task2', () => {
    it('str', () => {
      expect(str).to.equal('I love JS');
    });
  });
  
  describe('Task3', () => {
    it('total income', () => {
      expect(totalIncome).to.equal(1335);
    });
  });
})
