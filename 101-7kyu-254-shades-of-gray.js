function shadesOfGrey(n) {
    let shades = [];
    
    for (let i = 1; i <= Math.min(n, 254); i++) {
      let grey = ('0' + i.toString(16)).slice(-2);
      shades.push('#' + grey + grey + grey);
    }
    
    return shades;
  }