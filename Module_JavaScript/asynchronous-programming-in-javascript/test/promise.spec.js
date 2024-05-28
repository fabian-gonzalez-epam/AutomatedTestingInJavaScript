const { describe, it } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
chai.use(chaiAsPromised);

const { promiseResolve, promiseReject, fullPromise, promisesChaining, getAnimals } = require('../src/promises');
const { asyncPromiseResolve, asyncPromiseReject, asyncPromiseAll } = require('../src/asyncAwait');

describe('Promises', () => {
  it('TASK-1: should create a promise that will be resolved', async () => {
    return expect(promiseResolve()).to.eventually.equal('Resolved!');
  });

  it('TASK-2: should create a promise that will be rejected', async () => {
    return expect(promiseReject()).to.be.rejectedWith('Rejected!');
  });

  it('TASK-3: should resolve when param === true with "Resolved!" string', () => {
    return expect(fullPromise(true)).to.eventually.equal('Resolved!');
  });

  it('TASK-3: should reject when param === false with "Rejected!" string', () => {
    return expect(fullPromise(false)).to.be.rejectedWith('Rejected!');
  });

  it('TASK-4: should chain promises', async () => {
    return expect(promisesChaining()).to.eventually.equal('Promises chained');
  });

  it('TASK-5: should return array of animals practicing Promise.all() method', async () => {
    return expect(getAnimals()).to.eventually.have.members(['DOGS', 'CATS', 'BIRDS']);
  });
});

describe('Async/await syntax', () => {
  it('TASK-1: should resolve the promise using async/await syntax', async () => {
    const result = await asyncPromiseResolve();
    expect(result).to.equal('Resolved! with async await');
  });

  it('TASK-2: should reject the promise using async/await syntax', async () => {
    const result = await asyncPromiseReject();
    expect(result).to.equal('Rejected! with async await');
  });

  it('TASK-3: should return array of animals in Uppercase using async/await syntax', async () => {
    const result = await asyncPromiseAll();
    expect(result).to.have.members(['DOGS', 'CATS', 'BIRDS']);
  });
});
