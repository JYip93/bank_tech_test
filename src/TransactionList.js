class TransactionList {
  constructor () {
    this.listOfTransactions = []
  }

  addTransaction (transaction) {
    this.listOfTransactions.push(transaction)
    this.listOfTransactions.reverse
  }

  printList () {
    let statement = 'date || credit || debit || balance\n'
    this.listOfTransactions.forEach((transaction) => {
      if (transaction.transactionType === 'deposit') {
        statement += `${transaction.date} || || ${transaction.amount}.00 || ${transaction.updatedBalance}.00\n`
      } else {
        statement += `${transaction.date} || ${transaction.amount}.00 || || ${transaction.updatedBalance}.00\n`
      }
    })
    return statement
  }
}

module.exports = { TransactionList: TransactionList }
