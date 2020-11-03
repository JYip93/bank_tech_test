const { TransactionList } = require("./TransactionList")
const { Transaction } = require("./Transaction")

class Account{
    constructor(){
        this.balance = 0
        this.transactionList = new TransactionList
    }

    getBalance(){
        return this.balance
    }

    deposit(amount){
        this.balance += amount
        this.transactionList.addTransaction(new Transaction(amount, 'deposit', this.balance))

    }

    withdraw(amount){
        this.balance -= amount
        this.transactionList.addTransaction(new Transaction(amount, 'withdraw', this.balance))

    }

    printStatment(){
        
        return this.transactionList.printList()
    }

}

module.exports = { Account: Account }