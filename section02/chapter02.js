//And, or 처리할 때, 첫번째 피연산자 값만으로도 연산 결과가 확정됨
// 두번째 피연산자에는 접근 x
// 단락평가라고 한다.

// 단락 평가 활용 사례

function printName1(person) {
  if (!person) console.log("person의 값이 없음");
  console.log(person.name);
}

//person값이 false인 경우 처리하는 코드를 더 간결하게 바꿀 수 있다.
function printName(person) {
  const name = person && person.name; //person도 존재해야하고 person.name도 존재해야함
  console.log(name || "person의 값이 없음"); //연산의 결과를 출력하는 것이 아닌, 둘 중 truthy한 값을 출력

  //person이 undifined인 경우, const name에는 person의 undifined가 할당됨
}

printName();
printName({ name: "이정환" });

// T || T -> 첫번째 T 반환
// T && T => 두번째 T 반환
//**** ||, &&은 Boolean이 아니라 피연산자 자체를 반환한다. */
