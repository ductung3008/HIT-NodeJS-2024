// Chuyển mảng thành đối tượng.

// Input:
// const hit14 = ["H", "I", "T", 1, 4]

// Output:
// const result = {
// 	key1: "H",
// 	key2: "I",
// 	key3: "T",
// 	key4: 1,
// 	key5: 4
// }

// # đối tượng nhiều thuộc tính hơn thì tăng số sau key

const hit14 = ["H", "I", "T", 1, 4];

// 1.
const obj = {};
for (let i = 0; i < hit14.length; i++) {
    obj[`key${i + 1}`] = hit14[i];
}

console.log(obj);

// 2.
const obj2 = hit14.reduce((obj, item, index) => {
    (obj[`key${index + 1}`] = item);
    return obj;
}, {});

console.log(obj2);