describe('mostProfitableDepartment' , function(){
    it('should return the most profitable department' , function(){
      var salesData = [
          {department : 'hardware', sales : 4500, day : 'Monday'},
          {department : 'outdoor', sales : 1500, day : 'Monday'},
          {department : 'carpentry', sales : 5500, day : 'Monday'},
          {department : 'hardware', sales : 7500, day : 'Tuesday'},
          {department : 'outdoor', sales : 2505, day : 'Tuesday'},
          {department : 'carpentry', sales : 1540, day : 'Tuesday'},
          {department : 'hardware', sales : 1500, day : 'Wednesday'},
          {department : 'outdoor', sales : 8507, day : 'Wednesday'},
          {department : 'carpentry', sales : 8009, day : 'Wednesday'},
          {department : 'hardware', sales : 12000, day : 'Thursday'},
          {department : 'outdoor', sales : 18007, day : 'Thursday'},
          {department : 'carpentry', sales : 6109, day : 'Thursday'},
          {department : 'hardware', sales : 7005, day : 'Friday'},
          {department : 'outdoor', sales : 12006, day : 'Friday'},
          {department : 'carpentry', sales : 16109, day : 'Friday'},
      ];
        assert.equal(mostProfitableDepartment(salesData), 'outdoor');
    });
    it('should return the most profitable department on different set of data', function(){
      var salesData = [
                      {department : 'education', sales : 80950},
                      {department : 'housing', sales : 15080},
                      {department : 'health', sales : 95020},
                      {department : 'water', sales : 55004}
    ];
      assert.equal(mostProfitableDepartment(salesData), 'health');
    })
    it('should return nothing when no dataset is available', function(){
      assert.equal(mostProfitableDepartment(''), ' ')
    })
  });
  describe('mostProfitableDay', function(){
    it('should return the most profitable day', function(){
      var salesData = [
        {department : 'hardware', sales : 4500, day : 'Monday'},
        {department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'},
        {department : 'hardware', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'hardware', sales : 1500, day : 'Wednesday'},
        {department : 'outdoor', sales : 8507, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        {department : 'hardware', sales : 12000, day : 'Thursday'},
        {department : 'outdoor', sales : 18007, day : 'Thursday'},
        {department : 'carpentry', sales : 6109, day : 'Thursday'},
        {department : 'hardware', sales : 7005, day : 'Friday'},
        {department : 'outdoor', sales : 12006, day : 'Friday'},
        {department : 'carpentry', sales : 16109, day : 'Friday'},
      ];
      assert.equal(mostProfitableDay(salesData), 'Thursday');
    })
    it('should return the most profitable day on different set of data', function(){
      var salesData = [
                      {department : 'education', sales : 80950, day : 'Tuesday'},
                      {department : 'housing', sales : 15080, day : 'Friday'},
                      {department : 'health', sales : 95020, day : 'Monday'},
                      {department : 'water', sales : 55004, day : 'Thursday'},
    ];
      assert.equal(mostProfitableDay(salesData), 'Monday');
    })
    it('should return nothing when no dataset is available', function(){
      assert.equal(mostProfitableDay(''), ' ')
    })
});
