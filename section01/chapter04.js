// 1. 변수
let age = 27; // 변수 선언 방법 : let 변수명 = 값;
age = 30; // 변수 재할당

//중복된 이름으로 변수 선언 불가능 let age = 30;
// // SyntaxError: Identifier 'age' has already been declared

// 2. 상수
// 상수는 한번 선언하면 값을 변경할 수 없다.
const birth = "1997.01.01";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. 변수명은 문자, 숫자, $, _만 사용 가능
// 3-2. 첫 글자는 숫자 사용 불가능
// 3-3. 예약어 사용 불가능

// 4. 변수 명명 가이드
let salesCount = 1; // 변수명은 의미있게 작성
let refundCount = 2;
let totalCount = salesCount - refundCount;
