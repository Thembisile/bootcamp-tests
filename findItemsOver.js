function findItemsOver(items){
  var itemsList = items.split(', ');
  for(i = 0; i < itemsList.length; i++){
    if (itemsList[i] > 0){
      var items = itemsList[i].length;

      return items;
    }
  }
}
