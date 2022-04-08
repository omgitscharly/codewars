const quarterOf = (month) => {
    let first = [1, 2, 3];
    let second = [4, 5, 6];
    let third = [7, 8, 9];
    let fouth = [10, 11, 12];
    return (first.includes(month) ? 1 : second.includes(month) ? 2 : third.includes(month) ? 3 : 4);
}  