/**
 * アロー関数
 */

//従来の関数

//  function func(str){
//    return str;
//  }

const func1 = function (str) {
  return str;
};

console.log(func1("従来の関数の書き方だよ"));

//アロー関数

const func2 = (str) => {
  return str;
};
console.log(func2("アロー関数です"));

//１行で内容が済む場合はreturnを書かない記述もできるよ
const func3 = (str) => str;

console.log(func3("returnを抜いたアロー関数です"));

//数値を二つ受け取った関数の書き方。

// const culc = (num1, num2) => {
//   return num1 + num2;
// };

//今回は１行で書くこともできるので、returnの省略も可能です。
const culc = (num1, num2) => num1 + num2;

console.log(culc(10, 20));
