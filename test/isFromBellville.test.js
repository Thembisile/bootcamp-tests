describe('isFromBellville' , function(){
    it('should identify the registration is from Bellville' , function(){
        assert.equal(isFromBellville("CY 456"), true);
    });
    it('should return from bellville otherwise false' , function(){
      assert.equal(isFromBellville("CA 48040"), false);
    })
});
