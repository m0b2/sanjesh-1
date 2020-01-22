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