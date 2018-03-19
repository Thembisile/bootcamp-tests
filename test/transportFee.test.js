describe('transportFee' , function(){
    it('should return how much is the transport fee per shift' , function(){
      var shift = 'morning';
      var amount = 'R20'
        assert.equal(transportFee(shift), amount);
    });
    it('should return how much is the transport fee per shift', function(){
      var shift = 'afternoon'
      var amount = 'R10'
      assert.equal(transportFee(shift), amount)
    })
    it('should return how much is the transport fee per shift', function(){
      var shift = 'evening'
      var amount = 'free'
      assert.equal(transportFee(shift), amount)
    })
});
