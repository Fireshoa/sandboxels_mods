elements.black_matter = {
    color: "#000000",
    behavior: behaviors.GAS,
    category: "special",
    temp: 5000,
    tempLow: 90,
    state: "gas",
    stateLow: "white_matter",
    excludeRandom: true,
};

elements.white_matter = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "special",
    temp: 50,
    tempHigh: 110,
    stateHigh: "black_matter",
    excludeRandom: true,
};