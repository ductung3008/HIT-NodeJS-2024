// Kiểm tra xem một đối tượng có rỗng không?

// Input:
// const cat = { name: "meow", age: 2 };
// Ouput: false

// Input: const dog = {};
// Output: true

const cat = { name: "meow", age: 2 };

const dog = {};

const isEmpty = (obj = {}) => {
    return Object.keys(obj).length === 0;
}

const isEmpty2 = (obj = {}) => {
    return JSON.stringify(obj) === "{}";
}

console.log(isEmpty(cat));
console.log(isEmpty2(dog));