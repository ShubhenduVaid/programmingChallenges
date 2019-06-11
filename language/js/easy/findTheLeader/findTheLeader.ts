export const findTheLeader = {
    name: `Find The Leader`,
    description: `Find the number in an ascending sorted array with max count. Function should return count and number.`,
    solution: `let arr = [1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5];
function solution(arr) {
    let length = arr.length;
    let currentValue = arr[0];
    let counter = 0;
    let maxCounter = 0;
    let maxCounterValue = 0;
    arr.forEach(element => {
        if (currentValue !== element) {
            if (counter > maxCounter) {
                maxCounter = counter;
                maxCounterValue = currentValue;
            }
            counter = 0;
            currentValue = element;
        }
        counter++;
    });
    let obj = {};
    obj[maxCounterValue] = maxCounter
    return obj;
}
console.log(solution(arr));
`
};

