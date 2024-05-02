import React, { useState } from 'react'
import pizzaImg from "../../images/pizza.png";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Card() {
    const [testo, setTesto] = useState('тонкое');
    const [size, setSize] = useState(25);
    return (
        <div className='card'>
            <img src={pizzaImg} alt="Сырная пицца" />
            <p>Сырная</p>
            <div className='card-select'>
                <div className='card-select-inner'>
                    <button onClick={() => setTesto('тонкое')} className={testo === 'тонкое' ? 'btn-active' : null}>тонкое</button>
                    <button onClick={() => setTesto('традиционное')}  className={testo === 'традиционное' ? 'btn-active' : null}>традицинонное</button>
                </div>
                <div className='card-select-inner'>
                    <button onClick={() => setSize(25)}  className={size === 25 ? 'btn-active' : null}>25 см</button>
                    <button onClick={() => setSize(30)}   className={size === 30 ? 'btn-active' : null}>30 см</button>
                    <button onClick={() => setSize(40)}   className={size === 40 ? 'btn-active' : null}>40 см</button>
                </div>
            </div>
            <div className='card-end'>
                <p>от 550 сом</p>
                <button>
                    <AddOutlinedIcon sx={{color: 'white'}}/>
                    Добавить</button>
            </div>
        </div>
    );
}
