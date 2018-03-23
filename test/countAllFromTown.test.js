describe('countAllFromTown' , function(){
    it('should return all registration number from CL' , function(){
        assert.equal(countAllFromTown('CJ 124,CJ 1521, CJ 567,CL 345, CJ 456,CL 341', 'CL'), 2);
    });
    it('should return registration plate error if town is not specified' , function(){
      assert.equal(countAllFromTown('CZ 8452, CX 2641, CJ 142', 'CA'), 0 )
    })
});
