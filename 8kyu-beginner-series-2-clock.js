function past(h, m, s){
    let count = 0
    count = (h * 3600000) + (m * 60000) + (s * 1000);
    return count;
}