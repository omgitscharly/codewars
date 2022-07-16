function well(x){
    let goodCount= 0
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'good'){
        goodCount += 1;
      } 
    } 
    if(goodCount > 2){
      return 'I smell a series!';
    } else if(goodCount > 0) {
      return 'Publish!';
    } else {
      return 'Fail!';
    }
}