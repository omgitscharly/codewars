function uefaEuro2016(teams, scores){
    let winner = teams[scores.indexOf(Math.max(...scores))];
    let result = scores[0] === scores[1] ? `teams played draw.` : `${winner} won!`;
    
    return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}