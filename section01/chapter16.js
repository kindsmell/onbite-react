// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 추가, 수정, 삭제 가능

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// animal = {  a: 1  }; // 상수객체이기 때문에  다른 객체를 가리키게 하는건 불가능.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
// 객체가 할 수 있는 행동

const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
