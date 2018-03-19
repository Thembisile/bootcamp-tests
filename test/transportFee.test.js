describe('transportFee' , function(){
    it('should return how much is the transport fee ' , function(){
      var cPlate = 'morning';
      var town = 'R20'
        assert.equal(transportFee(cPlate), town);
    });
});
