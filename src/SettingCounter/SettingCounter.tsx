import React, {ChangeEvent} from 'react';
import Button from "../components/Button/Button";
import style from "./SettingCounter.module.css"

type SettingCounterType = {
    valueMax: number,
    valueStart: number,
    changeValueMax: (num: number)=>void,
    changeValueStart: (num: number)=>void,
}


export const SettingCounter = (props:SettingCounterType) => {
    const onChangeValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValueMax(+e.currentTarget.value)
    }

    const onChangeValueStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValueStart(+e.currentTarget.value)
    }

    return (
        <div className={style.blockSetting}>
            <div className={style.blockInputSpan}>
                <div className={style.score}>
                    <span className={style.spanText}>max value: </span>
                    <input value={props.valueMax} type={"number"} onChange={onChangeValueMaxHandler}/>
                </div>
                <div className={style.score}>
                    <span className={style.spanText}>start value:</span>
                    <input value={props.valueStart} type={"number"} onChange={onChangeValueStartHandler}/>
                </div>
            </div>
            <div className={style.buttonBlock}>
                <Button onClickHandler={()=>{}} name={'set'} disabled={false}/>
            </div>

        </div>
    );
};

