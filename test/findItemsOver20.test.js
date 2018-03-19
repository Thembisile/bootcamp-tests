describe('findItemsOver20' , function(){
    it('should return items over 20 ' , function(){
      var list = ('27, 18, 32, 9, 21, 13');
      var items = '0';
        assert.equal(findItemsOver20(list), items);
    });
});
