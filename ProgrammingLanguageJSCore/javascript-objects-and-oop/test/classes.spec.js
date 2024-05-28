const { describe, it } = require('mocha');
const { expect } = require('chai');

const { person, student } = require('../src/classes.js');

describe('person', () => {
  it('should have firstName property', () => {
    expect(person).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(person).to.have.property('lastName');
  });

  it('should have getFullName method', () => {
    expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`);
  });

  it('instance created correctly', () => {
    expect(person.firstName, "firstName isn't passed to Person").not.to.equal(undefined);
    expect(person.lastName, "lastName isn't passed to Person").not.to.equal(undefined);
  });
});

describe('student', () => {
  it('should have firstName property', () => {
    expect(student).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(student).to.have.property('lastName');
  });

  it('should have grade property', () => {
    expect(student).to.have.property('grade');
  });

  it('should have getGrade method', () => {
    expect(student.getGrade()).to.equal(student.grade);
  });

  it('should have getFullName method', () => {
    expect(student.getFullName()).to.equal(`${student.firstName} ${student.lastName}`);
  });

  it('instance created correctly', () => {
    expect(student.firstName, "firstName isn't passed to Student").not.to.equal(undefined);
    expect(student.lastName, "lastName isn't passed to Student").not.to.equal(undefined);
    expect(student.grade, "grade isn't passed to Student").not.to.equal(undefined);
  });
});
