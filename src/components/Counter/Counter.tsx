import React from 'react';
import Button from "../Button/Button";
import s from "./Counter.module.css"

type CounterProps = {
    count: number,
    maxValue: number,
    startValue: number,
    changeCounter: (num: number) => void,
    resetCounter: (num: number) => void,
}

export const Counter = (props: CounterProps) => {
    const onclickChangeHandler = () => props.changeCounter(1);
    const onclickResetHandler = () => props.resetCounter(props.startValue);
    return (
        <div className={s.block}>
            <div className={props.count < props.maxValue ? s.count : s.countError}>{props.count}</div>
            <div className={s.buttonBlock}>
                <Button name={'Inc'} onClickHandler={onclickChangeHandler}
                        style={props.count < props.maxValue ? s.button : s.buttonDis}
                        disabled={props.count >= props.maxValue}/>
                <Button name={'Reset'} onClickHandler={onclickResetHandler}
                        style={props.count === props.maxValue ? s.button : s.buttonDis}
                        disabled={props.count < props.maxValue}
                />
            </div>
        </div>
    );
};