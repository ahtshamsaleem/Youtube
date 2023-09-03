import React from 'react'

const Backdrop = (props) => {
  return (
    <div className={'w-[100vw] h-[100vh] top-0  bg-black/[0.3] fixed z-[15] backdrop-blur-[2px] ' + props.exClass} onClick={props.close}>

    </div>
  )
}

export default Backdrop


// ${props.top === '0' ? 'full' : '[calc(100vh-56px)]'}