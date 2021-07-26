// 判断是否为数字
function isNum(numValue) {
  let numPattern = /^\d*$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为数字
function idHundred(numValue) {
  let numPattern = /^[1-9]\d*00$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}
