const { TransactionList } = require('../src/TransactionList')

describe('Transaction List', function () {
  let list
  let transaction
  let transaction2
  beforeEach(function () {
    list = new TransactionList()
    transaction = { amount: 500, transactionType: 'deposit', updatedBalance: 1000, date: '02/11/2020' }
    transaction2 = { amount: 100, transactionType: 'withdraw', updatedBalance: 900, date: '03/11/2020' }
    list.addTransaction(transaction)
    list.addTransaction(transaction2)
  })

  it('transactions to be present in the transactions list', function () {
    expect(list.listOfTransactions.length).toEqual(2)
  })

  it('list of transactions and details to be returned in new line each', function () {
    expect(list.printList()).toBe('date || credit || debit || balance\n02/11/2020 || || 500.00 || 1000.00\n03/11/2020 || 100.00 || || 900.00\n')
  })
})
