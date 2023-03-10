import React from 'react';
import './CardTop.css'


const CardTop = (props) => {
  return (
    <div className='card-my p-3 my-3'>
        <div className='d-flex justify-content-between'>
        <img src={props.icon} alt='icon'></img>
        <div>
            <p className='card-text text-success text-end'>{props.percentage}%</p>
            <p className='card-text text-white text-end'>${props.price}</p>
        </div>
        </div>
        <p className='text-white'>{props.name}</p>
        <p className='text-white fs-5 d-inline'>{props.credit} </p><p className='text-white d-inline fw-light'>{props.short}</p>
    </div>
  );
}

export default CardTop;
