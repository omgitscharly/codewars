function digitize(n) {
    let arrNum = [];
    let numString = n.toString().split('');
    for (let i = numString.length - 1; i >= 0; i--) {
      arrNum.push(parseInt(numString[i]));
    } return arrNum;
}