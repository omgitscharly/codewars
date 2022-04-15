function expressionMatter(a, b, c) {
    let aSum = a * (b + c);
    let bSum = a * b * c;
    let cSum = a + b * c;
    let dSum = (a + b) * c;
    let eSum = a + b + c;
    let resultsArr = [aSum, bSum, cSum, dSum, eSum];
    return Math.max(...resultsArr);
}