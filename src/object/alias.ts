export default function aliasSumple():void {
    //型エイリアス 再利用可能な型定義
    type Introduction = {
        readonly name: string
        lauguage: string
        country?: string
        age?: number
    }

    const mine: Introduction = {
        name: 'tani',
        lauguage: "ja",
        country: "japan",
        age: 23
    }

    const you: Introduction = {
        name: "Hoge",
        lauguage: "En"
    }
    console.log('sumple', mine,you);

    //合併型(union)と交差型(intersection)

    type lowPlan = {
        price: number
        days:number
        name:string
        service:string
        teacher:string
    }

    type highPlan = {
        price: number
        days:number
        name:string
        teacher:string
        benefits:string
    }

    type plan1 = lowPlan | highPlan

    type plan2 = lowPlan & highPlan

    const cheapPlan:plan1 = {
        price: 4000,
        days:365,
        name:'安いプラン',
        service:'初回サポートあり',
        teacher:'tani'
    }

    const expensivePlan:plan1 = {
        price:10000,
        days:365,
        name:'高いプラン',
        teacher:'Hoge',
        benefits:'年中サポートあり'
    }

    const superPlan:plan2 = {
        price:25000,
        days:365,
        name:'スーパープラン',
        teacher:'Foo',
        service:'マンツーマンサポート',
        benefits:'年中サポートあり'
    }

    console.log('sumple1',cheapPlan);
    console.log('sumple2',expensivePlan);
    console.log('sumple3',superPlan);
}