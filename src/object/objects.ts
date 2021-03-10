export default function allPeople():void {
    //オブジェクトリテラル記法
    let people: {
        name: string
        language: string
        age: number
    } = {
        name: 'shun',
        language: 'ja',
        age: 23
    }
    console.log('sumple',people);

    people = {
        name: 'Hoge',
        language: 'En',
        age: 26
    }
    console.log('sumple2',people);

    //readonly は上書きできない
    const yourIntroduction: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age:23,
        lastName: "shun",
        firstName: "tani"
    }
    yourIntroduction.gender = "male"
    console.log('sumple3',yourIntroduction);

    //インデックスシグネチャ 複数の同じパターンの型定義を一つの定義で行える
    const foodColor: {
    [foodName:string]: string
    } = {
        apple: 'red',
        banana: 'yelow',
        egg: 'white'
    }
    foodColor.cucumber = 'green'
    console.log('sumple4',foodColor);
}
