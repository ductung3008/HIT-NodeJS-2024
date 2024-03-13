// Kiểm tra xem một đối tượng có chứa tất cả các key đã cho không?

// Input:
// const club = {
//     name: "HIT HaUI",
//     age: 14,
//     country: "VI"
// };
// const keysToCheck = ["name", "age", "country"];

// Output: true

const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
};

const keysToCheck = ["name", "age", "country"];

const keys = Object.keys(club);

const isSameKeys = JSON.stringify(keys) === JSON.stringify(keysToCheck);

console.log(isSameKeys);