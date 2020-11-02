const moment = require('moment') 
class Transaction{
    constructor(amount, transactionType, date = new Date, updatedBalance){
        this.date = date
        this.amount = amount
        this.transactionType = transactionType
        this.updatedBalance = updatedBalance
    }

    getDate(){
        return (moment(this.date).format('L'))
    }

    getAmount(){
       return this.amount
    }

    getTransactionType(){
        return this.transactionType
    }

    getUpdatedBalance(){
        return this.updatedBalance
    }
}

module.exports = { Transaction: Transaction }