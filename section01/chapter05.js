//1. Number Type
let num1 = 10; // 정수
let num2 = 10.5; // 실수

// 사칙연산 가능
console.log(num1 + num2); // 20.5
console.log(num1 - num2); // -0.5
console.log(num1 * num2); // 105
console.log(num1 / num2); // 0.9523809523809523
console.log(num1 % num2); // 10
//나머지 연산은 모듈러 연산이라고 불림

let inf = Infinity; // 무한대
let mInf = -Infinity; // -무한대
let nan = NaN; // Not a Number

//-------------------------------------------
//2. String Type
let myName = "홍길동";
let myLocation = "서울";

//덧셈연산 지원
let introduce =
  "안녕하세요. 제 이름은 " +
  myName +
  "이고, 사는 곳은 " +
  myLocation +
  "입니다.";
console.log(introduce);

//백틱 : 문자열 안에 변수의 값을 동적으로 삽입 가능케 함
let introduceText = `${myName}의 사는 곳은 ${myLocation}입니다.`;
console.log(introduceText);
//템플릿 리터럴 문법

//-------------------------------------------
//3. Boolean Type
//상태를 이야기해주는 변수
let isTrue = true;
let isFalse = false;

//4. Null Type
// 아무것도 없다는 것을 '명시'
let empty = null;

//5. Undefined Type
//값을 할당하지 않았을 때 자동으로 할당되는 값
let none;
console.log(none); // undefined
//존재하지 않는 값을 불러오려고 할 때 발생하는 값
