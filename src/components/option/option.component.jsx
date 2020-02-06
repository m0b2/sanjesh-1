import React from 'react';
import './option.style.css';
import Fade from 'react-reveal/Fade';

const Answer = ({ options, setUserChooseSomething }) => {




    const inputs = options.map((opt, index) => {

        return (
            <Fade right opposite delay={100*(index+1)} duration={500}>
                <div className="inputGroup" key={"V1input" + opt}
                    onClick={() => setUserChooseSomething(true)}
                >

                    <input id={"radioV1" + index} name="radioV1" type="radio" />
                    <label htmlFor={"radioV1" + (index)}>

                        {opt}





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