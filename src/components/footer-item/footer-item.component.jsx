import React from 'react';
import './footer-item.style.css';



export default ({ iconClass, active, setCurrent,setPage }) => {
    const current = active === iconClass ? 'active' : '';

    return (
        <div className={'footer-item' + ` ${current}`}
            onClick={() => {
                setCurrent(iconClass);
                setPage(iconClass);
            }
            }>
            <span className={`footer-icon ${iconClass}-icon`}></span>
        </div>
    )
}


