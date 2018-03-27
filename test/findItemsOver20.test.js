describe('findItemsOver20', function(){
  it('should return all products that are over 20', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    assert.deepEqual(findItemsOver20(itemList), [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},]);
  });
  it('should return all products, if they are all over 20', function(){
  var itemList = [
      {name : 'apples', qty : 30},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 23},
  ];
  assert.notEqual(findItemsOver20(itemList), [{name : 'apples', qty : 30},
  {name : 'apples', qty : 23}, {name : 'bananas', qty : 27}, {name : 'pears', qty : 37},]);
  });
  it('should return an nothing if there is no products in List', function(){
    var list = [''];
    assert.equal(findItemsOver20(list), '')
  })
  it('should return an empty list if all products are less than 20', function(){
  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 17},
      {name : 'bananas', qty : 7},
      {name : 'apples', qty : 3},
    ];
    assert.equal(findItemsOver20(''), '')
  })
});
