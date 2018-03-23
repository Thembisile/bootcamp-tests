describe('totalPhoneBill' , function(){
    it('should return how much is the bill for a sms' , function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');
    });
    it('should return how much is the bill for a call', function(){
      assert.equal(totalPhoneBill('call'), 'R2.75')
    })
    it('should return how much the total bill is for call and sms', function(){
      assert.equal(totalPhoneBill('call, sms, sms, sms, call'), 'R7.45')
    })
});
