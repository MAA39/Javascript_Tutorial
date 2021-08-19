/**
 * mapやfilterを用いた配列の処理
 *
 * for文をほぼ使用しなくなるよ。
 */

const nameArr = ["田中", "山田", "高橋"];

for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index}番目は${nameArr[index]}です`);
}

// const nameArr2 = nameArr.map((name) => {
//   console.log(name);
//   return name;
// });

// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//map関数の２番目の引数には0から数字が入ってくるらしい。すご。

nameArr.map((name) => console.log(`${name}です`));

const numArr = [1, 2, 3, 4, 5];
const oddNumberArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(oddNumberArr);

//filterはreturnの後に条件式を記載して、条件に合うものだけ返すような処理。

//以下は田中の場合にのみ「さん」をつけないもの
const nameTanaka = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(nameTanaka);
