import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import 'animate.css';
import './Wrapper.css'
import Wrapperbox from './Wrapperbox'
import { useTranslation } from 'react-i18next';
import i18n from '../../content/i18';
function Wrapper() {
   const [Modeopen, setModeopen]=useState(false);
   const [tooglemenu, settoglemenu]=useState(false);
     const {t} = useTranslation();
    const handlaChange = (event) =>{
      const selectedlenguage = event.target.value;
      i18n.changeLanguage(selectedlenguage)
    }
    
  return (
    <div className='Wrapper bg-white'>
      <div className='Wrapper__container h-[70px]  bg-white '>
        <nav className='Wrapper__nav flex px-4 pt-2 bg-white fixed w-full left-0  py-4 items-center right-0  max-w-[1300px] mx-auto justify-between'>
            <div className='logo'>
                <a className='logo__img max-[435px]:ml-5 max-[435px]:scale-110' href="/">SFood</a>
            </div>
            <ul className='Wrapper__list flex items-center gap-10'>
                <li className='Wrapper__item max-[435px]:hidden'><a className='Wrapper__link' href="#"><Link to="/">{t("Home")}</Link></a></li>
                <li className='Wrapper__item max-[535px]:hidden'><a className='Wrapper__link' href="#"><Link to="/About">{t("About")}</Link></a></li>
                <li className='Wrapper__item max-[640px]:hidden'><a className='Wrapper__link' href="#"><Link to="/Fillai">{t("Fillai")}</Link></a></li>
                <li className='Wrapper__item max-[825px]:hidden'><a className='Wrapper__link' href="#"><Link to="Contact">{t("Contact")}</Link></a></li>
            </ul>
            <div className='Wrapper__btn flex max-[435px]:hidden items-center gap-6 rounded-md'>
              <select onChange={handlaChange} name="lng" id="lng" className='outline-none border-b-1 border-b-gray-300 border-gray-200 px-2 py-1 uppercase shadow-md '>
                <option value="eng">English</option>
                <option value="rus">Russian</option>
                <option value="uzb">Uzbek</option>
              </select>
              
              <button onClick={() => setModeopen(true)} className="Wrapper__button w-full relative overflow-hidden px-4 py-2 font-bold rounded-full hover:border-[#8a2be2] border-2 border-[#8a2be2] dark:border-white bg-white dark:bg-[#8a2be2] text-[#8a2be2] dark:text-white hover:bg-[#8a2be2] dark:hover:bg-white hover:text-white dark:hover:text-[#8a2be2] transition-all duration-800 ease-in group whitespace-nowrap">
                <span className="relative z-10">{t("Bog'lanish")}</span>
                <span className="absolute inset-0 bg-[#8a2be2] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 origin-center z-0"></span>
              </button>
            <Wrapperbox isOpen={Modeopen} onClose={() => setModeopen(false)}/>
            </div>
           <div className='hidden max-[400px]:block'>

            {
              tooglemenu
              ?
              (<MdClose onClick={()=>settoglemenu(false)} className='text-[35px]  '/>)
              :
              (<HiOutlineBars3BottomRight onClick={()=>settoglemenu(true)} className='text-[35px]  '/>)
            }
            </div>
             {tooglemenu && (
         <ul className={`
        Wrapper__list 
        absolute top-full left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out
        flex flex-col items-center gap-6 py-6 shadow-md
        ${tooglemenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        md:flex md:flex-row md:static md:opacity-100 md:pointer-events-auto md:shadow-none md:py-0 md:justify-center
      `}>
        <li className="Wrapper__item">
          <Link className="Wrapper__link" to="/">Home</Link>
        </li>
        <li className="Wrapper__item ">
          <Link className="Wrapper__link" to="/About">About</Link>
        </li>
        <li className="Wrapper__item">
          <Link className="Wrapper__link" to="/Fillai">Fillai</Link>
        </li>
        <li className="Wrapper__item ">
          <Link className="Wrapper__link" to="/Contact">Contact</Link>
        </li>
      <select name="lng" id="lng" className='outline-none border-b-1 border-b-gray-300 border-gray-200 px-2 py-1 uppercase shadow-md '>
                <option value="uzb">Uzbek</option>
                <option value="rus">Russian</option>
                <option value="eng">English</option>
              </select>
      </ul>
      
      )}

        </nav>
      </div>
    </div>
  )
}

export default Wrapper



//   <Link to="/">dom</Link>
               
//         <Link to="Contact">Contact</Link>

//         <Link to="/Fillai">Fillai</Link>

//         <Link to="/About">About</Link>

//         <Link to="/Home">Home</Link>