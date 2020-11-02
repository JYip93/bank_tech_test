describe("Account", function(){
    describe("Account balance", function(){
        it("to be 0", function(){
            let account = new Account
            expect(account.balance).toBe(0)
        })
    })
})