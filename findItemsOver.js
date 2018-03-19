function findItemsOver(list, items){
  var aList = ('15, 01, 53, 18, 3, 2');
  var listA = '5';
  var itemsList = items.split(' ');
  for(i = 0; i < itemsList.length; i++){
    if (itemsList[i] > aList){
      return '0';

    }
  }
}
