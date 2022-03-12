function sumMix(x){
    return x.map(n => Number(n))
            .reduce((a,c) => a + c);
}