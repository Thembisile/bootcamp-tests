describe('findItemsOver', function(){
  it('should return products that have quantity higher than the threshold.', function(){
    //Add two variables for threshold and itemList
    var threshold = 13;
    var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
    assert.deepEqual(findItemsOver(itemList, threshold), [{name:'pears', qty: 37}, {name: 'bananas', qty: 27},]);
  });
  it('should return products that have quantity higher than the threshold.', function(){
    //Add two variables for threshold and itemList
    var threshold = 13;
    var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
    assert.notEqual(findItemsOver(itemList, threshold), [{name:'apples', qty: 37},{name: 'apples', qty: 10},]);
  });
  it('should return no quantity if there is no items in the list', function(){
    var items = [''];
    assert.equal(findItemsOver(items), '')
  })
});
