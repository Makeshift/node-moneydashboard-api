# node-moneydashboard-api

![CircleCI](https://img.shields.io/circleci/build/github/Makeshift/node-moneydashboard-api)
![npm](https://img.shields.io/npm/dw/node-moneydashboard-api)
![GitHub issues](https://img.shields.io/github/issues/Makeshift/node-moneydashboard-api)
![npm](https://img.shields.io/npm/v/node-moneydashboard-api)
[![Depfu](https://badges.depfu.com/badges/1300925fe7391773fe6f266fc2ebc06d/overview.svg)](https://depfu.com/github/Makeshift/node-moneydashboard-api?project_id=17813)

node-moneydashboard-api is a Node module for accessing the MoneyDashboard API.

<a name="MoneyDashboard"></a>

## MoneyDashboard
**Kind**: global class  

* [MoneyDashboard](#MoneyDashboard)
    * [new MoneyDashboard(opts)](#new_MoneyDashboard_new)
    * [.login()](#MoneyDashboard+login) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.refreshLogin()](#MoneyDashboard+refreshLogin) ⇒ <code>Promise.&lt;(Boolean\|Error)&gt;</code>
    * [.generateAPIAuth()](#MoneyDashboard+generateAPIAuth) ⇒ <code>String</code>
    * [.getAccounts()](#MoneyDashboard+getAccounts) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getBalances()](#MoneyDashboard+getBalances)

<a name="new_MoneyDashboard_new"></a>

### new MoneyDashboard(opts)
Creates a new instance of the MoneyDashboard API


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> |  |
| opts.username | <code>String</code> | Your MoneyDashboard username/email |
| opts.password | <code>String</code> | Your MoneyDashboard password |

<a name="MoneyDashboard+login"></a>

### moneyDashboard.login() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Logs in using the provided credentials

**Kind**: instance method of [<code>MoneyDashboard</code>](#MoneyDashboard)  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - A promise that (when resolved) is a boolean dictating the status of logging in  
<a name="MoneyDashboard+refreshLogin"></a>

### moneyDashboard.refreshLogin() ⇒ <code>Promise.&lt;(Boolean\|Error)&gt;</code>
Refreshes local credentials for Cognito

**Kind**: instance method of [<code>MoneyDashboard</code>](#MoneyDashboard)  
**Returns**: <code>Promise.&lt;(Boolean\|Error)&gt;</code> - A promise that (when resolved) is a boolean dictating the status of logging in  
<a name="MoneyDashboard+generateAPIAuth"></a>

### moneyDashboard.generateAPIAuth() ⇒ <code>String</code>
Generates the x-auth header required for API requests

**Kind**: instance method of [<code>MoneyDashboard</code>](#MoneyDashboard)  
**Returns**: <code>String</code> - x-auth header string  
<a name="MoneyDashboard+getAccounts"></a>

### moneyDashboard.getAccounts() ⇒ <code>Array.&lt;Object&gt;</code>
Get a list of accounts attached to the MoneyDashboard account

**Kind**: instance method of [<code>MoneyDashboard</code>](#MoneyDashboard)  
**Returns**: <code>Array.&lt;Object&gt;</code> - An array containing the list of accounts as objects  
<a name="MoneyDashboard+getBalances"></a>

### moneyDashboard.getBalances()
Get a list of balances maybe? I haven't actually looked that far into the API yet lol

**Kind**: instance method of [<code>MoneyDashboard</code>](#MoneyDashboard)  
