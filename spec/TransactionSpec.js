const { Transaction } = require('../src/Transaction')
describe('Transaction', function () {
  it('check individual transaction attributes', function () {
    let transaction = new Transaction(500, 'deposit', 1000, '11/02/2020')
    expect(transaction.getAmount()).toEqual(500)
    expect(transaction.getTransactionType()).toEqual('deposit')
    expect(transaction.getDate()).toEqual('02/11/2020')
    expect(transaction.getUpdatedBalance()).toEqual(1000)
  })
  it('check different values', function(){
    let transaction = new Transaction(100, 'withdraw', 400, undefined)
    expect(transaction.getAmount()).toEqual(100)
    expect(transaction.getTransactionType()).toEqual('withdraw')
    expect(transaction.getDate()).toEqual('06/11/2020')
    expect(transaction.getUpdatedBalance()).toEqual(400)
  })
})
