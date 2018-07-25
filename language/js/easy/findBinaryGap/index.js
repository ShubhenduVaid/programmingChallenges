function solution(N) {
    let binaryNo = N.toString(2);
    let binaryList = binaryNo.split('');
    let maxCount = 0;
    let count = 0;
	let startingOne = true;
	let endingOne = false;
    binaryList.forEach(element => {
        if(element === '0'){
            count ++;
			endingOne = false;
        }
        else{
			if(count > 0) endingOne = true;
			if(startingOne && endingOne){
				maxCount = (count > maxCount)?count:maxCount;
			}
            count = 0;
        }
    });
    return maxCount;
};
console.log(solution(42));
console.log(solution(1041));
console.log(solution(32));