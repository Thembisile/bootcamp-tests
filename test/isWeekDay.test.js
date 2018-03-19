describe('isWeekday' , function(){
    it('should return true if its a Weekday' , function(){
      var name1 = "Monday";
      var name2 ="Tuesday";
      var name3 = "Wednesday";
      var name4 = "Thursday";
        assert.equal(isWeekday(name1,name2,name3,name4,), true);
    });
    it('should return true if its a Weekday' , function(){
      var name6 = "Saturday";
      var name7 ="Saturday";
        assert.equal(isWeekday(name6,name7), false);
    });
});
  
