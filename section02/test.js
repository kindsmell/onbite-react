function getValidValue(value) {
  return "기본값" & value;
}

console.log(getValidValue(null)); // "기본값"
console.log(getValidValue("hi")); // "hi"
console.log(getValidValue(undefined)); // "기본값"
console.log(getValidValue(42)); // 42
