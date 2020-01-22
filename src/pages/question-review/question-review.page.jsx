import React from 'react';
import './question-review.style.css';
import { useParams } from "react-router-dom";
import Category from '../../components/category/category.component';
import store from '../../redux/store';
import { withRouter } from "react-router-dom";

const Question_Review = ({match}) => {

    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;
    const offset = (current === 0) ? 1 : 29;


    return (
        <Category title={questions[current][index]}
            icon={`https://sanjesh.love/amar/img/${(parseInt(offset) + parseInt(index))}.gif`}
            index={index}
        />
    )
}

export default withRouter(Question_Review);