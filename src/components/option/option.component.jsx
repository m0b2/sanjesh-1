import React from 'react';
import './option.style.css';
import Fade from 'react-reveal/Fade';

const Answer = ({ options, setUserAnswer, userAnswer, current }) => {



    let fontSize = getFontSize(options.answers);

    const inputs = options.answers.map((opt, index) => {
        return (
            <Fade right opposite delay={100 * (index + 1)} duration={500}>
                <div className="inputGroup" key={"V1input" + opt.id}
                    onClick={() => {
                        // setUserChooseSomething(true);

                        setUserAnswer((oldState) => ({ ...oldState, [current]: opt.id }))

                    }}
                >
                    <input id={"radioV1" + index} name="radioV1" type="radio"
                        checked={opt.id === userAnswer[current] ? "checked" : null}

                    />
                    <label htmlFor={"radioV1" + (index)} style={{ fontSize: fontSize }}>

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











const getFontSize = (str) => {
    let s = 1;
    for (let i = 0; i < str.length; i++)
        s = (str[i].answer.length > s) ? str[i].answer.length : s;
    //MIN OPTION SIZE => 4
    //MAX OPTION SIZE => 60
    if (s < 5) return 20;
    if (s < 10) return 19;
    if (s < 15) return 18;
    if (s < 20) return 17;
    if (s < 25) return 16;
    if (s < 30) return 15;
    if (s < 35) return 15;
    if (s < 40) return 15;
    if (s < 45) return 14;
    if (s < 50) return 12;
    if (s < 55) return 10;
    if (s < 60) return 8;
    return 6;
}