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
            fontFamily: 'Pattaya',
            fontSize: `${size}px`
        }} >
            Sanjesh.
                <div style={{ color: (red ? '#b71c1c' : '#fafafa'), fontFamily: 'Pattaya', }}>Love</div>
        </div>
    )
}


export default Logo;