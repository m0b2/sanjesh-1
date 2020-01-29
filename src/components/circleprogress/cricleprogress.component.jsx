import React from 'react';
import './cricleprogress.style.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Cricleprogress = ({ percent, width }) => {
    return (
        
            <Progress
                type="circle"
                percent={percent}
                width={width}
                style={{ alignSelf: 'center' }}

            />
            
        
    )

}


export default Cricleprogress;