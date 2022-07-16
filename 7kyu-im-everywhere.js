function i(word) {
    let vowels = ["a","e","i","o","u"];
    let arr = word.split('');
    let numVowels = 0;
    let numConsonants = word.length;
  
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            numVowels++;
            numConsonants--
        }
    }
   
    
    if (arr.length < 1){
      return "Invalid word";
    } else if (arr[0] === "I" || arr[0] !== arr[0].toUpperCase() || numVowels >= numConsonants){
      return "Invalid word";
    } 
    return `i${word}`;
  }