function mirror(data) {
    let arr = [...data].sort((a, b) => a - b )
    let reversed = [...arr].reverse()
    return arr.concat(reversed.slice(1))
}