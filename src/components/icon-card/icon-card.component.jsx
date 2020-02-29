import React from 'react';
import './icon-card.style.css';


const IconCard = ({ title, icon, number, adminCard }) => {

    if (adminCard) {

        return (
            <div className='number-static' style={{ height: '128px' }}>
                <div>
                    <img className='icon-card-img' src={icon} alt={title} />
                </div>
                <div className='icon-card-title' style={{ fontWeight: '850', paddingTop: '0' }}>{title}</div>
            </div>)

    }

    return (

        <div className='number-static'>
            <div>
                <img className='icon-card-img' src={icon} alt={title} />
            </div>

            <div className='icon-card-number'>{number}</div>
            <div className='icon-card-title' style={{ fontWeight: '850', paddingTop: '0' }}>{title}</div>


        </div>
    )
}


export default IconCard;