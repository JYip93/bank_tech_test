const { homedir } = require("os")

class TransactionList{
    constructor(){
        this.listOfTransactions = []
    }

    addTransaction(transaction){
        this.listOfTransactions.push(transaction)
    }

    printList(){
        let header = "date || credit || debit || balance\n"
        this.listOfTransactions.forEach((transaction) => {
            if (transaction.transactionType == 'deposit'){
                header += `${transaction.date} || || ${transaction.amount} || ${transaction.updatedBalance}\n`
            } else {
                header += `${transaction.date} || ${transaction.amount} || || ${transaction.updatedBalance}\n`
            }
        })
    return header
    }
}

module.exports = { TransactionList: TransactionList }