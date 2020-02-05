import React from 'react';
import './answer.page.style.css';


const Answer = () => {




    const inputs = ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم', 'گزینه پنجم'].map((opt, index) => {

        return (

            <div className="inputGroup" key={"V1input" + index}>
                <input id={"radioV1" + index} name="radioV1" type="radio" />
                <label htmlFor={"radioV1" + (index)}>{opt}</label>
            </div>

        )
    }

    );
    return (
        <div className='options-container'>
            <form id={"formV1"} className="form">
                {inputs}
            </form>
        </div>
    )
}





export default Answer;