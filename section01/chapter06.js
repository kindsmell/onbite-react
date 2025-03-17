//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 자동으로 형 변환을 해주는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020
// 숫자와 문자열을 더했을 때 숫자가 문자열로 변환되어 연결됨

//2. 명시적 형 변환
// -> 개발자가 직접 형 변환을 해주는 것
// 문자 -> 숫자 : Number(값)

let str1 = "123";
let strToNum = Number(str1);
console.log(strToNum * 10); // 1230

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

let strToNum3 = parseInt(str2);
console.log(strToNum3); // 10
// parseInt : 문자열을 정수로 변환 (숫자값 만을 찾아서)
// parseInt 를 쓸 때 문자가 앞에 있으면 형변환이 잘 이루어지지 않을 수 있다.

// 숫자 -> 문자 : String(값)
let num1 = 123;
let numToStr = String(num1);
console.log(numToStr + "입니다"); // 123
