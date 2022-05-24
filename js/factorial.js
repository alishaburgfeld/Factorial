exports.factorial = function(num) {
    // const factorial = function(num) {
    
    if (num===0) {
        return 1
    }    

    let answer=1
    for (let i=num;i>=1;i--) {
        answer*=i
    }
    return answer
};

// console.log(factorial(45))
