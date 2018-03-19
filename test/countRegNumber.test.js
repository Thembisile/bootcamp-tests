describe('countRegNumber' , function(){
    it('should count the registration number' , function(){
        assert.equal(countRegNumber('CA 45218'), '1');
    });
    it('should count the registration numbers', function(){
      assert.equal(countRegNumber('CA 6413, CJ 56414, CF 549865, CY 84132, CGD 6543 NC'), 5)
    })
});
