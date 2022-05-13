const solution = mtrx => {
    let newArray=[];
    for (let i = 0; i < mtrx.length; i++){
      for (let j = 0; j < mtrx[i].length; j++){
        if(mtrx[i][j] === ">" || mtrx[i][j] === "x") {
          newArray.push(mtrx[i][j], i);
        }
      }
    }
    
    if(newArray.indexOf(">") < newArray.indexOf("x") && newArray[1] === newArray[3]){
      return true;
    } else {
      return false;
    }
}