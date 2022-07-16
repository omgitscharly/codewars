function sameCase(a, b){
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
    return (aUpper === aLower || bUpper === bLower) ? -1 
    : ((a === aUpper && b === bUpper) || (a === aLower && b === bLower)) ? 1 : 0;
}