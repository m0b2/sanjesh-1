import React from 'react';
import './cricleprogress.style.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Cricleprogress = ({ percent, width }) => {
    return (
        <div className='Progress'>
            <Progress
                type="circle"
                percent={percent}
                width={width}
                style={{ alignSelf: 'center' }}

            />
            {/* <p className='progress-title'>سوالات پاسخ داده شده</p> */}
        </div>
    )

}


export default Cricleprogress;