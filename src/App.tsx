import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    const [count, setCount] = useState(startValue);
    const [lockScreen, setLockScreen] = useState<boolean>(false);

    useEffect(() => {
        let maxString = localStorage.getItem('maxVal');
        let startString = localStorage.getItem("startValue");
        if (maxString && startString) {
            setStartValue(JSON.parse(startString));
            setMaxValue(JSON.parse(maxString));
            setCount(JSON.parse(startString));
        }
    }, [])

    /*useEffect(() => {
        localStorage.setItem('maxVal', JSON.stringify(maxValue))
    }, [maxValue]);*/

    /*useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [startValue]);*/


    const changeCounter = (num: number) => {
        if (count < maxValue) {
            setCount(count + num);
        }
    };
    const resetCounter = (num: number) => {
        setCount(num);
    };
    const changeValueMax = (numMax: number) => {
            setMaxValue(numMax);
    }

    const changeValueStart = (numSt: number) => {
        setStartValue(numSt);
    }
    const changeCountValue = () => {
        localStorage.setItem('maxVal', JSON.stringify(maxValue));
        localStorage.setItem("startValue", JSON.stringify(startValue));
        setMaxValue(maxValue);
        setStartValue(startValue);
        setCount(startValue);
    }

    return (
        <div className="App">
            <SettingCounter
                valueMax={maxValue}
                valueStart={startValue}
                changeValueMax={changeValueMax}
                changeValueStart={changeValueStart}
                changeCounterValue={changeCountValue}
                lockScreen={lockScreen}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                changeCounter={changeCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;
