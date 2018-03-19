describe('regCheck' , function(){
    it('should check the registration plate' , function(){
      var name1 = "CA 456 L, CY 45411"
        assert.equal(regCheck(name1), false);
    });
});
