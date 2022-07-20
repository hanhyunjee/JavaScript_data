// 배열 앞 요소 추출

const arr = [1,2,3];
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());

// 배열 특정 위치의 요소 추출 - slice

// q배열 인덱스로 특정 요소 수정 - splice

const fruits = ["melon", "lemon", "source", "apple", "juice"];

fruits.splice(4, 1);
fruits.splice(4, 0, "grape");
fruits.splice(2, 1, "mandarin", "strawberry", "watermelon");
console.log(fruits);