const { TransactionList } = require('../src/TransactionList')

describe('Transaction List', function () {
  describe('Get list of transactions back', function () {
    it('return transaction from transactions list', function () {
      const list = new TransactionList()
      const transaction = { amount: 500, transactionType: 'deposit', date: '02/11/2020', updateBalance: 1000 }
      list.addTransaction(transaction)
      expect(list.listOfTransactions.length).toEqual(1)
    })
  })
  describe('Return full statement back', function () {
    it('list of transactions returned in new line', function () {
      const list = new TransactionList()
      const transaction = { amount: 500, transactionType: 'deposit', updatedBalance: 1000, date: '02/11/2020' }
      const transaction2 = { amount: 100, transactionType: 'withdraw', updatedBalance: 900, date: '03/11/2020' }
      list.addTransaction(transaction)
      list.addTransaction(transaction2)
      expect(list.printList()).toBe('date || credit || debit || balance\n02/11/2020 || || £500.00 || £1000.00\n03/11/2020 || £100.00 || || £900.00\n')
    })
  })
})
