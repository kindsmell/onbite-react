// 1. Spread 연산자 : 몽땅 다 옮기고 싶을 때
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// let arr2 = [4, 1, 2, 3, 5, 6];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];이렇게 해도 되지만
// 인덱스로 펼쳐놓는 것은 수정할때 힘들다.

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  //a = obj1.a, b = obj1.b
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수 : ...이 함수의 정의 부분에서 매개변수에 사용될 때.
// -> Rest는 나머지 , 나머지 매개변수
// 매개변수가 아무리 많아도 배열로 받아버릴 수 있다.

// 첫번째, 두번째 매개변수는 따로 변수로 받고
// 나머지들은 몽땅 다 배열로 받아버리기
function funcB(one, two, ...ds) {
  console.log(ds);
}

funcB(...arr1);

//* rest 매개변수는 항상 마지막에 위치해야한다. */
