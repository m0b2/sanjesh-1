import React from 'react';
import './category.style.css';
import { withRouter } from "react-router-dom";

import Slide from 'react-reveal/Slide';


const Category = ({ title, icon, current, total, index, history, location, tuchable }) => {
    const { pathname } = location;
    return (
        <Slide right={(index % 2 === 0 && tuchable)} left={(index % 2 !== 0 && tuchable)} top={!tuchable}
        duration={600}
        >

            <div>
                <div className='category'

                    onClick={() => { tuchable && history.push(`${pathname}/${index}`) }}>

                    <svg version="1.1" height="680" width="680" viewBox="0 0 30 30">
                        <path d="M15 0 Q0 0 0 15 T15 30 30 15 15 0" fill="#59C8F3" stroke="none" />

                    </svg>
                    <img className='category-icon' src={icon} />

                    <p className='category-title' >{title}</p>


                </div>
            </div>
        </Slide>

    )

}

export default withRouter(Category);