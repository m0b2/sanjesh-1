import React from 'react';
import './Logo.style.css';


const Logo = ({size}) => {

    return (
        <div style={{
            direction: 'ltr',
            color: '#424242',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '3px',
            marginRight: '12px',
            fontFamily: 'Pattaya',
            fontSize: `${size}px`
        }} >
            Sanjesh.
                <div style={{ color: '#b71c1c' }}>Love</div>
        </div>
    )
}


export default Logo;