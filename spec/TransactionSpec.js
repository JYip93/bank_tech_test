const { Transaction } = require('../src/Transaction')
describe("Transaction", function(){
    describe("Check the transaction individual", function(){
        it("transaction type", function(){
            let transaction = new Transaction(500, 'deposit','10/11/2020', 1000)
            expect(transaction.getAmount()).toEqual(500)
            expect(transaction.getTransactionType()).toEqual('deposit')
            expect(transaction.getDate()).toEqual('10/11/2020')
            expect(transaction.getUpdatedBalance()).toEqual(1000)
        })
    })
})


