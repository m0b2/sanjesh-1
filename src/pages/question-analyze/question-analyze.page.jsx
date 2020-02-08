import React from 'react';
import './question-analyze.style.css';
import Icon from '@material-ui/core/Icon';
import Fade from 'react-reveal/Fade'
import Category from '../../components/category/category.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';
import Divider from '@material-ui/core/Divider';
import MaterialTab from '../../components/material-tab/material-tab.component';;

const Question_Analyze = ({ match, history }) => {
    const store = useStore();

    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, []);


    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;
    const tabs = ['مشاوره اجمالی', 'مطلب علمی', 'فایل مشاوره'];

    const content = [
        'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
        'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
        'اطلاعات این قسمت در حال تکمیل می باشد.'
    ]
    return (
        <div className='question-review-wrapper'>
        <div style={{ display:'flex', flexDirection:'row'}}>
            <Fade top>
                <Icon className={questions[current][index].icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '42px', paddingTop: '16px' }} />
            </Fade>
            <Divider />
            <h3 style={{ fontFamily: 'Vazir' }}> {'آنالیز شخصیتی مربوط به مبحث ' + questions[current][index].name} </h3>
            </div>
            <Divider />

            <div style={{ width: '100%' }}>

                <MaterialTab data={{ tabs: tabs, content: content }} />
            </div>


        </div>
    )
}

export default withRouter(Question_Analyze);