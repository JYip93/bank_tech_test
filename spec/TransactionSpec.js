const { Transaction } = require('../src/Transaction')

describe("Transaction", function(){
    describe("Check the transaction individual", function(){
        it("date", function(){
            let transaction = new Transaction('02/11/2020')
            expect(transaction.getDate()).toEqual('02/11/2020')
        })
        it("amount", function(){
            let transaction = new Transaction('02/11/2020', 500)
            expect(transaction.getAmount()).toEqual(500)
        })

        it("transaction type", function(){
            let transaction = new Transaction('02/11/2020', 500, 'deposit')
            expect(transaction.getTransactionType()).toEqual('deposit')
        })
    })
})
