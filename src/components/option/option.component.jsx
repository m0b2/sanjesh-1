import React from 'react';
import './option.style.css';

const Answer = ({ options, setUserChooseSomething }) => {




    const inputs = options.map((opt, index) => {

        return (

            <div className="inputGroup" key={"V1input" + opt}
                onClick={() => setUserChooseSomething(true)}
            >
                <input id={"radioV1" + index} name="radioV1" type="radio" />
                <label htmlFor={"radioV1" + (index)}>

                    {opt}
                    




                </label>
            </div>

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