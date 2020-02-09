import React from 'react';
import './question-analyze.style.css';
import Icon from '@material-ui/core/Icon';
import Fade from 'react-reveal/Fade'
import Category from '../../components/category/category.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';
import Divider from '@material-ui/core/Divider';
import MaterialTab from '../../components/material-tab/material-tab.component';
import NextBackButtons from '../../components/next-back-buttons/next-back-buttons.component';

const Question_Analyze = ({ match, history }) => {
    const store = useStore();

    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, []);


    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const setUserChooseSomething = () => { }
    const userChooseSomething = true;
    const size = question.length;







    return (
        <div className='question-review-wrapper'>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Fade top>
                    <Icon className={questions[current][index].icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '42px', paddingTop: '16px' }} />
                </Fade>
                <Divider />
                <h3 style={{ fontFamily: 'Vazir' }}> {'آنالیز شخصیتی مربوط به مبحث ' + questions[current][index].name} </h3>
            </div>
            <Divider />
            <Fade spy={currentQuestion} duration={300}  >

                <span style={{ fontFamily: 'Vazir', color: '#b71c1c' }}>
                    {` آنالیز سوال ${currentQuestion + 1}: `}

                </span>
                <span style={{ fontFamily: 'Vazir', textAlign: 'center', color: '#26a69a', height: '16vh' }}>
                    {question[currentQuestion]}
                </span>
                <br />
                <span style={{ fontFamily: 'Vazir', color: '#b71c1c' }}>
                    {` پاسخ شما به این سوال گزینه: ${current + 1} `}

                </span>
                <span style={{ fontFamily: 'Vazir', textAlign: 'center', color: '#26a69a' }}>
                    {inputs[2][1]}
                </span>

            </Fade>
            <div style={{ width: '100%',minHeight:'180px' }}>

                <MaterialTab data={{ tabs: tabs, content: content }} />
            </div>
            <NextBackButtons currentState={{ currentQuestion, setCurrentQuestion }}
                chooseState={{ userChooseSomething, setUserChooseSomething }}
                question={question} />

        </div>
    )
}

export default withRouter(Question_Analyze);











const tabs = ['مشاوره اجمالی', 'مطلب علمی', 'فایل مشاوره'];

const content = [
    'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
    'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
    'اطلاعات این قسمت در حال تکمیل می باشد.'
]
const inputs = [
    ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم', 'گزینه پنجم'],
    ['همیشه', 'غالبا', 'گاهی', 'به ندرت', 'هرگز'],
    ['تفاوت در نگرش های سیاسی را مساوی طلاق میدانم', 'تفاوت در نگرش های سیاسی می تواند زندگی ما را نابود کند', 'شاید تأثیر داشته باشد شاید خیر', 'تفاوت در نگرش های سیاسی خیلی کم باعث شکست زندگی میشود', 'تفاوت در نگرش های سیاسی هرگز باعث شکست زندگی نمیشود'],
];
const question =
    [
        'اگر همسرتان به دلیلی مثل مشکلات مالی یا هر چیز دیگری مدتی طولانی (مثلاً ده سال) به زندان بیفتد تا چه میزان حاضر هستید به خاطر او صبر کنید؟',
        'چند وقت یک بار مسواک میزنید؟',
        'به نظر شما تفاوت در نگرش های سیاسی شما و همسرتان تا چه میزان می تواند باعث شکست زندگی زناشویی شما شود؟ (آیا تفاوت در نگرش سیاسی آنقدر اهمیت دارد که موجب نابودی زندگی شما شود؟)']

