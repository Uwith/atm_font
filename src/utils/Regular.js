// 判断是否为 数字
function isNum(numValue) {
  let numPattern = /^\d*$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为 六位
function isSix(numValue) {
  let numPattern = /^\d{n}$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

// 判断是否为 非零的正整数
function isSix(numValue) {
  let numPattern = /^\+?[1-9][0-9]*$/; //数字的正则表达式
  let result = numPattern.test(numValue);
  return result;
}

//判断输入内容是否为空
function IsNull() {
  let str = document.getElementById('str').value.trim();
  if (str.length === 0) {
    alert('对不起，文本框不能为空或者为空格!');//请将“文本框”改成你需要验证的属性名称!
  }
}

