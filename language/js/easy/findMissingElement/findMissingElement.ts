export const findMissingElement =
`
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1) (not counting the storage required for input arguments).

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

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    A.sort(function(a, b) {
        return a - b;
    });

    var next = 1;
    var i=0;
    while(next === A[i]) {
        next++;
        i++;
    }

    return next;
}

`;
