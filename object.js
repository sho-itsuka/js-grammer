// 時間当てゲーム
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
    game.displayArea.innerText = seconds + '秒でした。すごい！';
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
  {}で宣言し、その中にプロパティを "プロパティ名：値" の形式で宣言する。
  複数ある場合には、「,」で区切る。

・まとめ
  オブジェクトを使って、関係のある複数の変数をまとめることができる。
  JavaScriptのオブジェクトは、プロパティを持つ。
  プロパティは、プロパティ名・値で構成される。

・オブジェクトから値を取得するには・・・
  オブジェクト名.プロパティ名
  オブジェクト名['プロパティ名']

・オブジェクトが持つ関数の実行は・・・
  オブジェクト名.プロパティ名();
*/


// 練習問題1 (食事と散歩が大好きな猫)
let catObj = {
  name: [`茶マル`, `chamalu`],
  age: 11,
  feature: `毛並みが茶色くて、丸っこい猫です。`,
  interests: [`食事`, `昼寝`, `夜の散歩`],
  bio: function() {
    console.log(`${catObj.name[0]}は${catObj.age}歳の${catObj.feature}`);
  },
  greeting: function() {
    console.log(`にゃおーにゃおにゃお！(${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！)`);
  }
}
catObj.bio();
catObj.greeting();


/* 練習問題2 (時間当てゲームを書き換える)
startとstopという関数で書かれていた箇所も、時間あてゲームの振る舞いの一部としてgameオブジェクト内に表現する！

let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  start: function() {
    game.startTime = Date.now();
    document.body.onkeydown = game.stop;
  },
  stop: function() {
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayArea.innerText = seconds + '秒でした。すごい！';
    } else {
      game.displayArea.innerText = seconds + '秒でした。残念。';
    }
  }
};
if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
  game.start();
}
*/
