function duplicates(array){
    let count = 0
    let newArray = array.slice().sort();
    for (let i = 0; i < newArray.length; i++){
        if (newArray [i] === newArray[i + 1]){
          count++
          newArray[i] = ''
          newArray[i + 1] = ''
        }
      }
    return count
}