// for문
// for(초기식; 조건식; 종결식) { 실행문 }

// c언어와 동일하군

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; //건너뛰기
  }
  console.log(idx);

  if (idx >= 5) {
    break; //조건문 탈출
  }
}
