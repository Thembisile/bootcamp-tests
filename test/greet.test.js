describe('greet' , function(){
    it('should greet Shaun' , function(){
      var name1 = "Shaun"
        assert.equal(greet(name1), 'Hello, Shaun');
  });
    it('should greet the neighbour', function(){
      var name2 = "neighbour"
      assert.equal(greet(name2), 'Hello, neighbour')
    });
});
