function binaryCleaner(arr) {
    let lessThanTwo = [];
    let indexes = [];
    arr.forEach((a, i) => (a <= 1) ? lessThanTwo.push(a) :        indexes.push(i));
    
   return [lessThanTwo, indexes]
}