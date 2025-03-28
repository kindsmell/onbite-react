// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

//화살표 함수에서 조건문만 떼어서 넣기 가능
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 원본 배열 자체를 정렬.
// 배열을 사전순으로 정렬하는 메서드
// 사전순으로 정리하는 것이기 때문에 숫자를 정렬할 때는 조건들을 넣어주어야함.
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    //내림차순정렬
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }

  //return -1 : 순서유지
  //return 1 : 순서 변경
  //return 0 : 순서 유지
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
// 원본 배열은 정렬 X
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" "); //매개변수 : 구분자
console.log(joined);
