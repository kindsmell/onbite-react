// 1. 콜백함수

// 콜백함수 : 인수로 전달된 함수.
// 함수도 인수로 전달 가능.
// 매개변수의 이름을 함수로써 사용하여 콜백함수를 호출가능.
function main(value) {
  console.log("아직아니야");
  value();
}

main(() => {
  console.log("i am sub");
}); //콜백함수는 인자로 넘겨질때 실행되는 것이 아닌,
// 넘어간 곳에서 지정된 줄에서 실행됨.

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});

//구조가 똑같은데 출력부분만 다른 함수들이 있을 때
//콜백함수를 사용하여 함수 개수를 줄일 수 있다.
