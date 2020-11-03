[![Build Status](https://travis-ci.com/JYip93/bank_tech_test.svg?branch=master)](https://travis-ci.com/JYip93/bank_tech_test)

## Bank Tech Test

An application where user can withdraw and deposit money and print statements via the Javascript node REPL.

## Specification
### Requirements

    You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
    Deposits, withdrawal.
    Account statement (date, amount, balance) printing.
    Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
````
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
````


## User stories
```
As a customer
so that I can put money into my account
I can deposit it through the bank
```

```
As a customer
so that I can take money out my account
I can withdraw it through the bank
```

```
As a customer
so that I can check account balance and transactions
I can print a bank statement
```


## Technologies used 

| Usage | Technology |
|----------------------|------------|
| Programming language | Javascript |
| Testing Framework    | Jasmine    |
| Additional libraries | MomentJS   |
| CD / CI              | TravisCI   |
| Linter               | ESLint     |


## How to use

Open Node REPL in the command line
```
$ node
```

When inside Node REPL, require the Account.js file and execute commands to for actions in the appplication
```
> const { Account } = require('./src/Account')
> let account = new Account
> account.deposit(1000)
> account.withdraw(450)
> account.printStatement()
```

Result after printing statement
```
date || credit || debit || balance
11/03/2020 || || 1000 || 1000
11/03/2020 || 450 || || 550
```

### Testing

To test the application just run the following in the terminal in the root of the project:
```
$ jasmine
```