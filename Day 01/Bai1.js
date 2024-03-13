// Xoá phần tử trùng trong mảng và sắp xếp lại theo chiều giảm dần.
// Input: 
// const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];

// Output: [8, 6, 3, 2, 1, 0, -9];

const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];

// 1. 
const res1 = numbers.reduce((arr, cur) => {
    if (arr.indexOf(cur) === -1) {
        arr.push(cur);
    }
    return arr;
}, []);

res1.sort();
res1.reverse();

console.log(res1)

// 2.
let res2 = [];
res2 = numbers.filter(num => res2.includes(num) ? "" : res2.push(num));

res2.sort().reverse();

console.log(res2);

// 3.
let res3 = [];
numbers.forEach(num => {
    if (!res3.includes(num)) {
        res3.push(num);
    }
})

res3.sort((a, b) => b - a);

console.log(res3)