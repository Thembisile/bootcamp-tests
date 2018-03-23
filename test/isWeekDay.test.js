describe('isWeekday' , function(){
    it('should return true if its a Weekday' , function(){
        assert.equal(isWeekday('Monday, Tuesday, Wednesday, Thursday, Friday'), true);
    });
    it('should return true if its a Weekday otherwise false' , function(){
        assert.equal(isWeekday('Saturday, Sunday'), false);
    });
});
