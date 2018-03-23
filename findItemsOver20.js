function findItemsOver20(itemsList){
  var allItems = itemsList.split(', ');
  for (i = 0; i < allItems.length; i++ ){
    if (allItems[i] > 20){
      var items = allItems[i].length

      return items;
    }
  }
}
