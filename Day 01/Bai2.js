// Tìm phần tử lớn thứ 2 của mảng.

// Input: 
// const numbers = [2, -7, 9, 5, 2, 0, 5]

// Output: [5]

const numbers = [2, -7, 9, 5, 2, 0, 5];

// 1.
const uniqueNumbers = numbers.reduce((arr, cur) => {
    if (arr.indexOf(cur) === -1) {
        arr.push(cur);
    }
    return arr;
}, []).sort().reverse();

console.log(uniqueNumbers[1]);

// 2.
let max1 = -Infinity;
let max2 = -Infinity;
for (const num of numbers) {
    if (num > max1) {
        max2 = max1;
        max1 = num;
    }
    else if (num > max2 && num !== max1) {
        max2 = num;
    }
}

console.log(max2);
