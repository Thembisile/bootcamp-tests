describe('isWeekday' , function(){
    it('should return true if its a Weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return true if its a Weekday otherwise false' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});
