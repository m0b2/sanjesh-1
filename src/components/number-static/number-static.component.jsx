import React from 'react';
import './number-static.style.css';
import Circleprogress from '../circleprogress/cricleprogress.component';
import CountUp from 'react-countup';

const NumberStatic = ({ current, total, title }) => {
  const [percent, setPercent] = React.useState(0);
  return (
    <div className='number-static'>

      <div>
        <Circleprogress percent={percent} width={50} />
      </div>

      <div className='number-static-text'>
        <p className='not-answered'>{total + '/'}</p>
        <p className='answered'>
          <CountUp
            end={current}
            start={0}
            duration={0.5}
            onEnd={() => setPercent(Math.floor(current / total * 100))}
          />
        </p>
      </div>

      <div className='static-title'>
        <p >{title}</p>
      </div>

    </div>
  )

}


export default NumberStatic;