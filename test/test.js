const MoneyDashboard = require('../lib');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const defaultOpts = {
  username: process.env.MoneyDashboardUsername,
  password: process.env.MoneyDashboardPassword
};

describe('MoneyDashboard', function () {
  describe('login', function () {
    it('should be able to log in using the given credentials');

    it('should return a boolean indictating success');

    it('should handle incorrect logins');
  });

  describe('getAccounts', function () {
    it('should return an array of accounts');

    it('should handle not having any accounts');
  });
});
