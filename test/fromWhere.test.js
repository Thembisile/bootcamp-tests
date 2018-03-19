describe('fromWhere' , function(){
    it('should return from where ' , function(){
      var cPlate = 'CJ';
      var town = 'Paarl'
        assert.equal(fromWhere(cPlate), town);
    });
});
