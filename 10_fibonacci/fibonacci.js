const fibonacci = function(number) {
    let total = 0;
    let prevNum = 0;
    let nextNum = 1;
    if (Number(number) < 0){ return "OOPS";}
    if (Number(number) === 1){return 1;}
    for (let i = 1; i < Number(number); i++){
        total = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
