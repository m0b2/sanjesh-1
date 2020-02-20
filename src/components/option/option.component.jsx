import React from 'react';
import './option.style.css';
import Fade from 'react-reveal/Fade';

const Answer = ({ options, setUserChooseSomething, setUserAnswer, userAnswer, current }) => {




    const inputs = options.answers.map((opt, index) => {

        return (
            <Fade right opposite delay={100 * (index + 1)} duration={500}>
                <div className="inputGroup" key={"V1input" + opt.id}
                    onClick={() => {
                        setUserChooseSomething(true);
                        
                        setUserAnswer((oldState)=>({...oldState, [current]:index}))
    
                        }}
                        >
                    <input id={"radioV1" + index} name="radioV1" type="radio"
                     checked={index === userAnswer[current] ? "checked" : null} 

                     />
                    <label htmlFor={"radioV1" + (index)}>

                        {opt.answer}

                    </label>

                </div>
            </Fade>
        )
    }

    );
    return (


        <form id={"formV1"} className="form">
            {inputs}
        </form>

    )
}





export default Answer;



