const palindromes = function (words) {
    let wordsArray = words.split("").reverse().join("").toLowerCase();
    if ( wordsArray.replace(/[^A-Za-z1-9]/g, "") === words.replace(/[^A-Za-z1-9]/g, "").toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
