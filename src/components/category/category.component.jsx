import React from 'react';
import './category.style.css';
import CountUp from 'react-countup';
import { Progress } from 'react-sweet-progress';
import Slide from 'react-reveal/Slide';


export default ({ title, icon, current, total, index }) => {


    return (
        <Slide right={(index%2===0)} left={(index%2!==0)}>
        <div className='category'>
            <div className='category-up-div'>
                <img className='category-icon' src={icon} />
                <p className='category-title' >{title}</p>
            </div>
            <div className='category-down-div'>
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

                <Progress className='category-progress' percent={current} status="success"
                    style={{
                        direction: 'rtl',

                    }}
                    theme={{
                        success: {
                            color: '#59C8F3'
                        },
                        active: {
                            symbol: '😀',
                            color: '#fbc630'
                        },
                        default: {
                            symbol: '😱',
                            color: '#fbc630'
                        }
                    }}
                />
            </div>

        </div>
        </Slide>
    )

}