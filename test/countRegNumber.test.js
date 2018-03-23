describe('countRegNumber' , function(){
    it('should return false if no registration number is available' , function(){
        assert.equal(countRegNumber(''), false);
    });
    it('should count the registration numbers', function(){
      assert.equal(countRegNumber('CA 6413, CJ 56414, CF 549865, CY 84132, CGD 6543 NC'), 5)
    })
});
