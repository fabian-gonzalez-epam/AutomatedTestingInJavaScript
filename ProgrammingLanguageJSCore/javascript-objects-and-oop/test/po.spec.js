const { describe, it } = require('mocha');
const { expect } = require('chai');

const { BasePage, LoginPage, Component } = require('../src/pageObject');

const base = new BasePage('www.test.com');
const login = new LoginPage('www.test.com', '/login');
const footer = new Component('footer');

describe('Page Object', () => {
  it('LoginPage should inherite BasePage', () => {
    expect(login instanceof LoginPage, 'LoginPage is not inherited from BasePage').to.equal(true);
    expect(login instanceof BasePage, 'LoginPage is not inherited from BasePage').to.equal(true);
  });

  it('url should be defined', () => {
    expect(login.url).not.to.be.undefined;
  });

  it('name should be defined within LoginPage', () => {
    expect(login.name).not.to.be.undefined;
  });

  it('BasePage should have open() method', () => {
    expect(base.open()).to.contain('Open this');
  });

  it('LoginPage should have open() method', () => {
    expect(login.open()).to.contain('/login');
  });

  it('type should be defined within Component', () => {
    expect(footer.type).not.to.be.undefined;
  });

  it('BasePage should have footer', () => {
    expect(base.footer instanceof Component).to.equal(true);
  });

  it('BasePage should have header', () => {
    expect(base.header instanceof Component).to.equal(true);
  });

  it('should be able to review the header from the LoginPage', () => {
    expect(login.header.review()).to.contain('header');
  });

  it('should be able to review the header from the LoginPage', () => {
    expect(login.footer.review()).to.contain('footer');
  });
});
