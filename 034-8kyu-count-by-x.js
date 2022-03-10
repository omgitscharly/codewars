function countBy(x, n) {
    let z = [];
    let mult = x * n;
    for(let i = x; i <= mult; i+=x){
      z.push(i);
    }
    return z;
}