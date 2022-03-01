function squareSum(numbers){
    let newArr = [];
    for(let i = 0; i < numbers.length; i++){
    newArr[i] = numbers[i] * numbers[i];
    } 
    
    let sum = 0;
    for(let j = 0; j < newArr.length; j++){
      sum += newArr[j];
    } 
    
    return sum;
    
  }