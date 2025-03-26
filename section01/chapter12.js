// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; //함수를 변수에 할당
console.log(varA); // funcA의 선언식이 출력됨.
varA(); //funcA라는 이름 대신 varA로 호출 가능.

//이를 이용하여, 함수를 만들자마자 변수에 담기 가능
let varB = function funcB() {
  console.log("funcB");
};
varB();

// funcB(); 이렇게는 사용 불가능. 선언되지 않았기 때문.
// 변수에 담긴 함수는 이름 생략 가능. (익명 함수)
let varE = function () {
  console.log("funcE");
};

varE();

// 2. 화살표 함수
// (매개변수) => { 실행문 }
// 함수 표현식에서 function 지우고 이름 지우고 => 추가
let varD = () => {
  return 10;
};

// 값을 반환하기만 하는 화살표함수는 더 축약 가능
let varF = () => 10;

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

//함수 간결하게 바꾸기
//1. 함수 표현식
//2. 함수 표현식 - 익명
//3. 화살표 함수
//4. 화살표 함수 - 단순 return만 할 때
