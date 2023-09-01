import React, { useState } from 'react'
import './toggleSwitch.scss';

const ToggleSwitch = ({scrollBar, id, name}) => {
  const [checked, setChecked] = useState(true);


  const inputHandler = (e) => {

    // if (checked) {
    //   document.body.classList.add('dark');
    // } else {
    //   document.body.classList.remove('dark');
    // }

    
    setChecked((prevState) => !prevState);
    document.body.classList.toggle('dark');
    scrollBar.current.classList.toggle('black-scroll');
  }








  return (
    <div className='toggle-switch' onClick={inputHandler}>
        <input type="checkbox" className="toggle-switch-checkbox" name={name} id={id} checked={checked}/>
        <label htmlFor={name} className="toggle-switch-label">
                <span className="toggle-switch-inner"></span>
                <span className="toggle-switch-switch"></span>
        </label>
    </div>
  )
}

export default ToggleSwitch