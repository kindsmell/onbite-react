// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// 콜백함수의 매개변수 순서는 지정되어있다.
// 첫번째 : item(요소), 두번째 : idx(인덱스), 세번째 : arr(배열)
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
//중복되는 요소가 있다면 제일 첫번째로 나타나는 요소의 인덱스 반환
let arr3 = [2, 2, 2];

// 존재하지 않는 요소를 검색하면 -1을 반환
let index = arr3.indexOf(20);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수의 조건문을 만족시키는 요소 찾기
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

const findedIndex2 = arr4.findIndex((item) => {
  if (item === 2) return true;
});

const findedIndex = arr4.findIndex((item) => item === 999); //조건만 적어줘도 됨

console.log(findedIndex);

//findIndex를 사용하는 이유

//indexOf는 얕은 비교로 동작하기 때문에 객체의 프로퍼티 인덱스를 찾을 때 사용할 수 없다.

let objectArr = [{ name: "김선향" }, { name: "홍길동" }];

console.log(objectArr.indexOf({ name: "김선향" })); //-1 출력. 인덱스 못찾음.

console.log(objectArr.findIndex((item) => item.name === "김선향")); //0 출력. findIndex는 객체 프로퍼티 인덱스 찾기도 가능.

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
// 인덱스를 반환하는 것이 아닌, 그 자체를 반환.

let arr5 = [{ name: "김선향" }, { name: "홍길동" }]; // 객체 배열

const finded = arr5.find((item) => item.name === "김선향");
// 여기서는 요소가 객체이기 때문에 객체 자체를 반환

console.log(finded);
