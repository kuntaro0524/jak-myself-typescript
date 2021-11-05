export const Practice1 = () => {
  // TypeScript で渡す変数をしっかりと定義しておく
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  // 型を指定しておくとホバーしたらエラーが分かる
  const onClickPractice = () => calcTotalFee("1,000");

  return (
    <div>
      <p> 練習問題１ </p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
