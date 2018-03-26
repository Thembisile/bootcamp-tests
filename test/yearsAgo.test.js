describe('yearsAgo' , function(){
    it('should return 5 years ago' , function(){
      var name1 = "5"
        assert.equal(yearsAgo(name1), 2013);
    });
    it('should return 8 years ago', function(){
      assert.equal(yearsAgo('8'), 2010);
    })
});
