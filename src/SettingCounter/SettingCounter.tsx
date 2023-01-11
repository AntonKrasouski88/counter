import React from 'react';
import Button from "../components/Button/Button";
import style from "./SettingCounter.module.css"


export const SettingCounter = () => {
    return (
        <div className={style.blockSetting}>
            <div className={style.blockInputSpan}>
                <div className={style.score}>
                    <span className={style.spanText}>max value: </span>
                    <input type={"number"}/>
                </div>
                <div className={style.score}>
                    <span className={style.spanText}>start value:</span>
                    <input type={"number"}/>
                </div>
            </div>
            <div className={style.buttonBlock}>
                <Button onClickHandler={()=>{}} name={'set'} disabled={false}/>
            </div>

        </div>
    );
};

