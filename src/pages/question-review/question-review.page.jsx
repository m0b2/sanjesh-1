import React from 'react';
import './question-review.style.css';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import Fade from 'react-reveal/Fade'
import Category from '../../components/category/category.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';

const Question_Review = ({ match, history }) => {
    const store = useStore();

    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;
    const offset = (current === 0) ? 1 : 29;
    console.log(questions[current][index])

    return (
        <div className='question-review-wrapper'>
            <Fade top>
                <Icon className={questions[current][index].icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '100px',paddingTop:'20px' }} />
            </Fade>
            <h3> {questions[current][index].name} </h3>
            <div>
                <div className='progresss-div'>
                    <NumberStatic total={29} current={18} title={'پاسخ داده شده'} />
                    <NumberStatic total={14} current={6} title={'تلاقی'} />
                </div>
            </div>
            <h2 onClick={() => history.push(`answer`)}>شروع سوالات</h2>

        </div>
    )
}

export default withRouter(Question_Review);