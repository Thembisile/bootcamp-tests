describe('totalPhoneBill' , function(){
    it('should return how much is the total phone bill ' , function(){
      var cPlate = 'call';
      var town = 'R2.75'
        assert.equal(totalPhoneBill(cPlate), town);
    });
    it('should return how much is the phone bill', function(){
      var bill = 'sms'
      var cost = 'R0.65'
      assert.equal(totalPhoneBill(bill), cost)
    })
    it('should return how much is the phone bill', function(){
      var bill = 'data'
      var cost = 'R0.10'
      assert.equal(totalPhoneBill(bill), cost)
});
