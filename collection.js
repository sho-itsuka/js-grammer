// 配列 //
let classes = ['A組', 'B組', 'C組', 'D組'];

for (let grade = 1; grade < 4; grade++) {
  for (let i = 0; i < classes.length; i++) {
    // <p>○年○組</p> という文字列を作る
    document.write('<p>' + grade + '年' + classes[i] + '</p>');
  }
}

// ■ 配列に合わせたループ処理(配列の全要素を処理するループを作る時の基本パターン)
//   for (let i = 0; i < 配列名.length; i++) {
//     ループ処理
//   }

// ■ 二重ループ(多重ループの中でも、ループを2回使うもの)
//   for文の中にfor文を使ったループ処理のこと。

// ■ インクリメント
//   変数の値を1増やす。

// ■ デクリメント
//   変数の値を1減らす。


// 練習問題1 //
// 配列の中から最高得点は何点であるかを出力する！
let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for (let i = 0; i < scores.length; i++) {
  if (maxScore < scores[i]) {
    maxScore = scores[i];
  }
}
console.log('最高点は' + maxScore + '点です！');


// 補足 //
// ■ Math.max(...配列);
//   上記関数を使用することで最高得点を求めることができる！
let anotherScores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
console.log(`最高得点は${Math.max(...anotherScores)}点です！`);
// ...のことをスプレッド構文という。


/*
練習問題2
 「あ〜こ」までの文字を2つ組み合わせてペットの名前を考える！
*/
let petNames = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (let i = 0; i < petNames.length; i++) {
  for (let j = 0; j < petNames.length; j++) {
    document.write('<p>' + petNames[i] + petNames[j] + '</p>');
  }
}


/*
練習問題3
 1~5の数字を組み合わせて2桁の整数を作る！
*/
let chars = [1, 2, 3, 4, 5];

for (let i = 0; i < chars.length; i++) {
  for (let j = 0; j < chars.length; j++) {
    document.write('<P>' + chars[i] + chars[j] + '</p>');
  }
}
