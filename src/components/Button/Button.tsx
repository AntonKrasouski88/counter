import React from 'react';

type ButtonProps = {
    onClickHandler: () => void,
    name: string,
    style?: string,
    disabled: boolean,
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClickHandler}
                className={props.style}
                disabled={!props.disabled}>{props.name}</button>
    );
};

export default Button;