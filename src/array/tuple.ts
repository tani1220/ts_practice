export default function tupleSumple(): void {
  let tuple: [string, number] = ['ika', 123];
  tuple = ['ikura', 456];
  console.log(tuple);

  const tuples: [string, ...string[]] = ['aka', 'ao', 'kiiro'];
  tuples.push('midori');
  console.log(tuples);
}
