function elevator(left, right, call){
    let cToL = Math.abs(call - left);
    let cToR = Math.abs(call - right);
    return (cToR > cToL) ? 'left' : 'right';
}