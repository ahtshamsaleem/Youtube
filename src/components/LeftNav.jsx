import React, {useContext, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { BiHeart } from 'react-icons/bi'

import LeftNavMenuItem from './LeftNavMenuItem';
import { categories } from '../utility/constants'
import { Context } from '../context/contextApi';
import ToggleSwitch from '../shared/Toggle Switch/ToggleSwitch';


const LeftNav = ({childStyle}) => {

  const { selectCategories, setSelectCategories, mobileMenu, setMobileMenu} = useContext(Context);

  const navigate = useNavigate();

  const ref = useRef();

  const clickHandler = (name, type) => {
    setMobileMenu(false)
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

useEffect(() => {
  ref.current.classList.add(childStyle);
  
 

 






  ref.current.addEventListener('mouseenter', () => {
    ref.current.classList.add('show-scroll-bar');
  });

  ref.current.addEventListener('mouseleave', () => {
    ref.current.classList.remove('show-scroll-bar');
  });


}, [childStyle]);




  return (
    <div ref={ref} className={'custom-scroll-bar block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative md:z-10 z-20 translate-x-[-240px] md:translate-x-0 transition-all dark:bg-white'} style= {{ transform: mobileMenu ? 'translateX(0)' : '',
        
     }}>
      <div className="flex px-5 pr-0 flex-col w-[calc(240px-3vw)] ">
        {categories.map((item) => {
          
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  classNam={
                    item.name === selectCategories ? 'bg-white/[0.15] dark:bg-stone-300/[0.6]' : null
                  }
                />
                {item.divider && <hr className="my-5 border-white/[0.3] dark:border-black/[0.3] " />}
              </React.Fragment>
            );
        })}

        <hr className="my-5 border-white/[0.3] dark:border-black/[0.3]" />
        <div className="text-white/[0.5] text-[14px] flex flex-row  items-center  whitespace-nowrap  dark:text-black/[0.6]">
          Made with <div className='text-lg'><BiHeart className='text-red-600 mr-2 ml-1'/></div> Ihtisham Ul Haq
        </div>
      </div>

      <div className='text-white/[0.5] text-[14px] ml-12  dark:text-black/[0.6]'> Dark Mode : {" "} <ToggleSwitch scrollBar={ref}/> </div>
    </div>
  )
}

export default LeftNav;