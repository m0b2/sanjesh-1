import React from 'react';
import './icon-card.style.css';


const IconCard = ({ title, icon, number }) => {



    return (

        <div className='number-static'>
            <div>
                <img className='icon-card-img' src={icon} alt={title} />
            </div>
            
            <div className='icon-card-number'>{number}</div>
            <div className='icon-card-title'>{title}</div>
        </div>
    )
}


export default IconCard;