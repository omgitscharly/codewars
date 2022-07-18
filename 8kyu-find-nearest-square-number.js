//possitive integer

//return the nerest square number

function nearestSq(n){
    //Square root of n
    let sR = Math.sqrt(n);
    //Round to nearest integer
    sR = Math.round(sR);
    //Return square number
    return Math.pow(sR, 2);
}


// (1),1
// (2),1
// (10),9
// (111),121
// (9999),10000