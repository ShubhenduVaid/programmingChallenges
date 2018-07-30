export const findFrequentWord =
`
Find the most frequent word in the Array

function solution(A) {
    let obj = {};
    A.forEach(element => {
        if (obj[element] === undefined) {
            obj[element] = 1;
        }
        else {
            obj[element] = parseInt(obj[element]) + 1;
        }
    });
    let uniqueWordsList = Object.keys(obj);
    let freqWord = 'No frequent word';
    let maxCount = 1;
    uniqueWordsList.forEach(element => {
        if (maxCount < obj[element]) {
            maxCount = obj[element];
            freqWord = element;
        }
    });
    return freqWord;
};
// O(n) time and space;
let list = ["my", "name", "is", "chu", "bansal.", "bansal", "is", "my", "last", "name"];
console.log(solution(list));
`;