export const Practice4 = () => {
  // TypeScript で渡す変数をしっかりと定義しておく
  // tsconfig.json の中で strict を true にすると型指定をしないとホバーでエラーが表示されるようになる
  // 移植のときとかは true にすると動かなくなるかも
  const getTotalFee = (num): number => {
    const total = num * 1.1;
    // ここでなんでも返すことができるので
    return total;
  };

  // 型を指定しておくとホバーしたらエラーが分かる
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);

    console.log(total);
  };

  return (
    <div>
      <p> 練習問題4 </p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
