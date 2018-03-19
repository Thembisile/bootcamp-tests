describe('countAllFromTown' , function(){
    it('should return all registration number from a town' , function(){
      var cPlate = ('CJ 124,CJ 1521, CJ 567,CL 345, CJ 456,CL 341','CL');
      var town = '3'
        assert.equal(allPaarl(cPlate), town);
    });
});
