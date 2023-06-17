const repeatString = function(string, num) {
    let newstring = ''
    if (num > 0) {
        for(i = 0; i < num; i++) {
         newstring += string
            
        }
        return newstring
    }
    else if (num === 0){
        return ''
    }
    else if (num < 0) {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
