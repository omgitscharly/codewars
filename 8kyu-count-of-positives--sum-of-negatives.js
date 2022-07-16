function countPositivesSumNegatives(input) {
    let newArr = [];
    let positive = 0;
    let negative = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
       for (let i = 0; i < input.length; i++){
        if(input[i] > 0){
          positive++;
        } else {
          negative += input[i];
        }
      } return [positive, negative];
    }
}