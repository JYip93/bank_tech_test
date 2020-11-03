const { Transaction } = require('../src/Transaction')
describe('Transaction', function () {
  it('check individual transaction attributes', function () {
    const transaction = new Transaction(500, 'deposit', 1000, '02/11/2020')
    expect(transaction.getAmount()).toEqual(500)
    expect(transaction.getTransactionType()).toEqual('deposit')
    expect(transaction.getDate()).toEqual('02/11/2020')
    expect(transaction.getUpdatedBalance()).toEqual(1000)
  })
})
