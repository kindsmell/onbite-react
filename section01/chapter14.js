// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {
    let c = 3; // 지역 스코프
    console.log(b);
  }
}

funcA();

if (true) {
  let c = 1; //블록 내에 선언되었기 때문에 지역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1;
} //반복문 초기식의 변수도 지역스코프 (i)

funcB();
// 함수는 기본적으로 자신이 선언된 함수의 블록 안에서만 지역 스코프를 가짐.
