function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    return a.reduce((acc,n) => acc + Math.pow(n, 2), 0) > b.reduce((acc,n) => acc + Math.pow(n, 3), 0);
}