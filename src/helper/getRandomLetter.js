export const getRandomLetter = () => {
    const caracts = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "z",
        "e",
        "r",
        "t",
        "y",
        "@",
        "<",
        ">",
        "_",
        "-",
        "%",
        "*",
        "$",
        "&",
        "/",
        ";"
    ];
    const randomIndex = randomize(0, caracts.length - 1);
    return caracts[randomIndex];
};

const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};