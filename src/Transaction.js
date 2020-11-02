class Transaction{
    constructor(date, amount, transactionType){
        this.date = date
        this.amount = amount
        this.transactionType = transactionType
    }

    getDate(){
        return this.date
    }

    getAmount(){
       return this.amount
    }

    getTransactionType(){
        return this.transactionType
    }
}

module.exports = { Transaction: Transaction }