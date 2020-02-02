import React from 'react';
import './compare.style.css';
import mizan from '../../assets/comparevector300.png';
import CompareInput from '../../components/compare-input/compare-input.component';
const Compare = () => {


    return (

        <div className='compare-page-container'>

            <div className='compare-img-container'>
                <img style={{
                    width: '275px',
                    height: '300px'
                }} src={mizan} alt={'mizan'} />
            </div>
            <div>
                <CompareInput />
            </div>

        </div>
    )
}

export default Compare;