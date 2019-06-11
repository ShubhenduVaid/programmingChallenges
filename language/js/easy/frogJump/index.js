function solution(X, Y, D) {
  let difference = Y - X;
  let minJumps = 0;
  if (difference === 0) {
    return minJumps;
  }
  else {
    let factor = difference % D;
    if (factor === 0) {
      minJumps = difference / D;
      return minJumps;
    }
    else {
      return Math.floor(difference / D) + 1;
    }
  }
}