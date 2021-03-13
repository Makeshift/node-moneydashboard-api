/* eslint-env mocha */
const MoneyDashboard = require('../lib');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const defaultOpts = {
  username: process.env.MoneyDashboardUsername,
  password: process.env.MoneyDashboardPassword
};

describe('MoneyDashboard', () => {
  describe('login', () => {
    const account = new MoneyDashboard(defaultOpts);

    it('should be able to log in using the given credentials', () => {
      return account.login().should.eventually.be.true;
    });

    it('should return a boolean indictating success');

    it('should handle incorrect logins');
  });

  describe('getAccounts', () => {
    it('should return an array of accounts');

    it('should handle not having any accounts');
  });
});
