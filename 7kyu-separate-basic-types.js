function separateTypes(input) {
    let obj = {};
    
    for (let i = 0; i < input.length; i++){
      let type = typeof input[i];
      if((type in obj) === false){
        obj[type] = [input[i]];
      } else {
        obj[type].push(input[i]);
      }
    } return obj;
}