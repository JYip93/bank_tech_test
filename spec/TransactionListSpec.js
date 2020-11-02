const { TransactionList } = require('../src/TransactionList')


describe("Transaction List", function(){
    describe("Get list of transactions back", function(){
        it("return transaction from transactions list", function(){
            let list = new TransactionList
            let transaction = {amount: 500, transactionType: 'deposit', date: '02/11/2020', updateBalance: 1000}
            list.addTransaction(transaction)
            expect(list.listOfTransactions.length).toEqual(1)
        })
    })
})