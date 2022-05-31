function alternateCase(s) {
    return s.split('').map(value => 
      (value != value.toUpperCase()) ? 
        value.toUpperCase() : 
        value.toLowerCase()
    ).join('');
}