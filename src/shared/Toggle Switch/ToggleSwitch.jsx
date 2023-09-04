import React, { useState, useContext } from "react";
import "./toggleSwitch.scss";
import { Context } from "../../context/contextApi";

const ToggleSwitch = ({ scrollBar, id, name }) => {
    const [checked, setChecked] = useState(() => {
        if (document.body.classList.contains("dark")) {
            return false;
        } else {
            return true;
        }
    });
    const { isDark, setIsDark } = useContext(Context);

    const clickHandler = (e) => {
        setChecked((prevState) => !prevState);
        document.body.classList.toggle("dark");
        scrollBar.current.classList.toggle("black-scroll");
        setIsDark((prevState) => !prevState);
    };

    return (
        <div className='toggle-switch' onClick={clickHandler}>
            <input
                type='checkbox'
                className='toggle-switch-checkbox'
                name={name}
                id={id}
                checked={checked}
                onChange={() => {}}
            />
            <label htmlFor={name} className='toggle-switch-label'>
                <span className='toggle-switch-inner'></span>
                <span className='toggle-switch-switch'></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
