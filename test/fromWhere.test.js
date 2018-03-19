describe('fromWhere' , function(){
    it('should return from where ' , function(){
      var cPlate = 'CJ';
      var town = 'Paarl'
        assert.equal(fromWhere(cPlate), town);
    });
    it('should return from where', function(){
      var plate = 'CA'
      var eTown = 'Cape Town'
      assert.equal(fromWhere(plate), eTown)
    })
    it('should return from where', function(){
      var plate = 'CZ'
      var town = 'Some other place!'
      assert.equal(fromWhere(plate), town)
    })
});
