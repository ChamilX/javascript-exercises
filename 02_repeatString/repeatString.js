const repeatString = function(word, number) {
    let repeatedString = "";
    if (number >= 0){
        for (i = 0; i < number; i++) {
            repeatedString += word;
        }
        return repeatedString;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
