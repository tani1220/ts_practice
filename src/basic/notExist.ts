export default function notExistSumple(): void {
  let name = null;
  console.log('sumple', typeof name, name);

  name = 'tani';

  if (name) {
    console.log('今は' + name);
  } else {
    console.log('今は' + name);
  }

  let age = undefined;
  console.log('sumple2', typeof age, age);

  age = 23;
  if (age) {
    console.log('年齢は' + age + 'です。');
  } else {
    console.log('年齢は秘密です。');
  }
}
