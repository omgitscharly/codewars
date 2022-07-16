function points(games) {
    return games.map(e => e.split(':')
        .reduce((a,b) => (a > b) ? 3 : (a < b) ? 0 : 1))
        .reduce((ac, c) => ac + c);
  } 