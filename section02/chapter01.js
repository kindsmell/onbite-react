//Truthy와 Falsy
//: 참이나 거짓을 의미하지 않는 값도 조건문 내에서 참이나 거짓으로 평가하는 특징
//javaScript의 모든 값은 Truthy하거나 Falsy하다.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0; //숫자 0도 Falsy하다
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; //배열
let t4 = {}; //객체
let t5 = () => {}; //함수

// 3. 활용 사례
function printName(person) {
  //undefined,,, Falsy 한 경우들을 처리해줘야함.
  if (!person) {
    //이게 false인 경우 처리하는 if문임을 암기.
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
