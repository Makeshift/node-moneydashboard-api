class MoneyDashboardError extends Error {
  constructor(message, data) {
    let errMsg = `${message}`;
    if (data) {
      errMsg = `${errMsg}\n\n${typeof data === 'object' ? JSON.stringify(data, null, 2) : data}`;
    }
    super(errMsg);
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

class FeatureUnimplementedError extends MoneyDashboardError {
  constructor() {
    super("I haven't done this yet ;)");
  }
}

class NoLoginProvidedError extends MoneyDashboardError {
  constructor() {
    super('Username or password not provided.');
  }
}

class LoginIncorrectError extends MoneyDashboardError {
  constructor() {
    super('Username or password is incorrect.');
  }
}

module.exports = {
  MoneyDashboardError,
  NoLoginProvidedError,
  LoginIncorrectError,
  FeatureUnimplementedError
};
