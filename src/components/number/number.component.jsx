import React from 'react';
import './number.style.css';


const Number = ({ total, current, style, currentStyle }) => {
    return (
        <div className='static-number' style={style}>

            <div className='static-total' >{total + '/'}</div>
            <div className='static-current' style={{ color: "#b71c1c" , ...currentStyle}}>{current}</div>

        </div>
    )



}


export default Number;