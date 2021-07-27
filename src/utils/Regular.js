// 判断是否为 数字
export function isNum(numValue) {
  let numPattern = /^\d*$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为 六位
export function isSix(numValue) {
  let numPattern = /^\d{6}$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为 非零的正整数
export function isPositive(numValue) {
  let numPattern = /^\+?[1-9][0-9]*$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为 五位以内
export function isInFive(numValue) {
  let numPattern = /^\d{0,6}$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// export function isInFive(numValue) {
//   //"^[0-9]{1-5}$"
//   let numPattern = /^[0-9]{1-5}$/; //数字的正则表达式
//   let result = numPattern.test(numValue);
//   return result;
// }
