function warnTheSheep(queue) {
    for(let i = 0; i < queue.length; i++){
      if(queue[queue.length - 1] === "wolf"){
        return "Pls go away and stop eating my sheep";
      } else {
        return `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`
      }
    }
}