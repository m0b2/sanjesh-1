import React from 'react';
import './footer-item.style.css';
import { Link } from 'react-router-dom';



export default ({ iconClass, active, setCurrent }) => {
    const current = active === iconClass ? 'active' : '';

    return (
        <Link to={iconClass}>
            <div className={'footer-item' + ` ${current}`}
                onClick={() => {
                    setCurrent(iconClass);
                }
                }>

                <span className={`footer-icon ${iconClass}-icon`}></span>

            </div>
        </Link>

    )
}


