import React from 'react'
import { Link } from 'react-router-dom'
import { PiTelegramLogo } from "react-icons/pi";
import { LuInstagram } from "react-icons/lu";
import './Footer.css'
import { RiYoutubeLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='Footer mt-5'>
      <div className='Footer__container bg-[#8a2be2] text-white'>
        <nav className='Footer__nav  '>
          <ul className='Footer__list max-w-[1200px] mx-auto p-4 flex-wrap flex justify-between'>
            <li className='Footer__item flex-col flex'>
              <h1 className='Footer__logo text-[30px]'><Link to="/"></Link>S-Food</h1>
              <a className='Footer__link text-[20px]' href="#"><Link to="/">Home</Link></a>
              <a className='Footer__link text-[20px]' href="#"><Link to="/About">About</Link></a>
              <a className='Footer__link text-[20px]' href="#"><Link to="/Fillai">Fillai</Link></a>
              <a className='Footer__link text-[20px]' href="#"><Link to="/Contact">Contact</Link></a>
            </li>
            <li className='Footer__item'>
              <h1 className='Footer__logo text-[30px] font-bold '>Присоединяйтесь к нам</h1>

              <span className='flex text-[30px] items-center mx-auto text-center '>
                <PiTelegramLogo className='border hover:border-sky-500 hover:bg-sky-600  ml-5 mt-3 all ease duration-900 text-[#fff] w-[40px] px-2 rounded-[10px] hover:rounded-[30px]  h-[40px]'/>
                <RiYoutubeLine className='border hover:bg-red-500 ml-5 mt-3 all ease duration-900 text-[#fff] hover:border-red-600 w-[40px] px-2 rounded-[10px]  hover:rounded-[30px] h-[40px]'/>
                <LuInstagram className='border hover:bg-[#ff7f7f8f] ml-5 mt-3 all ease duration-900 text-[#fff] hover:border-red-700 w-[40px] px-2 rounded-[10px] hover:rounded-[30px]  h-[40px]'/>
              </span>

            </li>
            <li className='Footer__item '>
              <h1 className='Footer__logo text-[30px]'>Заказывайте по номеру</h1>
              <p className='number text-[20px] duration-500 hover:text-black'>+998934629992</p>
            </li>
          </ul>
          <hr className= ' mt-5 bg-[#fff]  h-[1px] w-full'/>
          <span className='flex justify-between px-5 max-w-[1200px] py-2 mx-auto' >
            <p className='Header_item'>© 2025–2026, ООО «Asrorbek Erkinov», официальный сайт</p>
            <p className='Header__text'>Developed by Asrorbek</p>
          </span>
        </nav>
      </div>
    </div>
  )
}

export default Footer