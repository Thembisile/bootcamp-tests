describe('findItemsOver' , function(){
    it('should return items over  ' , function(){
      var list = ('27, 18, 32, 9, 21, 13, 24, 42');
      var items = '0';
        assert.equal(findItemsOver20(list), items);
    });
});
