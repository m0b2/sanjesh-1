import React from 'react';
import './category.style.css';
import { withRouter } from "react-router-dom";

import Slide from 'react-reveal/Slide';


const Category = ({ title, icon, current, total, index, history, location, tuchable }) => {
    const { pathname } = location;
    return (
        <Slide right={(index % 2 === 0 && tuchable)} left={(index % 2 !== 0 && tuchable)} top={!tuchable}>

            <div className='category'
                onClick={() => { tuchable && history.push(`${pathname}/${index}`) }}>


                <svg version="1.1" height="680" width="680" viewBox="0 0 30 30">
                    <path d="M15 0 Q0 0 0 15 T15 30 30 15 15 0" fill="#59C8F3" stroke="none" />

                </svg>
                <img className='category-icon' src={icon} />

                <p className='category-title' >{title}</p>


            </div>















            {/* <div className='category'>
                <div className='category-up-div'>
                    <img className='category-icon' src={icon} />
                    <p className='category-title' >{title}</p>


                </div> */}
            {/* <div className='category-down-div'>
                    <div className='category-static-text'>
                        <p className='category-not-answered'>{total + '/'}</p>
                        <p className='category-answered'>
                            <CountUp
                                end={current}
                                start={0}
                                duration={2.2}

                            />
                        </p>
                    </div>

                </div> */}

            {/* </div> */}

        </Slide>
    )

}

export default withRouter(Category);