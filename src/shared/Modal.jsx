import React, { useContext } from "react";
import Backdrop from "./Backdrop";
import { Context } from "../context/contextApi";



const Modal = ({ message }) => {
        const { isDark, setModal } = useContext(Context);
        console.log(isDark, setModal)
    return (
        <>
            <Backdrop  close={() => {setModal(false)}}/>
            <div className="flex items-center justify-center     w-[100vw] ">
            <div className='md:w-[400px] h-[100px] w-[calc(100vw-20px)]  bg-white/[0.9] fixed top-[35%]  md:top-[40%]  z-20 flex flex-col items-center justify-center rounded-xl backdrop-blur-sm '>
                <section className='font-semibold text-rose-600 text-2xl'>{message}</section>
                <button className="border-black border-2 rounded-lg px-8 py-1 bg-transparent font-semibold mt-2 hover:bg-gray-500/[0.1]"  onClick={() => {setModal(false)}}>Close</button>
            </div>

            </div>
            
        </>
    );
};

export default Modal;
