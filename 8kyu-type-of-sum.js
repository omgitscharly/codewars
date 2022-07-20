//two data types (a,b)

//return a string with the type of sum

function typeOfSum(a, b) {
	//declare variables to identify type od data of a & b
  let aType = typeof a;
  let bType = typeof b;
  //compare data type of a & b and asign type of sum
  if (aType === 'string' || bType === 'string'){
    return 'string';
  } else {
    return 'number';
  }
  
}

// typeOfSum(12, 1), 'number'
// typeOfSum('d', 1), 'string'
// typeOfSum(1, 'a'), 'string'
// typeOfSum('dd', ''), 'string'
// typeOfSum(true, 1), 'number'
// typeOfSum('s', false), 'string'
// typeOfSum(null, 1), 'number'
// typeOfSum('s', null), 'string'
// typeOfSum(null, undefined), 'number'
// typeOfSum(undefined, 're'), 'string'
// typeOfSum(undefined, true), 'number'
// typeOfSum(null, false), 'number'