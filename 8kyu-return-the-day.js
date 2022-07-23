//number num from 1 to 7

//return a dar in the week or "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
    // create an array with days of week
    let days = ["", "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
    
    //check if num is grater than 7
    if(num === 0 || num > 7){
      return "Wrong, please enter a number between 1 and 7";
    } else {
     //filter element in array
      let day = days.filter((day, i) => i === num);
      return day[0];
    }
  }
  
  whatday(3)
  
  // whatday(1),'Sunday'
  // whatday(2), 'Monday'
  // whatday(3),'Tuesday'
  // whatday(8),  'Wrong, please enter a number between 1 and 7'
  // whatday(20),  'Wrong, please enter a number between 1 and 7'