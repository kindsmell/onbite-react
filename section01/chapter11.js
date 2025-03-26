// 함수
let area1 = getArea(10, 20); //함수 호출
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 함수 선언식은 호이스팅 가능. (호출과 선언의 위치관계 상관 없음.)

// 함수 표현식은 호이스팅 불가능. (호출보다 선언이 먼저 되어야함.)

// 함수 선언(함수 정의)
//function 이름(매개변수) { 실행문 }
// c언어와는 다르게, return형이나 매개변수 자료형이 필요하지 않다.

function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  //c언어에서는 중첩 함수 정의 불가능.
  another();
  let area = width * height;

  return area; //반환값.

  //return 문은 함수를 종료시킴 -> return 이후의 코드는 실행 x
}
