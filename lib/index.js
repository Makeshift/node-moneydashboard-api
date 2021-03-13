const fetch = require('node-fetch');
const { NoLoginProvidedError, FeatureUnimplementedError } = require('./errors');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const AWS = require('aws-sdk');

// Extracted from the login flow on https://app.moneydashboard.com/login
const config = {
  aws_cognito_identity_pool_id: 'eu-west-2:f739e3a9-95bb-4bd9-8238-d9a6777ffeac',
  aws_user_pools_id: 'eu-west-2_oXtK9cXqF',
  aws_user_pools_web_client_id: 'vj841jhgqv528ogqu71397g4',
  AWSRegion: 'eu-west-2',
  api: 'https://neonapiprod.moneydashboard.com/v1'
};

AWS.config.region = config.AWSRegion;

class MoneyDashboard {
  /**
   * Creates a new instance of the MoneyDashboard API
   *
   * @param {Object} opts
   * @param {String} opts.username  Your MoneyDashboard username/email
   * @param {String} opts.password  Your MoneyDashboard password
   */
  constructor ({ username, password }) {
    this.username = username;
    this.password = password;
  }

  /**
   * Logs in using the provided credentials
   *
   * @return {Promise<Boolean>} A promise that (when resolved) is a boolean dictating the status of logging in
   */
  login () {
    return new Promise((resolve, reject) => {
      if (!this.username || !this.password) {
        throw new NoLoginProvidedError();
      }

      const authenticationData = {
        Username: this.username,
        Password: this.password
      };
      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      const poolData = {
        UserPoolId: config.aws_user_pools_id,
        ClientId: config.aws_user_pools_web_client_id
      };
      const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
      const userData = {
        Username: this.username,
        Pool: userPool
      };
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          // _this.accessToken = result.getAccessToken().getJwtToken();

          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: config.aws_cognito_identity_pool_id, // your identity pool id here
            Logins: {
              // Change the key below according to the specific region your user pool is in.
              [`cognito-idp.${config.AWSRegion}.amazonaws.com/${config.aws_user_pools_id}`]: result
                .getIdToken()
                .getJwtToken()
            }
          });

          resolve(true);
        },

        onFailure: function (err) {
          console.log(err.message || JSON.stringify(err));
          resolve(false);
        }
      });
    });
  }

  /**
   * Refreshes local credentials for Cognito
   *
   * @return {Promise<Boolean | Error>} A promise that (when resolved) is a boolean dictating the status of logging in
   */
  refreshLogin () {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      AWS.config.credentials.refresh((error) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: let s3 = new AWS.S3();
          console.log('Successfully refreshed!');
          resolve(true);
        }
      });
    });
  }

  /**
   * Generates the x-auth header required for API requests
   *
   * @return {String} x-auth header string
   */
  generateAPIAuth () {
    throw new FeatureUnimplementedError();
  }

  /**
   * Get a list of accounts attached to the MoneyDashboard account
   *
   * @return {Array.<Object>} An array containing the list of accounts as objects
   */
  getAccounts () {
    throw new FeatureUnimplementedError();
  }

  /**
   * Get a list of balances maybe? I haven't actually looked that far into the API yet lol
   */
  getBalances () {
    throw new FeatureUnimplementedError();
  }
}

module.exports = exports = MoneyDashboard;

const account = new MoneyDashboard({ username: process.env.MoneyDashboardUsername, password: process.env.MoneyDashboardPassword });
account.login().then((data) => {
  console.log(data);
});
