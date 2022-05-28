function lastSurvivor(letters, coords) {
    let lettersArr = letters.split('');
    while(coords.length > 0){
      lettersArr.splice(coords.shift(), 1);
    }
    return lettersArr[0];
}