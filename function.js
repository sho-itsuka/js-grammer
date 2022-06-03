/*
■ 関数について
  ・関数は、ひとかたまりの処理をまとめたもの
  ・関数では、必要に応じて
    ①引数として、処理に値を与えることができる。
    ②戻り値として、処理の結果となる値を返すことができる
*/

let myBirthTime = new Date('1982-12-17 12:30'); // 1982年12月17日12:30を誕生日として、myBirthTimeという変数に代入
function updateParagraph() {  // updateParagraphという関数が呼び出される度に経過秒数が最新のものに置き換わる
  let now = new Date(); // 関数内で、まず現在の日時の値を取得して、nowという変数に代入
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000; // 日時の値から、「.getTime()」を実行することで、その日時の1970年1月1日からのミリ秒(1000分の1秒)を取得できる。
  document.getElementById('birth-time').innerText = 
    '生まれてから' + seconds +'秒経過。';
}
setInterval(updateParagraph, 50); // setIntervalは、指定された関数を、指定されたミリ秒ごとに繰り返し実行するという関数。ここでは、updateParagraph関数を、50ミリ秒で繰り返し実行するようになる。

/*
■まとめ
1, 誕生日の日時を取得し、
2, updateParagraph関数を定義し、
3, 関数の中で現在の日時を取得し、
4, 誕生日からの秒数を取得し、
5, HTMLのpタグの中身を更新する。
*/


/*
練習問題1
  どのような半径に対しても面積を求められる関数を作る！
*/
function areaOfCircle(r) {
  let area = r * r * 3.14;
  return area;
}
document.write(`<p>半径5cmの円の面積は${areaOfCircle(5)}です。</p>`);
document.write(`<p>半径10cmの円の面積は${areaOfCircle(10)}です。</p>`);
document.write(`<p>半径15cmの円の面積は${areaOfCircle(15)}です。</p>`);
/*
以下のような書き方もできるが、戻り値のためになるべく変数を宣言する癖をつけておく！(より複雑な関数になった時は「どんな意味の値が戻り値になるのか」ということを明確にした方が可読性が上がり、結果的にコードの保守性・メンテナンス性が上がる)
  function areaOfCircle(r) {
    return r * r * 3.14;
  }
*/


/*
練習問題2
  コラッツ問題をシミュレーションする関数を作成する！
●コラッツ問題：まだ証明されていない数学の問題
任意の正の整数nに対して
・nが偶数である場合は、nを2で割る。
・nが奇数である場合は、nに3をかけて1を足す。
この手順を繰り返していくと、どういうわけか1に辿り着くというもの。
*/

function collatz(n) {
  console.log(`nの値が${n}になりました。`);
  if (n === 1) {
    console.log(`終了`);
  } else if (n % 2 === 0) {
    collatz(n / 2);
  } else {
    collatz(n * 3 + 1);
  }
}

