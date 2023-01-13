import React, { useEffect, useState } from 'react';
import './App.css';
//import { Counter } from "./components/Counter/Counter";
import { SettingCounter } from "./components/SettingCounter/SettingCounter";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(1);
    //const [count, setCount] = useState(startValue);
    useEffect(()=>{
        localStorage.setItem('maxVal', JSON.stringify(maxValue))
    },[maxValue]);
    useEffect(()=>{
        
        let maxString = localStorage.getItem('maxVal');
        //let startString = localStorage.getItem("startValue");
        if(maxString) {
            //let start = JSON.parse(startString);
            setMaxValue(JSON.parse(maxString));
           // setStartValue(start);
}},[])
    
    /* useEffect(()=>{
        localStorage.setItem("startValue", JSON.stringify(startValue))
    },[startValue]); */
   


   /*  const changeCounter = (num: number) => {
        if (count < maxValue) {
            setCount(count + num);
        }
    };
    const resetCounter = (num: number) => {
        setCount(num);
    }; */
    const changeValueMax = (numMax: number) => {
        setMaxValue(numMax);
    }
    const changeValueStart = (numSt: number) => {
        setStartValue(numSt)
    }
    /* const changeCountValue = () => {
            setMaxValue(maxValue);
            setStartValue(startValue);
        } */

    return (
        <div className="App">
            <SettingCounter 
                valueMax={maxValue} 
                valueStart={startValue}
                changeValueMax={changeValueMax}
                changeValueStart={changeValueStart}
                changeCounterValue = {()=>{}}
                />
           
        </div>
    );
}

export default App;
