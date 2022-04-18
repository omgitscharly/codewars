function first(arr, n) {
    let newArr = [];
    if(n > arr.length) {
      return arr;
    } else if ((n === undefined)){
      newArr.push(arr[0])
    } else {
      for (let i = 0; i < n; i++){
      newArr.push(arr[i]);
      } 
    } return newArr;
}