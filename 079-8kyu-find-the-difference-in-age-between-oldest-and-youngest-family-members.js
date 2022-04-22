function differenceInAges(ages){
    let sortedArr = ages.sort((a,c) => a - c);
    return [sortedArr[0],sortedArr[sortedArr.length - 1], sortedArr[sortedArr.length - 1] - sortedArr[0]]
}