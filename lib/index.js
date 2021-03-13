const fetch = require('node-fetch');
const { parse } = require('node-html-parser');
const { NoLoginProvidedError, FeatureUnimplementedError } = require('./errors');

class MoneyDashboard {
  /**
   * @desc Creates a new instance of the MoneyDashboard API
   *
   * @param {Object} opts
   * @param {String} opts.username  Your MoneyDashboard username/email
   * @param {String} opts.password  Your MoneyDashboard password
   */
  constructor(opts) {
    Object.keys(opts).forEach((key) => (this[key] = opts[key]));
    this.login();
  }

  /**
   * @desc Logs in using the provided credentials
   *
   * @return {Boolean} Whether login was successful or not
   */
  #login() {
    if (!this.username || !this.password) {
      throw new NoLoginProvidedError();
    }
    throw new FeatureUnimplementedError();
  }

  /**
   * @desc Get a list of accounts attached to the MoneyDashboard account
   *
   * @return {Array.<Object>} An array containing the list of accounts as objects
   */
  getAccounts() {
    throw new FeatureUnimplementedError();
  }

  /**
   * @desc Get a list of balances maybe? I haven't actually looked that far into the API yet lol
   */
  getBalances() {
    throw new FeatureUnimplementedError();
  }
}

//let test = new MoneyDashboard({ username: 'user' });
