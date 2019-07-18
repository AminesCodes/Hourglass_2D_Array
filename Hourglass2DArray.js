let array = [[-9, -9, -9,  1, 1, 1],
             [ 0, -9,  0,  4, 3, 2],
             [-9, -9, -9,  1, 2, 3],
             [ 0,  0,  8,  6, 6, 0],
             [ 0,  0,  0, -2, 0, 0],
             [ 0,  0,  1,  2, 4, 0] ];

const sumDesiredShape = (arr) => {
  let arrayOfSums = [];

  for (let i = 0; i < arr.length - 2; i++){
    for (let j = 0; j < arr.length - 2; j++){
      let sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]
                + arr[i+1][j+1]
                + arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
      arrayOfSums.push(sum)
    }
  }
  return arrayOfSums;
};

const maxArray = (arr) => {
  let max = -Infinity;
  for (let element of arr){
    if (element > max){
      max = element;
    }
  }
  return max;
};


let arrayOfHourglassSum = sumDesiredShape(array);
console.log(`Array of hourglass Sums :\n`,arrayOfHourglassSum);

let maxHourglassSum = maxArray(arrayOfHourglassSum);
console.log(`The highest ourglass sum value is :`, maxHourglassSum);
