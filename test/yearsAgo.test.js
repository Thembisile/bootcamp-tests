describe('yearsAgo' , function(){
    it('should return how many years ago' , function(){
      var name1 = "5"
        assert.equal(yearsAgo(name1), 2013);
    });
    it('should return how many years ago', function(){
      assert.equal(yearsAgo('8'), 2010);
    })
    it('should tell how many years', function(){
      assert.equal(yearsAgo('1'), 2017)
    })
});
