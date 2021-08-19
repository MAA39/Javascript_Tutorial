//配列の結合を行う際にスプレッド構文を用いることが多い
//具体的には配列や値の引き渡しにおいて用いられやすい。

const arr1 = [10, 20];
const arr2 = [30, 40];

const arr3 = [...arr1];
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = arr1;
arr5[0] = 0;

console.log(arr5);
console.log(arr1);

//参照渡し↑を行なってしまうと、元の配列にも影響を受けてしまう。
// 上記を防ぐためにも、一時的に配列をスプレッド構文に加え、そこから値を変更するやり方が望ましい。
//具体的には下記のようにして行う

const arr6 = arr4;
arr6[2] = 100;

console.log(arr6);
console.log(arr2);
