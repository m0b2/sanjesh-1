import React from 'react';
import './Logo.style.css';


const Logo = ({size}) => {

    return (
        <div style={{
            direction: 'ltr',
            color: '#fafafa',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '3px',
            marginRight: '12px',
            fontFamily: 'Pattaya',
            fontSize: `${size}px`
        }} >
            Sanjesh.
                <div style={{ color: '#fafafa' }}>Love</div>
        </div>
    )
}


export default Logo;