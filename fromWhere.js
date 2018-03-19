var fromWhere = function(regNum){
  if (regNum.startsWith("CY")){
    return "Bellville";
  }
   if(regNum.startsWith("CJ")){
    return "Paarl";
  }
   if(regNum.startsWith("CA")){
    return "Cape Town";
   }
    if (regNum.startsWith("")){
      return "Some other place!";
    }
  }
