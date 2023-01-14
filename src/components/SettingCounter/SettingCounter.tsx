import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import style from "./SettingCounter.module.css"

type SettingCounterType = {
    valueMax: number,
    valueStart: number,
    changeValueMax: (num: number)=>void,
    changeValueStart: (num: number)=>void,
    changeCounterValue:()=>void,
    lockScreen: boolean,
}


export const SettingCounter = (props:SettingCounterType) => {
    const onChangeValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const num = +e.currentTarget.value;
        if (num >= props.valueStart) {
            props.changeValueMax(num);
        }
    }
    const onChangeValueStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const num = +e.currentTarget.value;
        if (num >= -1 && num <= props.valueMax) {
            props.changeValueStart(num);
        }
    }
    const onClickValueHandler = () => {
        if (props.valueMax > props.valueStart) {
            props.changeCounterValue();
        }

    }

    const styleButton = () => props.valueStart < props.valueMax ? style.button : style.buttonDis


    return (
        <div className={style.blockSetting}>
            <div className={style.blockInputSpan}>
                <div className={style.score}>
                    <span className={style.spanText}>max value: </span>
                    <input
                        value={props.valueMax}
                        type={"number"}
                        onChange={onChangeValueMaxHandler}
                        className={props.valueStart === props.valueMax ? style.inputError: ''}
                    />
                </div>
                <div className={style.score}>
                    <span className={style.spanText}>start value:</span>
                    <input
                        value={props.valueStart}
                        type={"number"}
                        onChange={onChangeValueStartHandler}
                        className={props.valueStart === props.valueMax || props.valueStart < 0 ? style.inputError: ''}
                    />
                </div>
            </div>
            <div className={style.buttonBlock}>
                <Button
                    onClickHandler={onClickValueHandler}
                    name={'set'}
                    style={styleButton()}
                    disabled={props.valueStart === props.valueMax}/>
            </div>

        </div>
    );
};

