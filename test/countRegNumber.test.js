describe('countRegNumber' , function(){
    it('should count the registration number' , function(){
      var name1 = "CA 456 GP, CY 2512, CJ 846"
        assert.equal(countRegNumber(name1), 3);
    });
});
