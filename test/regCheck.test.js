describe('regCheck' , function(){
    it('should check the registration plate' , function(){
      var name1 ='DC 55 YU GP'
      assert.equal(regCheck(name1), false);
    });
    it('should check the registration plate', function(){
      var name2 = ('DV 23 NB GP', 'GP')
      assert.equal(regCheck(name2), false);
    })
    it('should check the registration plate', function(){
      var name2 = ('HV 876 MP', 'MP')
      assert.equal(regCheck(name2), false);
    })
    it('should check the registration plate', function(){
      var name2 = ('XTZ 194 L', 'L')
      assert.equal(regCheck(name2), false);
    })
});
