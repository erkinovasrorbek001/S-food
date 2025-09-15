import React, { useState } from 'react';
import Card from './Module/Module';
import ZakazlarModal from './Zakaz/Zakaz';
import './Section.css'
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [zakazlar, setZakazlar] = useState([]);
  const [isZakazOpen, setIsZakazOpen] = useState(false);
const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
};
  const allCards = [
    { id: 1, category: 'telefon',  prise:"2.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/3.b3983f5d5bf55e39af5c.png',  title: 'Spicy seasoned seafood', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 2, category: 'telefon',  prise:"3.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/1.cea416ceafccd1e59d4c.png',  title: 'x owls available', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 3, category: 'telefon',  prise:"5.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/6.9d87cc1a9f7fed43dcc1.jpg',  title: 'Salted Pasta with mushroom ', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 4, category: 'aksesuar',  prise:"3.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/7.abdb0ce5e88ad69c69da.jpg',  title: 'Beef dumpling in hot soup', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 5, category: 'aksesuar', prise:"9.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/8.a82f906546d6fe6dbad5.jpg',   title: 'Hot spicy fried rice with', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 6, category: 'aksesuar', prise:"2.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/6.9d87cc1a9f7fed43dcc1.jpg',   title: 'Spicy instant noodle with', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 7, category: 'noutbuk',  prise:"2.9so'm", img:'https://foods-react-router-dom.vercel.app/static/media/7.abdb0ce5e88ad69c69da.jpg',  title: 'constant noodle special', content: 'AИнформация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 8, category: 'noutbuk',  prise:"0.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/8.a82f906546d6fe6dbad5.jpg',  title: 'noodle with spinach', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
    { id: 8, category: 'noutbuk',  prise:"3.29so'm", img:'https://foods-react-router-dom.vercel.app/static/media/3.b3983f5d5bf55e39af5c.png',  title: 'Spicy seasoned seafood ', content: 'Информация: лаваш мясной classic, картофель-фри, пеп' },
  ];

  const filteredCards =
    selectedCategory === 'all'
      ? allCards
      : allCards.filter(card => card.category === selectedCategory);

  const handleZakaz = (card) => {
    if (!zakazlar.find(item => item.id === card.id)) {
      setZakazlar([...zakazlar, card]);
    }
  };

  const handleDeleteZakaz = (id) => {
    setZakazlar(zakazlar.filter(item => item.id !== id));
  };

  const handleEditZakaz = (id, newTitle) => {
    setZakazlar(
      zakazlar.map(item =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  return (
    <div className="app max-w-[1200px] mx-auto">
      <header className="app-header max-w-[1100px] mx-auto">
        <div className="link-menu gap-5 flex max-[600px]:flex-col max-[600px]:ml-5 ">
          <a className='rise underline-none text-[25px]' href="#" onClick={() => setSelectedCategory('all')}>All</a>
          <a className='rise underline-none text-[25px]' href="#" onClick={() => setSelectedCategory('telefon')}>Dessert</a>
          <a className='rise underline-none text-[25px]' href="#" onClick={() => setSelectedCategory('noutbuk')}>Food</a>
          <a className='rise underline-none text-[25px]' href="#" onClick={() => setSelectedCategory('aksesuar')}>national dishes</a>
        </div>

        <div className="zakaz-icon mr-5" onClick={() => setIsZakazOpen(!isZakazOpen)}>
          <MdOutlineShoppingCart /> <span className="count">{zakazlar.length}</span>
        </div>
      </header>

      <div className="card-container">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            img={card.img}
            title={card.title}
            content={card.content}
            prise={card.prise}
            onZakaz={() => handleZakaz(card)}
          />
        ))}
      </div>

      {isZakazOpen && (
        <ZakazlarModal
          items={zakazlar}
          onClose={() => setIsZakazOpen(false)}
          onDelete={handleDeleteZakaz}
          onEdit={handleEditZakaz}
        />
      )}
    </div>
  );
}

export default App;
