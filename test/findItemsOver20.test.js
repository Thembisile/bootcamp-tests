describe('findItemsOver20' , function(){
    it('should return items over 20 ' , function(){
        assert.equal(findItemsOver20('21, 05, 98, 12, 35, 14, 9'), '3');
      });
    it('should return items over 20', function(){
      assert.equal(findItemsOver20('52, 32, 14, 65, 98, 02'), '3')
    })
});
