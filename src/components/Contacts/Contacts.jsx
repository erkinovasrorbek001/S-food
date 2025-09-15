import React from 'react'
import './Contacts.css'
function Contacts() {
  return (
    <div className='Contacts'>
      <div className='Contacts__container pt-5'>
        <nav className='Contacts__nav max-w-[1200px] mx-auto '>
            <div className='Contact__top  shadow-2xl px-8 rounded-2xl'>
                <h1 className='Contacts__title text-[30px] font-bold max-[515px]:text-[20px]'>Телефоны контактных центров</h1>
                <p className='Contacts__text text-[20px] max-[515px]:hidden'>Круглосуточно, без выходных</p>
                <span>
                    <span className='flex justify-between items-center max-[515px]:flex-col py-6'>
                    <p className='max-[515px]:mr-auto'>Ташкент</p>
                    <p className='text-blue-600 font-serif max-[515px]:mr-auto duration-700 hover:underline'>+998934629992</p>
                    </span>
                    <hr />
                     <span className='flex justify-between max-[515px]:flex-col  items-center py-6'>
                    <p className='max-[515px]:mr-auto'>Наманган</p>
                    <p className='text-blue-600 max-[515px]:mr-auto font-serif duration-700 hover:underline'>+998993253304</p>
                    </span>
                    <hr />
                     <span className='flex justify-between items-center py-6 max-[515px]:flex-col'>
                    <p className='max-[515px]:mr-auto'>Алмалык</p>
                    <p className='text-blue-600 max-[515px]:mr-auto font-serif duration-700 hover:underline'>+998934629992</p>
                    </span>
                </span>
            </div>
            <div className='Contacts__center my-20 shadow-2xl py-4 px-8 rounded-2xl'>
              <span >
                  <h1 className='Contacts__title text-[30px] font-extralight max-[515px]:text-[20px]'>Отдел поддержки клиентов</h1>
                <span className='flex py-4 items-end max-[515px]:flex-col justify-between '>
                  <p className='Contacts__text max-[515px]:mr-auto'>Электронная почта</p>
                <a href="#" className='text-blue-600 font-serif max-[515px]:mr-auto duration-700 hover:underline'>windowsa786@gmail.com</a>
                </span>
              </span>
              <hr />
              <span className='flex justify-between p-4 max-[515px]:flex-col items-center'>
              <p className='Contacts_text max-[515px]:mr-auto max-[350px]:ml-0'>Контактный телефон</p>
              <a href="#" className='text-blue-600 font-serif max-[515px]:mr-auto max-[350px]:ml-0 duration-700 hover:underline'>+998975030513</a>  
              </span>
          
            </div>
            <div className='Contacts__bottom  shadow-2xl my-20 p-8 rounded-2xl'>
              <h1 className='Contacts__title text-[40px] max-[515px]:text-[20px]'>Правообладателям</h1>
              <p className='Contacts_text max-[515px]:hidden'>По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
              <hr className='mt-5'/>
              <span className='p-4 flex items-center max-[515px]:flex-col justify-between'>
                <p className='Contacts__bottom_text max-[515px]:mr-auto'>Электронная почта</p>
                <a href="#" className='text-blue-600 font-serif max-[515px]:mr-auto duration-700 hover:underline'>windowsa786@gmail.com</a>
              </span>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Contacts