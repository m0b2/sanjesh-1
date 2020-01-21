import React from 'react';
import './card.style.css';

const Card = () => {

    return (
        <div className='card'>
        {/* <img className='card-image' src='/experiments.png'/> */}
        <span className="border-bottom cardspan"/>
            <div className={'card-text-container'}>
            <h1 className='cardtitle'>سوالات سنجش فردی</h1>
                
            </div>

        </div>
    )
}


export default Card;