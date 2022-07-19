//human years, cat years, dog years, human years >= 1, hy are while numbers

// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//return an array of numbers [humanYears,catYears,dogYears]


var humanYearsCatYearsDogYears = function(humanYears) {
    //define varialbles for humans, cats and gods
    let humanYearsCount = 0;
    let catYears = 0;
    let dogYears = 0;
    
    //make a loop to count the human years and compare to cat and dog years
    for(let i = 1; i <= humanYears; i++){
      humanYearsCount = i;
      //Compare humanYearsCount and add years to cats and dogs
      if(humanYearsCount === 1){
         catYears += 15;
         dogYears += 15;
      } else if(humanYearsCount === 2){
         catYears += 9;
         dogYears += 9;
      } else {
         catYears += 4;
         dogYears += 5;
      }
    }
    return [humanYearsCount,catYears,dogYears];
  }
  
  humanYearsCatYearsDogYears(10);
  // humanYearsCatYearsDogYears(1), [1,15,15]
  // humanYearsCatYearsDogYears(2), [2,24,24]
  // humanYearsCatYearsDogYears(10), [10,56,64]