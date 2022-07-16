function array(arr){
    let newArr = arr.split(',');
    return (newArr.length < 3) ? null : newArr.splice(1, newArr.length - 2).join(' ');
}