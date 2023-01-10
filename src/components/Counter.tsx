import React from 'react';
import Button from "./Button/Button";
import s from "Counter.module.css"

type CounterProps = {
    count: number,
    changeCounter: (num: number)=>void,
    resetCounter: (num:number)=>void,
}

export const Counter = (props: CounterProps) => {
    const onclickChangeHandler = () => props.changeCounter(1);
    const onclickResetHandler = () => props.resetCounter(0);
    return (
        <div className={s.block}>
            <div>{props.count}</div>
            <div>
                <Button name={'Add'} onClickHandler={onclickChangeHandler}/>
                <Button name={'Reset'} onClickHandler={onclickResetHandler}/>
            </div>
        </div>
    );
};