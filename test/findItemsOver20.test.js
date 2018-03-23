describe('findItemsOver20' , function(){
    it('should return items over 20 ' , function(){
        assert.equal(findItemsOver20('21, 05, 18, 12, 35, 14, 9'), 2);
      });
    it('should return undefined if no item is over 20', function(){
      assert.equal(findItemsOver20('10, 7, 14, 12, 18, 02,'), undefined)
    })
});
