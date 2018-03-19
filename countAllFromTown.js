function countAllFromTown(townReg, fromTown){
  //console.log('Count All From Town:');
  var tReg = [];
  var allTown = townReg.split(',')
  for( i =0; i<allTown.length; i++){
    var allReg = allTown[i].trim();
    //console.log(allReg);
    if(allReg.startsWith('CL')){
    tReg.push(allReg);
  }
  else if(allReg.startsWith("CA")){
    tReg.push(allReg);
  }
}
  //console.log(tReg.length);
return tReg.length;
}
