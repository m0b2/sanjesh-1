import React from 'react';
import './Logo.style.css';


const Logo = ({ size, red }) => {

    return (
        <div style={{
            direction: 'ltr',
            color: (red ? '#b71c1c' : '#fafafa'),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '3px',
            marginRight: '12px',
            fontSize: `${size}px`,
            fontFamily:'Vazir'
        }} >
            ویناس
                <div style={{ color: (red ? '#b71c1c' : '#fafafa'), fontFamily: 'Pattaya', }}></div>
        </div>
    )
}


export default Logo;