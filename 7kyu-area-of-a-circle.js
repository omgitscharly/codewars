var circleArea = function(radius) {
    return (radius <= 0 || typeof radius !== 'number') ? 
      false :
      +((Math.PI * radius * radius).toFixed(2));
}