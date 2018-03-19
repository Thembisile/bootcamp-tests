describe('totalPhoneBill' , function(){
    it('should return how much is the total phone bill ' , function(){
      var cPlate = 'call';
      var town = 'R2.75'
        assert.equal(totalPhoneBill(cPlate), town);
    });
});
