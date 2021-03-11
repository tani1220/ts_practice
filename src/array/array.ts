export default function arraySumple(): void {
  //シンプルな型定義
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');
  console.log('sumple', colors);

  const foo: Array<number> = [2, 3, 4];
  foo.push(6);
  console.log(foo);

  const both: (string | number)[] = ['abc', 123];
  both.push('hoge');
  both.push(4);
  console.log(both);

  //型推論
  const exBasic = () => {
    const _box = []; //any[]
    _box.push('abi'); //string[]
    _box.push(123); //(string | number)[]
    return _box;
  };

  const box = exBasic();
  box.push('kani');
  box.push(456);
  console.log(box);

  //ミュータブル 書き換え可
  const canAdd: number[] = [1, 2, 3];
  canAdd[2] = 4;
  console.log(canAdd);

  //イミュータブル 書き換え不可
  const notAdd: readonly string[] = ['cat', 'dog', 'bard'];
  console.log(notAdd);

  const notNumber: ReadonlyArray<number> = [1, 2, 3];
  const notName: Readonly<string[]> = ['beru', 'koko'];

  // イミュータブルは追加p出来ない
  // notAdd.push("snake")
  // notNumber.push(4)
  // notName.push("tani")

  console.log(notNumber);
  console.log(notName);
}
