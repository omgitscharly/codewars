function abbrevName(name){

    return name.split(' ')
        .map(a => a.charAt(0)
        .toUpperCase())
        .join(".");
  
}