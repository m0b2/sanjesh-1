import React from 'react';
import './number-static.style.css';
import Circleprogress from '../circleprogress/cricleprogress.component';
import CountUp from 'react-countup';





const NumberStatic = ({ current, total, title, pathColor }) => {
  const [percent, setPercent] = React.useState(Math.floor(Math.random()*100));
  
  return (
    <div className='number-static main'>
      <Circleprogress percent={percent} pathColor={pathColor} width={50} />
      {/* <div className='number-static-text'>

        <p className='not-answered'>{total + '/'}</p>
        <p className='answered'>
          <CountUp
            end={current}
            start={0}
            duration={0.5}
            onEnd={() => setPercent(Math.floor(current / total * 100))}
          />
        </p>
      </div> */}
      <p className='static-title'>{title}</p>
    </div>
  )

}


export default NumberStatic;