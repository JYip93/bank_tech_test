const { Account } = require('../src/Account')

describe("Account", function(){
    describe("Account balance", function(){
        it("to be 0", function(){
            let account = new Account
            expect(account.getBalance()).toBe(0)
        })
    })

    describe("Deposit money", function(){
        it("desposit 100 pounds to the account", function(){
            let account = new Account
            account.deposit(100)
            expect(account.getBalance()).toBe(100)
        })
    })

    describe("Withdraw money", function(){
        it("withdraw 45 pounds from the account", function(){
            let account = new Account
            account.deposit(100)
            account.withdraw(45)
            expect(account.getBalance()).toBe(55)
        })
    })

    describe("Print bank statement", function(){
        it("show the full statment of the user's transactions", function(){
            let account = new Account
            account.deposit(1000)
            account.withdraw(250)
            expect(account.printStatment()).toEqual("date || credit || debit || balance\n")
        })
    })
})