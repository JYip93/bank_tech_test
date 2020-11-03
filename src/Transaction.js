const moment = require('moment')
class Transaction {
  constructor (amount, transactionType, updatedBalance, date = new Date()) {
    this.amount = amount
    this.transactionType = transactionType
    this.date = (moment(date).format('L'))
    this.updatedBalance = updatedBalance
  }

  getDate () {
    return this.date
  }

  getAmount () {
    return this.amount
  }

  getTransactionType () {
    return this.transactionType
  }

  getUpdatedBalance () {
    return this.updatedBalance
  }
}

module.exports = { Transaction: Transaction }
