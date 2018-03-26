function findItemsOver20(itemsList){
  var Items = itemsList.split(', ');
  for (i = 0; i < Items.length; i++ ){
    if (Items[i] >= 20){
      var itemsOver = Items[i].length;

      return itemsOver;
    }
  }
}
