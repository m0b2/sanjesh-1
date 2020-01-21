import React from 'react';
import './category.style.css';
import CountUp from 'react-countup';
import { Progress } from 'react-sweet-progress';
import Slide from 'react-reveal/Slide';


export default ({ title, icon, current, total, index }) => {


    return (
        <Slide right={(index % 2 === 0)} left={(index % 2 !== 0)}>

            <div className='category'>
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