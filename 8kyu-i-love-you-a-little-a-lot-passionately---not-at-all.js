function howMuchILoveYou(nbPetals) {
    const petal = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ]
  
    return petal[(nbPetals-1)%6];
}