describe('allPaarl' , function(){
    it('should return all from paarl' , function(){
      var plates = ('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 1521')
      var paarl = '3';
        assert.equal(allPaarl(plates), paarl);
    });
    it('should return all from Cape Town' ,function(){
      var nPlates = ('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 1521')
      var cape town = '1';
      assert.equal(allPaarl(nPlates), cape town)
});
