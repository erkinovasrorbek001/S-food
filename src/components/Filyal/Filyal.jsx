import React from 'react'
import { Link } from 'react-router-dom'
import './Filyali.css'
function Filyal() {
  return (
    <div className='Filyal'>
      <div className='Filyali__container'>
        <nav className='Filyali__nav'>
            <ul className='Filyali__list max-w-[1200px] mx-auto my-15 '>
                <li className='Filyali__item shadow-2xl py-5 px-4 rounded-2xl'>
                    <Link to="/Magic" className='flex max-w-[1200px] mx-auto mr-auto max-[760px]:flex-col max-[760px]:text-center  items-center gap-50 '>
                    <span>
                     <h1 className='Filyali__title text-[40px] font-bold'>MaxWay Magic City </h1>
                   <p class="Filyali__text text-[20px] font-extralight">Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
                    </span>
                    <span className='max-[750px]:-mt-50'>
                      <p class="Fillay_text text-[20px] text-gray-400">Часы работы</p>
                      <p className='Filyali_text mt-3 text-center'>10:00-03:00</p>
                    </span>
                    </Link>
                </li>
               <li className='Filyali__item shadow-2xl py-5 px-4 rounded-2xl my-8'>
                    <Link to="/Toshkentmax" className='max-w-[1200px] mx-auto max-[760px]:flex-col max-[760px]:text-center flex mr-auto  items-center gap-57'>
                    <span>
                     <h1 className='Filyali__title text-[40px] font-bold'>MAx Way Toshkent City</h1>
                     <p className='Filyali__text text-[20px] font-extralight'>Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
                    </span>
                    <span className='max-[750px]:-mt-50'>
                      <p className='Filyali_title text-[20px] text-gray-400'>Часы работы</p>
                      <p className='Filyali_text mt-3 text-center'>10:00-03:00</p>
                    </span>
                    </Link>
                </li>
                <li className='Filyali__item shadow-2xl py-5  px-4 rounded-2xl my-8'>
                    <Link to="/Chilonzormax" className='flex max-w-[1200px] mx-auto max-[760px]:flex-col max-[760px]:text-center mr-auto  items-center gap-50'>
                    <span>
                     <h1 className='Filyali__title text-[40px] font-bold'>Max Way Chilonzor City</h1>
                   <p class="Filyali__text text-[20px] font-extralight">Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан</p>
                    </span>
                    <span className='max-[750px]:-mt-50'>
                      <p className='Filyali_title text-[20px] text-gray-400'>Часы работы</p>
                      <p className='Filyali_text mt-3 text-center'>10:00-03:00</p>
                    </span>
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Filyal