import React from 'react'

const Modal = (props) => {
  return (
    <div className='w-full h-full bg-black/[0.3] fixed z-[5]' onClick={props.close}>

    </div>
  )
}

export default Modal