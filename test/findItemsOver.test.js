describe('findItemsOver' , function(){
    it('should return items over  ' , function(){
        assert.equal(findItemsOver20('21, 54, 12, 89, 01'), '3');
    });
    it('should return items over', function(){
      assert.equal(findItemsOver('20,21,35,87,03,45'), '4')
    })
});
