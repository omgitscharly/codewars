const prevMultOfThree = n => {
    let arr = n.toString().split('');
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; i++){
        let sum = Number(arr.join(''));
        if(sum % 3 === 0){
          return sum 
        }
        arr.pop();
      }
      return null;
    }
}