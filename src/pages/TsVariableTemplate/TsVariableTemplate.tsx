import { count } from 'console';
import { useEffect, useState } from 'react';

// declare type
type DataObject = { name: string; age: number };

function TsVariableTemplate() {
    // state
    const [stateString, setStateString] = useState<string>('');
    // state name,set state function,state type,default value state
    const [stateNumber, setStateNumber] = useState(0);
    const [stateBoolean, setStateBoolean] = useState(false);
    const [stateObject, setStateObject] = useState<DataObject>({ name: '', age: 0 });
    const [stateArray, setStateArray] = useState<string[]>(['a', 'b', 'c']);
    const [stateArrayObject, setStateArrayObject] = useState<DataObject[]>([]);

    // how to set state of each type
    useEffect(() => {
        // string
        setStateString('abc');
        // boolean
        setStateBoolean(true);
        // number
        setStateNumber(1);
        setStateNumber((prev) => prev + 1);
        // object
        setStateObject((prev) => ({ ...prev, name: 'abc' }));
        const objTemp = { ...stateObject, name: 'abc' };
        setStateObject((prev) => ({ ...prev, ...objTemp }));
        // array
        // set override array
        setStateArray(['b', '5', 'u']);
        // add array
        setStateArray((prev) => [...prev, 'b', '5', 'u']);
        // add array for each
        const arrTemp = [...stateArray];
        arrTemp.push('f');
        arrTemp.push('u');
        arrTemp.push('t');
        setStateArray([...arrTemp]);
        // array object same array string, just change type string to object
    }, []);
    // object feature
    useEffect(() => {
        let obj: DataObject = { name: 'anc', age: 10 };
        console.log('obj:', obj)
        // variable name,variable type, value of variable
        // use object: object.variable in object
        // 1) obj.age
        // 2) obj["age"]
        // 3) const x = "age" use obj[x]
        // 4) const { name, age } = obj use "name" or "age"

        // override variable
        let obj1 = { ...obj, name: 'xyz' }; // ...obj for rejection variable relative
        console.log('obj1:', obj1)
        // or
        let obj2 = { ...obj };
        console.log('obj2:', obj2)
        obj2.name = 'ttt';

        // object to array
        //Object.keys(obj).forEach((key) => {
        (Object.keys(obj) as (keyof DataObject)[]).forEach((key) => {    
            // key is object variable name
            // example use:
            let n = obj[key]; // value of key
        });
        Object.values(obj).forEach((value) => {
            // value is value of object
            // example use:
            let n = value;
        });

        // delete object
        let obj3: Omit<DataObject, 'name'> & { name?: DataObject['name'] } = { ...obj };
        console.log('obj3:', obj3)
        delete obj3.name;
        // delete obj3.age;
    }, []);
    // array feature
    useEffect(() => {
        const arrTemp: DataObject[] = [
            { name: 'abc', age: 10 },
            { name: 'def', age: 40 },
            { name: 'xyz', age: 23 },
        ];
        // variable name,variable type, value of variable
        // use array
        // index of array start at 0
        // 1) arrTemp[index] => arrTemp[0]
        // 2) const [x1,x2] = arrTemp

        // delete
        // Array<DataObject>.findIndex(predicate: (value: DataObject, index: number, obj: DataObject[])
        const indexOfItem = arrTemp.findIndex((f) => f.name === 'def');
        // Array<DataObject>.splice(start: number, deleteCount?: number)
        arrTemp.splice(indexOfItem, 1);

        // select array
        // Array<DataObject>.slice(start?: number, end?: number)
        const h = arrTemp.slice(0, 1);

        // find item
        // Array<DataObject>.find<S>(predicate: (value: DataObject, index: number, obj: DataObject[])
        // find return Oject, if not found return undefined
        // find want return boolean type
        const n = arrTemp.find((f) => f.name === 'def');
        // n = { name: 'def', age: 40 }

        // filter array
        // filter array always
        // filter want return boolean type
        const m = arrTemp.filter((f) => f.age > 0 && f.age < 30);

        // array loop
        // Array<DataObject>.map<string>(callbackfn: (value: DataObject, index: number, array: DataObject[])
        // map want return
        const o: string[] = arrTemp.map((item) => item.name);
        // o = ['abc','def','xyz']
        const p: (DataObject & { selected: boolean })[] = arrTemp.map((item) => ({ ...item, selected: false })); // add variable in array

        // forEach
        // Array<DataObject>.forEach(callbackfn: (value: DataObject, index: number, array: DataObject[]) => void
        let totalAge = 0;
        arrTemp.forEach((item) => {
            totalAge += item.age;
        });
    }, []);
    // funtion
    useEffect(() => {
        // short function
        // arrow function: ()=> or ()=>{}
        // type function void: ()=>void
        // function void: ()=>{}
        // type function has return: ()=>string
        // function has return: ()=> 'abc'
        // type function void and have argument string: (data:string)=> void
        // function void and have argument string: ("abc")=> void
        // type function has return and have argument string: (data:string)=> string
        // function has return and have argument string: ("abc")=> "xyz"
        // normal funtion
        // function void: function testFn(){}
        // function has return: function testFn(x1:number,x2:number){ return "abc"}
        // function Component: function ButtonItem(){ return <div>xxx</div>}
        // function Component: function ButtonItem({x1:number,x2:number}){ return <div>xxx</div>}
        //
    }, []);

    return (
        <div>
            {/* use variable in element must be use "{}" */}
            {/* set props in Component, if type not string must be use "{}" */}
            {/* example: onClick={()=>{}}, age={40} isActive={true} */}
            {/* loop array in element */}
            {/* array.map((item,index)=>(<div key={index}>{item}</div>)) */}
        </div>
    );
}

export default TsVariableTemplate;
