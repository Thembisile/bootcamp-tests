describe('countAllFromTown' , function(){
    it('should return all registration number from a town' , function(){
      var cPlate = ('CJ 124,CJ 1521, CJ 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(countAllFromTown(cPlate), '1');
    });
    it('should return registration plate from a town' , function(){
      var plate = ('CZ 8452, CA 2641, CA 8221, CJ 142', 'CA')
      assert.equal(countAllFromTown(plate), '1')
    })
});
