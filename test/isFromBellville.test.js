describe('isFromBellville' , function(){
    it('should identify the registration location' , function(){
      var name1 = "CY 456";
        assert.equal(isFromBellville(name1), true);
    });
});
