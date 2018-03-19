function findItemsOver20(itemsList){
  var list = ('27, 18, 9, 32, 13');
  var items = '0';
  var allItems = itemsList.split(' ');
  for (i = 0; i < allItems.length; i++ ){
    if (allItems[i] > '20'){

      return '0';
    }
  }
}
