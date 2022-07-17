//Array with weapon (number of bullets) and number of streets, every street minus 3 bullets
// 1 magazine equals:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

//Returns number of mangazines every soldier has 

//Pseudo Code
function magNumber(info){
    //assign bullets
    let bullets = 0;
    //check how many bullets
    if (info[0] === "PT92"){
      bullets = 17;
    } else if (info[0] === "M4A1"){
      bullets = 30;
    } else if (info[0] === "M16A2"){
      bullets = 30;
    } else if (info[0] === "PSG1"){
      bullets = 5;
    }
    
    //check if bullets <= streets times bullets used
    let bulletesUsed = (info[1] * 3);
      let mags = bulletesUsed / bullets;
  
    
    return Math.ceil(mags);
    
  
  }
  
  //["PT92", 6] => 2 (6 streets 3 bullets each)
  //["M4A1", 6] => 1
  
  console.log(magNumber(["M4A1", 8]))