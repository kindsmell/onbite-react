// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2; //둘 다 값이 있을 때 왼쪽 값이 선택됨

let userName;
let userNickName = "Winterlood";

// 요구사항 : userName이 null이면 userNickName을 displayName에 할당
// userName에 값이 있을 때는 userName을 displayName에 할당
let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

// javascript는 c언어와 다르게, 자료형이 동적으로 결정된다.
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

// 조건식 ? 참일 때 값 : 거짓일 때 값

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
