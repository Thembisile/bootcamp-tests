describe('fromWhere' , function(){
    it('should return from other place ' , function(){
        assert.equal(fromWhere(''), 'Some other place!');
    });
    it('should return from Cape Town', function(){
      assert.equal(fromWhere('CA'), 'Cape Town')
    })
    it('should return from Paar;', function(){
      assert.equal(fromWhere('CJ'), 'Paarl')
    })
});
