function eachCons(array, n) {
	let arr = [];
  for (let i = 0; i <= array.length - n; i++) {
    let subArr = [];
    for (let j = 0; j < n; j++) {
      subArr.push(array[i + j]);
    }
    arr.push(subArr);
  }
  return arr;
}
