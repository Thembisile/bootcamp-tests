function allPaarl(pRegNum){
  var paarlNum = [];
  var pRegNum = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 1521'

  var pNumR = pRegNum.split(', ');      //split string into array
  for (i=0; i<pNumR.length; i++){
    var cPlate = pNumR[i].trim();
    if(cPlate.startsWith('CJ')){
     paarlNum.push(cPlate);
    }
}
  return paarlNum.length;
}
