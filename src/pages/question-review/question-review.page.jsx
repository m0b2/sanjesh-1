import React from 'react';
import './question-review.style.css';

import Category from '../../components/category/category.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';

const Question_Review = ({ match, history }) => {
    const store = useStore();
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;
    const offset = (current === 0) ? 1 : 29;


    return (
        <div className='question-review-wrapper'>
            <Category title={questions[current][index]}
                icon={`https://sanjesh.love/amar/img/${(parseInt(offset) + parseInt(index))}.gif`}
                index={index}
            />
            <div className='progresss-div'>
                <NumberStatic total={29} current={18} title={'پاسخ داده شده'} />
                <NumberStatic total={14} current={6} title={'تلاقی'} />
            </div>

            <h2 onClick={() => history.push(`answer`)}>شروع سوالات</h2>

        </div>
    )
}

export default withRouter(Question_Review);