import React from 'react'

const Backdrop = (props) => {
  return (
    <div className='w-full h-full bg-black/[0.3] fixed z-[15] backdrop-blur-[2px]' onClick={props.close}>

    </div>
  )
}

export default Backdrop