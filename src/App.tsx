import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    const [count, setCount] = useState<number>(startValue);
    const [lockScreen, setLockScreen] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)

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
        if (lockScreen) {
            setLockScreen(!lockScreen);
        }

    }

    const changeValueStart = (numSt: number) => {
        setStartValue(numSt);
        if (lockScreen) {
            setLockScreen(!lockScreen);
        }
    }
    const changeCountValue = () => {
        localStorage.setItem('maxVal', JSON.stringify(maxValue));
        localStorage.setItem("startValue", JSON.stringify(startValue));
        setMaxValue(maxValue);
        setStartValue(startValue);
        setCount(startValue);
        setLockScreen(!lockScreen)
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
                lockScreen={lockScreen}
            />
        </div>
    );
}

export default App;
