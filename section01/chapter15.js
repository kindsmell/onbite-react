// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// 객체 정의, 객체 메뉴판

// key : value
// value의 자료형 제한 없음.
// key는 문자열, 숫자
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20, // 숫자 키는 내부적으로 문자열로 변환됨
  "like cat": true, //띄어쓰기있는 문자열은 예외적으로 따옴표 필요
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age2"]; //쌍따옴표와 함께 문자열로 써야한다.
let age2 = person[10]; //숫자키는 따옴표 없이도 접근 가능, but 점표기법으로는 숫자 key접근 불가

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
// in 연산자 -> ture / false
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);
