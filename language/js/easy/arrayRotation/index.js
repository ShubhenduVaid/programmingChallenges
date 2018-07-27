function solution(A, K) {
    let arrayLength = A.length;
    // TO counter for case when rotation length > array length.
    let rotationTimes = (K <= arrayLength) ? K : (K % arrayLength);
    let maxIndex = arrayLength - 1;
    let rotatedList = [];
    for (let index = 0; index < arrayLength; index++) {
        let newIndex = index + rotationTimes;
        if (newIndex > maxIndex) {
            newIndex = newIndex - maxIndex - 1;
        }
        rotatedList[newIndex] = A[index];
    }
    return rotatedList;
};

let A = [1, 2, 3, 4];

let K = 5;

console.log(solution(A, K));