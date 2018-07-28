// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let outputMap = {};
    A.forEach((element) => {
       if(outputMap[element] === undefined){
            outputMap[element] = 1;    
       }
       else{
           if(outputMap[element] === 1){
                outputMap[element] = 2;
           }
           else if(outputMap[element] === 2){
                outputMap[element] = 1;
           }
       }
    });
    let objList = Object.keys(outputMap);
    let arrLength = objList.length;
    let lonelyNo = 0;
    for(let index = 0; index < arrLength ; index++){
        if(outputMap[objList[index]] === 1){
            lonelyNo = objList[index];
        }
    }
    return parseInt(lonelyNo);
}