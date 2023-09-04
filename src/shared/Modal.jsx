import React, { useContext } from "react";
import Backdrop from "./Backdrop";
import { Context } from "../context/contextApi";



const Modal = ({ message }) => {
        const { isDark, setModal } = useContext(Context);
        
    return (
        <>
            <Backdrop exClass='z-[22]' close={() => {setModal(false)}}/>
            <div className="flex items-center justify-center fixed z-[25]   w-[100vw] h-[100vh]">
            <div className='min-w-[350px] gap-0 flex-nowrap md:w-[400px] h-[100px] w-[calc(100vw-20px)]  bg-white/[0.9]  flex flex-col items-center justify-center rounded-xl backdrop-blur-sm '>
                <p className='font-semibold text-rose-600 text-xl md:text-2xl '>{message}</p>
                <button className="border-black border-2 rounded-lg px-8 py-1 bg-transparent font-semibold mt-2 hover:bg-gray-500/[0.1]"  onClick={() => {setModal(false)}}>Close</button>
            </div>

            </div>
            
        </>
    );
};

export default Modal;
