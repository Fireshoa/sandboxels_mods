console.log("Hello, World!")

elements.black_matter = {
    color: "#000000",
    behavior: [
        "XX|M1 AND DL|XX",
        "M1 AND DL|XX|M1 AND DL",
        "XX|M1 AND DL|XX"
    ],
    category: "special",
    temp: 5000,
    tempLow: 90,
    state: "gas",
    stateLow: "white_matter"
}

elements.white_matter = {
    color: "#000000",
    behavior: [
        "XX|DL|XX",
        "DL|XX|DL",
        "M2|M1 AND DL|M2"
    ],
    category: "special",
    temp: 5000,
    tempHigh: 110,
    stateHigh: "black_matter"
}