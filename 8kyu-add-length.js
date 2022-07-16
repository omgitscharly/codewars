function addLength(str) {
    let newArr = str.split(' ');
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = `${newArr[i]} ${newArr[i].length}`;
    } return newArr
}