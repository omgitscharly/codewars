function fixTheMeerkat(arr) {
    let firstToLast = arr.shift();
    let lastToFist = arr.pop();
    arr.push(firstToLast);
    arr.unshift(lastToFist);
    return arr; 
}