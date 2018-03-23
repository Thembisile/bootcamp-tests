describe('findItemsOver' , function(){
    it('should return items over threshold ' , function(){
        assert.equal(findItemsOver('21, 54, 12, 89, 01'), 2);
    });
    it('should return undefined if no item is over threshold', function(){
      assert.equal(findItemsOver('11, 08, 10, 19, 03, 08,'), 2)
    })
});
