// 구조 분해 할당 : 값들을 분해해서 여러개로 나눠 담는 것
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 배열 원소 수보다 적게 할당할수도있고, 많이 할당할 수도 있다.
let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};
// age : myAge -> age를 myAge로 이름을 바꿔서 할당
let { age: myAge, hobby, name, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
// 객체 전체를 매개변수로 받지 않고, 객체의 특정 프로퍼티만 분해하여 받을 수 있게함.

//** 배열은 인덱스기반이라 순서가 중요하지만 객체는 KEY와 일치하는지가 중요. */

const user = { name: "박영희", age: 22 }; //객체 생성 key:value
const { name: userName, age: userAge } = user; //객체 구조 분해할당 기존이름 : 새이름
