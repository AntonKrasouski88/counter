import React from 'react';
import Button from "../Button/Button";
import s from "./Counter.module.css"

type CounterProps = {
    count: number,
    maxValue: number,
    startValue: number,
    changeCounter: (num: number) => void,
    resetCounter: (num: number) => void,
    lockScreen: boolean,
}

export const Counter = (props: CounterProps) => {
    const onclickChangeHandler = () => props.changeCounter(1);
    const onclickResetHandler = () => props.resetCounter(props.startValue);
    const screenCount = () => {
        return (
            props.lockScreen ?
                <div className={props.count < props.maxValue ? s.count : s.countError}>
                    <div>
                        {props.count}
                    </div>
                </div> : props.maxValue === props.startValue || props.startValue < 0 ?
                    <div className={s.incorrectValue}>
                        Incorrect Value
                    </div> :
                    <div className={s.count}>
                        <span>Enter values and press set</span>
                    </div>
        )
    }
    return (
        <div className={s.block}>
            {screenCount()}
            <div className={s.buttonBlock}>
                <Button name={'Inc'} onClickHandler={onclickChangeHandler}
                        style={props.count < props.maxValue && props.lockScreen ? s.button : s.buttonDis}
                        disabled={props.count >= props.maxValue || !props.lockScreen}/>
                <Button name={'Reset'} onClickHandler={onclickResetHandler}
                        style={props.count === props.maxValue && props.lockScreen && props.lockScreen ? s.button : s.buttonDis}
                        disabled={props.count < props.maxValue || !props.lockScreen}
                />
            </div>
        </div>
    );
};