describe('regCheck' , function(){
    it('should check the registration plate is from CZ ' , function(){
      assert.equal(regCheck('DC 55 YU GP', 'CZ'), false);
    });
    it('should check the registration plate is from  GP', function(){
      assert.equal(regCheck('DV 234 GP', 'GP'), true);
    })
    it('should return false if reg is not from L', function(){
      assert.equal(regCheck('GH 854 GP', 'L'), false);
    })
    it('should check the registration is for  L', function(){
      assert.equal(regCheck('XTZ 194 L', 'L'), true);
    })
});
