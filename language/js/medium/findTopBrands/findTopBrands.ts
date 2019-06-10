export const findTopBrands =
`
You would like to make a list of N top brand names based on user preferences. You are supplied with data about users containing id and gender information.
The method of compiling the list of N top brand names is as follows:
1. If the user specifies enough liked brands to cover the required N brands, then only this information should be used.
   Liked brands can be accessed by calling the function getlikedBrands(id). If the user specifies more than N liked brands, then the first N brand names returned by getLikedBrands (id) shauld be used
2. If the user doesnt mention enough liked brands, then the rest of the result list should be filled up with top brands for the user's gender. Such a list can be obtained by calling the function getTopBrandsForGender(gender).
   If getTopBrandsForGender(gender) retums more brand names than are needed to complete the list, as many of the leading brand names as are needed should be used.
3. The order of the brand names in the result list should be the same as the order in the lists given by the functions, with brand names returned by getlikedBrands (id) listed first.
   Brand names returned by both functions together, getLikedBrands (id) and getTopBrandsForGender(gender), should appear only once.

Write a function:
function solution(U, N);
that, given user U and the number of brand names N, returns a Promise that should either be:
 * resolved with an array of exactly N top brand names of the given user, in the following format: ["Some Brand Name", "other Brand Name",..];
 * or rejected with an CustomError with a message "Not enough data" (if there are fewer than N brand names to be listed, or both Promises getlikedBrands (id) and getTopBrandsForGender (gender) are rejected)

The user parameter is an object of the following structure: {id: 123132, gender: "FEMALE"} , where id is an integer and gendder is a string containing 'FEMALE' and 'MALE'.

The functions getLikedBrands(id) and getTopBrandsForGender(gender), used in the algorithm above, return Promises that will be rejected with an CustomError or resolved with data in the following format:
 [{id: 123, nameSome Brand Name"} , {id: 456, name: Other Brand Name}]"

 For example, given user U, assume that getLikedBrands (U. id) returns [{1, "Logestyx}, {1, Gladlear}] and getTopBrandsForGender(U. gender) returns [{6, "Burylaze Slapgalt}, {l, "Logestyx"},{17,"Izarpure}]

For N=1 your function should return a Promise which resolves with an array ["Logestyx"].
For N=3 Promise should be resoived with an array ["Logestyx", "Gladlear", "Burylaze Slapgalt"]
For N=5 Promise should be rejected with an CustomError.
The solution should be optimized for client-side (browser-based) performance, rather than back-end load.
The expectation is that the developer will call both functions in parallel.


Solution:

'use strict';

function getLikedBrands(id) {
    return new Promise((resolve, reject) => {
        let likeBrandList = [
            {
                id: 1,
                name: 'Logestyx'
            },
            {
                id: 10,
                name: 'Gladlear'
            }
        ];
        resolve(likeBrandList);
    });
};

function getTopBrandsForGender(gender) {
    return new Promise((resolve, reject) => {
        let genderBrandList = [
            {
                id: 6,
                name: 'Burylaze Slapgalt'
            },
            {
                id: 1,
                name: 'Logestyx'
            },
            {
                id: 7,
                name: 'Izarpure'
            }
        ];
        resolve(genderBrandList);
    });
};

function solution(U, N) {
    return new Promise((resolve, reject) => {
        let likedBrandsList = [];
        let finalBrandslist = [];
        let error = "Not enough data";
        Promise.all([getLikedBrands(U.id), getTopBrandsForGender(U.gender)])
            .then(function (data) {
                likedBrandsList = [...data[0], ...data[1]];
                likedBrandsList = removeDuplicates(likedBrandsList);
                finalBrandslist = finalBrandsList(likedBrandsList);
                if (finalBrandslist.length < N) {
                    reject(error);
                }
                else {
                    resolve(finalBrandslist.splice(0, N));
                };
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

let U = { id: 1, gender: 'FEMALE' };
let N = 1;
solution(U, N).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

function removeDuplicates(arr) {
    let obj = {};
    let likeList = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(obj[element.id] === undefined){
            likeList.push(element);
        }
        obj[element.id] = '';
    }
    return likeList;
};

function finalBrandsList(arr) {
    let likeList = [];
    arr.forEach(element => {
        likeList.push(element.name);
    });
    return likeList;
};

`;
