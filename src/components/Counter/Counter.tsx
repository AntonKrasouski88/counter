import React from 'react';
import Button from "../Button/Button";
import s from "./Counter.module.css"

type CounterProps = {
    count: number,
    changeCounter: (num: number) => void,
    resetCounter: (num: number) => void,
}

export const Counter = (props: CounterProps) => {
    const onclickChangeHandler = () => props.changeCounter(1);
    const onclickResetHandler = () => props.resetCounter(0);
    return (
        <div className={s.block}>
            <div className={props.count < 5 ? s.count : s.countError}>{props.count}</div>
            <div className={s.buttonBlock}>
                <Button name={'Inc'} onClickHandler={onclickChangeHandler}
                        style={props.count < 5 ? s.button : s.buttonDis}
                        disabled={props.count < 5}/>
                <Button name={'Reset'} onClickHandler={onclickResetHandler}
                        style={props.count === 5 ? s.button : s.buttonDis}
                        disabled={props.count >= 5}
                />
            </div>
        </div>
    );
};