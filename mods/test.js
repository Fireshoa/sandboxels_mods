elements.black_matter = {
    color: "#000000",
    behavior: [
        "XX|M1 AND DL%5|XX",
        "M1 AND DL%5|XX|M1 AND DL%5",
        "XX|M1 AND DL%5|XX"
    ],
    category: "special",
    temp: 5000,
    tempLow: 90,
    state: "gas",
    stateLow: "white_matter",
    excludeRandom: true,
};

elements.white_matter = {
    color: "#ffffff",
    behavior: [
        "M2|DL%5|M2",
        "DL%5|XX|DL%5",
        "XX|M1 AND DL%5|XX"
    ],
    category: "special",
    temp: 50,
    tempHigh: 110,
    stateHigh: "black_matter",
    excludeRandom: true,
};