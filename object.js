// 時間あてゲーム
let game = {
  startTime: null,
  displayArea: document.getElementById('display-area')
};

function start() {
  game.startTime = Date.now(); // 開始時刻を取得
  document.body.onkeydown = stop; // 「何かキーが押されたらstop関数を実行する」というコード。stop()としてしまうと、キーが押されたときではなく、OKが押されてstart関数が実行された時点でstop関数が実行され、その結果がonkeydownプロパティに代入されてしまう。
}

function stop() {
  let currentTime = Date.now();
  let seconds = (currentTime - game.startTime) / 1000;
  if (9.5 <= seconds && seconds <= 10.5) {
    game.displayArea.innerText = seconds + '秒でした。すごい。';
  } else {
    game.displayArea.innerText = seconds + '秒でした。残念。';
  }
}
if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
  start();
}

/*
■ 学習メモ
・confirm() 「確認する」
  confirm()は、alert()と同様に引数で渡した文字列をダイアログで表示する関数である。
  ただし、alert()と異なり、ボタン表示が「OK」と「キャンセル」の2つになる。
  戻り値が意味を持ち、OKボタンが押されるとtrue、キャンセルが押されるとfalseが返る。
  
・オブジェクト(object)
  プロパティという、「名前」と「値」のセットを複数持つことができる。
  {}で宣言し、その中にプロパティを プロパティ名：ああたい の形式で宣言する。
  複数ある場合には、「,」で区切る。
*/
