function loopArr(arr, direction, steps) {
  // removes elements from start and adding them to end of array one-by-one
  if(direction === "left"){
    for(i = 0; i < steps; i++){
      let addLeftElement =  arr.shift();
      arr.push(addLeftElement);
    }return arr;
  } 
  
  //removes from end and adding them to start one by-one
  else if (direction === "right"){
    for(i = 0; i < steps; i++){
      let addRightElement = arr.pop();
      arr.unshift(addRightElement);
    } return arr;
  }
}