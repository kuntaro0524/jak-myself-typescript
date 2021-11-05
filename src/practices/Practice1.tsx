export const Practice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  // カンマ区切りの数値なんかはわたしたら文字列になってしまう
  const onClickPractice = () => calcTotalFee("1,000");

  return (
    <div>
      <p> 練習問題１ </p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
