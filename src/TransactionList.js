class TransactionList{
    constructor(){
        this.listOfTransactions = []
    }

    addTransaction(transaction){
        this.listOfTransactions.push(transaction)
    }
}

module.exports = { TransactionList: TransactionList }