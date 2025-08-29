// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

// Configuration
const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// Password generation logic
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";

    // Build the allowed character set
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // Input validation
    if (length <= 0) {
        return "Error: Password length must be at least 1.";
    }

    if (allowedChars.length === 0) {
        return "Error: At least one character set must be selected.";
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Generate and print the password
const generatedPassword = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);

console.log("Generated Password:", generatedPassword);
