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
    if (obj[element.id] === undefined) {
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

