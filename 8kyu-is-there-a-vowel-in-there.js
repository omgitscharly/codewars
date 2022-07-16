function isVow(a){
    return a.map(a => (a === 97) ? 'a' : 
                 (a === 101) ? 'e' : 
                 (a === 105) ? 'i' :
                 (a === 111) ? 'o' :
                 (a === 117) ? 'u' : a);
}