export const Practice2 = () => {
  // TypeScript で渡す変数をしっかりと定義しておく
  // さらに返却値を指定する
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  // 型を指定しておくとホバーしたらエラーが分かる
  const onClickPractice = () => {
    const totalFee = getTotalFee(1000);
    console.log(totalFee);
  };

  return (
    <div>
      <p> 練習問題１ </p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
