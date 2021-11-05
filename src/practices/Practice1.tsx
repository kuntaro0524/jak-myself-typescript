export const Practice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  // 文字列で数字をわたしてあげてもJavaScriptは数値として解釈してくれる
  const onClickPractice = () => calcTotalFee("1000");

  return (
    <div>
      <p> 練習問題１ </p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
