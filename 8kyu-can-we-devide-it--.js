//a number and 2 integers

//return true or false if number is divisibe by a and b

function isDivideBy(number, a, b) {
  //use modulo 2  equals 0, if yes, is divisible
  return number % a === 0 && number % b === 0;
}

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true