import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./SettingCounter/SettingCounter";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] =useState(0);

    const changeCounter = (num: number) => {
        if (count < 5) {
            setCount(count + num);
        }

    }
    const resetCounter = (num: number) => {
        setCount(num);
    }


    return (
        <div className="App">
            <SettingCounter/>
            <Counter count={count}
                     changeCounter={changeCounter}
                     resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;
