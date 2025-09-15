import React from 'react'
import './Abouts.css'
function Abouts() {
  return (
    <div className='Abouts'>
       <div className='Abouts__container '>
        <nav className='Abouts__nav  max-w-[1200px]  mx-auto pt-5'>
            <div className='Abouts__img'>
                <img className='rounded-md w-full h-[500px] hover:saturate-200 duration-1000 ease' src="https://foods-react-router-dom.vercel.app/static/media/about.c0e48b35ff94335b9398.png" alt="" />
            </div>
            <div className='Abouts__write'>
                <h1 className='Abouts__title font-bold text-[30px] py-7'>О компании</h1>
                <p className='Abouts__text w-[90%] text-[18px]'>Компания была основана в феврале 2005 года в Ташкенте. На сегодняшний момент у компании 11 филиалов в Ташкенте. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей. Ежедневно в MaxWay заказывают большое количество самых разных людей. И мы стараемся увеличивать как число посетителей, так и число филиалов. С каждым приготовленным блюдом мы оттачиваем детали фирменных рецептов и ищем идеальный баланс цены и качества, чтобы и дальше оставаться вашим любимым брендом. Если вдруг вы столкнулись с плохим обслуживанием или низким качеством приготовленной еды с нашей стороны, обязательно напишите нам на Мы с радостью принимаем как положительные, так и отрицательные отзывы. Жалоба гостя – подарок, благодаря которому нам есть куда расти.</p>
            </div>
        </nav>
       </div>
    </div>
  )
}

export default Abouts