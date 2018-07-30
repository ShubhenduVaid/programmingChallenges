function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
}

function findSum(A, startIndex, endIndex){
    let sum = 0;
    for(let index = startIndex; index <= endIndex; index++){
        sum += A[index];
    }
    return sum;
}