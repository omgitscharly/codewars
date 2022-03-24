function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    let filter = newArr.filter((e,i) => newArr.indexOf(e) === i);
    return filter.sort((a,b) => a - b);
}