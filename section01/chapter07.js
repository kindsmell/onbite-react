//1. 대입 연산자

let var1 = 1;

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// 연산자 우선순위에 주의해야한다.

//3. 복합 대입 연산자
//산술 연산자 + 대입 연산자 => 복합
num1 += 1; // num1 = num1 + 1;
num2 -= 1; // num2 = num2 - 1;
num3 *= 1; // num3 = num3 * 1;
num4 /= 1; // num4 = num4 / 1;
num5 %= 1; // num5 = num5 % 1;

//4. 증감 연산자 ++, --
let num6 = 10;
console.log(++num6); // 전위 연산
console.log(num6++); // 후위 연산

//전위연산은 23.5 번째 줄에서 실행됨
//후위연산은 24.5 번째 줄에서 실행됨

//5. 논리 연산자
//AND, OR, NOT
let or = true || false; // ||
let and = true && false; // &&
let not = !true; // !

console.log(or, and, not);

//6. 비교 연산자
// >, <, >=, <=, ==, ===, !=, !==
// == 과 ===의 차이
// == : 값만 비교
// === : 값과 타입 비교
let equal = 1 == "1"; // true
let strictEqual = 1 === "1"; // false

//자료형까지 비교하고 싶을 때는 ===을 사용하자.
