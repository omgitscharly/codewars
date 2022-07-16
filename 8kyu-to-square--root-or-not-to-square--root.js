function squareOrSquareRoot(array) {
    return array.map(n => Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : n * n );  
}