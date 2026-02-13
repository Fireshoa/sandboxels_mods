// This tells the game to wait until everything is initialized
runAfterLoad(function() {
    console.log("Black/White Matter mod loaded successfully!");

    elements.black_matter = {
        color: "#000000",
        behavior: behaviors.GAS, // Standard gas behavior (includes M1 logic)
        category: "special",
        temp: 5000,
        tempLow: 90,
        state: "gas",
        stateLow: "white_matter_mod", // Renamed to avoid internal conflict
        excludeRandom: true,
    };

    elements.white_matter_mod = {
        name: "white matter", // This is what shows up in the UI
        color: "#ffffff",
        behavior: behaviors.POWDER,
        category: "special",
        temp: 50,
        tempHigh: 110,
        stateHigh: "black_matter",
        excludeRandom: true,
    };
});