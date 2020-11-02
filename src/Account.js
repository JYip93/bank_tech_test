class Account{
    constructor(){
        this.balance = 0
        this.transactionList = []
    }

    getBalance(){
        return this.balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }

}

module.exports = { Account: Account }