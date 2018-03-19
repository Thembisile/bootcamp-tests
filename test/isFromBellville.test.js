describe('isFromBellville' , function(){
    it('should identify the registration location' , function(){
      var name1 = "CY 456";
        assert.equal(isFromBellville(name1), true);
    });
    it('should return from bellville otherwise false' , function(){
      var name2 = "CA 48040";
      assert.equal(isFromBellville(name2), false);
    })
});
