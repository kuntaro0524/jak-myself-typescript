export const Practice3 = () => {
  // TypeScript で渡す変数をしっかりと定義しておく
  // さらに返却値を指定する
  // 例えば戻り値に型指定をしていない場合などは
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    // ここでなんでも返すことができるので
    return total.toString();
  };

  // 型を指定しておくとホバーしたらエラーが分かる
  const onClickPractice = () => {
    let total: number = 0;
    // ここで文字列が返ってくる可能性があったけど、変数に「型」を指定しておくことでエディタ上に「型があっていないよ」
    // ということが表示されるので何が問題かを特定しやすい
    // このコードはlintで「型が違うよ）と言われるもの
    total = getTotalFee(1000);

    console.log(total);
  };

  return (
    <div>
      <p> 練習問題3 </p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
