function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sortedList = A.sort((a,b) => a - b);
    let currentElement = sortedList[0];
    for(let i = 1; i < sortedList.length; i++){
        if(sortedList[i] - currentElement > 1){
            return (currentElement + 1); 
        }
        currentElement = sortedList[i];
    }
}