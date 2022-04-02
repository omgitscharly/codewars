var findAverage = function (nums) {
    let sum = nums.reduce((a,c) => a + c);
    return sum / nums.length;
}