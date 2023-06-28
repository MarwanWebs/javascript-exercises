const reverseString = function(string) {
    splitString = string.split('')
    let reversed = ''
    for(i = splitString.length - 1; i >= 0; i--){
        reversed += splitString[i]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
