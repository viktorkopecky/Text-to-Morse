const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..",
    "E": ".", "F": "..-.", "G": "--.", "H": "....",
    "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.",
    ".": ".-.-.-", ",": "--..--", "?": "..--..", " ": "/",
};

const morseToText = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

document.getElementById("encodeBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value.toUpperCase();
    const result = text
        .split("")
        .map(char => morseCode[char] || "")
        .join(" ");
    document.getElementById("outputText").value = result;
});

document.getElementById("decodeBtn").addEventListener("click", () => {
    const morse = document.getElementById("inputText").value.trim();
    const result = morse
        .split(" ")
        .map(code => morseToText[code] || "")
        .join("");
    document.getElementById("outputText").value = result;
});

document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
});

