import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Header.css'; // Optional, if custom styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const menuItems = [
  {
    title: 'MAXI BOX "POPULARNIY"',
    image: 'https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd',
  },
  {
    title: 'MAXI BOX "TREND"',
    image: 'https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc',
  },
  {
    title: 'Xot-dog',
    image: 'https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b',
  },
  {
    title: 'Maxi Box "Populary"',
    image: 'https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd',
  },
];

const MenuSlider = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true,
    ref: slider1,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Header max-w-[1200px] w-full pt-5 px-4 mx-auto">
      {/* Main image slider */}
      <Slider {...mainSettings} ref={slider1}>
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnail navigation */}
      <div className="mt-6">
        <Slider {...thumbSettings} ref={slider2}>
          {menuItems.map((item, idx) => (
            <div key={idx} className="px-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[110px] md:h-[130px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text text-center text-sm mt-2 font-medium capitalize">{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MenuSlider;
