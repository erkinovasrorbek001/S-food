import React from 'react';
import './Module.css';

const Card = ({ title, content, onZakaz, img, prise }) => {
  return (
    <div className="card ">
      <img className='w-[100%] rounded-md h-[200px] hover:saturate-120 duration-1000' src={img} alt={title} />
      <h3 className='mt-5 '>{title}</h3>
      <p className='text-[20px] font-semibold text-gray-300 text-wrap w-[90%]'>{content}</p>
      <span className='flex justify-between items-center pt-5'>
      <p className='text text-[20px]'>{prise}</p>
      <button onClick={onZakaz} className="Wrapper__button px-5 py-1 relative overflow-hidden  font-bold rounded-full hover:border-[#8a2be2] border-2 border-[#8a2be2] dark:border-white bg-white dark:bg-[#8a2be2] text-[#8a2be2] dark:text-white hover:bg-[#8a2be2] dark:hover:bg-white hover:text-white dark:hover:text-[#8a2be2] transition-all duration-800 ease-in group whitespace-nowrap">
                <span className="relative z-10">Zakaz berish</span>
                <span className="absolute inset-0 bg-[#8a2be2] dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 origin-center z-0"></span>
              </button>
      </span>
    </div>
  );
};

export default Card;
