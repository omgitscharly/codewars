function checkVowel(string, position) {
    const vowels = ['a','e','i','o','u']; 
    return vowels.includes(string.toLowerCase().charAt(position));
};