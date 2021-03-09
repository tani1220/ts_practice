export default function unknownSunmle(): void {
  const unknownNumber: unknown = 10; //ナンバーを代入したためunknownはnumber型になる
  console.log('sumple1', typeof unknownNumber, unknownNumber);

  const knowNumber: boolean = unknownNumber === 'hoge';
  console.log('sumple2', typeof knowNumber, knowNumber);

  //const tes = unknownNumber + 10;  unknownのためエラーになる
}
