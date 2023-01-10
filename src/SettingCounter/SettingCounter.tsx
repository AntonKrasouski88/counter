import React from 'react';
import Button from "../components/Button/Button";
import style from "./SettingCounter.module.css"


export const SettingCounter = () => {
    return (
        <div className={style.blockSetting}>
            <div>
                <div>
                    <span>max value</span>
                    <input type={"number"}/>
                </div>
                <div>
                    <span>start value</span>
                    <input type={"number"}/>
                </div>
            </div>
            <div>
                <Button onClickHandler={()=>{}} name={'set'} disabled={false}/>
            </div>

        </div>
    );
};

