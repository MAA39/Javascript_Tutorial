/**
 * 分割代入
 */

const myProfile = {
  name: "田中",
  age: 19
};

const message = `名前は${myProfile.name}、年齢は${myProfile.age}歳です。`;
console.log(message);

//分割代入　＝　オブジェクトから指定のプロパティを抜き出して自由に使えるようになるもの
//課題：スコープはどの程度なのか

const { name, age } = myProfile;
const message2 = `名前は${name}、年齢は${age}歳です。`;
console.log(message2);

//配列の場合
const myProfile1 = ["田中", 18];
const message3 = `私の名前は${myProfile1[0]}、年齢は${myProfile1[1]}です。`;
console.log(message3);

//配列を用いた分割代入の場合、上記はオブジェクトとして受け取ったが配列は配列で
//しかも配列に登録されている順番で変数に値が格納される。

const [name1, age1] = myProfile1;
const message4 = `私の名前は${name1}、年齢は${age1}です。`;
console.log(message4);

const [age2, name2] = myProfile1;
const message5 = `私の名前は${name2}、年齢は${age2}です。`;
console.log(message5);
