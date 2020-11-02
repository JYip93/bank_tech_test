const { homedir } = require("os")

class TransactionList{
    constructor(){
        this.listOfTransactions = []
    }

    addTransaction(transaction){
        this.listOfTransactions.push(transaction)
    }

    printList(){
        // set the header in variable
        //iterate over the listOfTransactions for each transaction
        // if else statment
        // adding each attribute to each column
        //statement += "\n ${this.date}"
    }
}

module.exports = { TransactionList: TransactionList }