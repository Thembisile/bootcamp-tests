describe('transportFee' , function(){
    it('should return how much is the transport fee for morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return how much is the transport fee for afternoon shift', function(){
      assert.equal(transportFee('afternoon'), 'R10')
    })
    it('should return how much is the transport fee for nightshift', function(){
      assert.equal(transportFee('nightshift'), 'free')
    })
});
