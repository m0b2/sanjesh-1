import React from 'react';
import './question-analyze.style.css';
import Icon from '@material-ui/core/Icon';
import Fade from 'react-reveal/Fade'
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';
import Divider from '@material-ui/core/Divider';
import MaterialTab from '../../components/material-tab/material-tab.component';
import NextBackButtons from '../../components/next-back-buttons/next-back-buttons.component';
import Circleprogress from '../../components/circleprogress/cricleprogress.component';
const Question_Analyze = ({ match, history }) => {
    const store = useStore();

    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, []);


    const { index } = match.params;
    const questions = store.getState().question;
    const categories = store.getState().Categories;
    const current = questions.current;

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const setUserChooseSomething = () => { }
    const userChooseSomething = true;
    

    if (!questions || !categories || !questions[current] || !questions[current][currentQuestion]) {
        history.push('/question');
        return <div></div>;
    }









    const Amar = <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
        <Circleprogress percent={38} width={64} />
        <div>
            <span style={{fontFamily:'Samim', fontWeight:'400'}}>درصد افرادی که دراین مورد با شما هم نظرند</span>
        </div>
        
      </div>
    const insideComponent = ['',Amar,''];

    
    const userAnswerID = questions[current][currentQuestion].answers.answer;

    // const userAnswerID = questions[current][currentQuestion].client_answer.answer;
    const userAnswerToThisQuestion = questions[current][currentQuestion].answers.map((value,index)=>(value.id===userAnswerID)?value.answer : '')
    return (
        <div className='question-review-wrapper'>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Fade top>
                    <Icon className={'fas fa-question ' + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '42px', paddingTop: '16px' }} />
                </Fade>
                <Divider />
                <h4 style={{ fontFamily: 'Samim', fontWeight:'500', }}> {'آنالیز شخصیتی مربوط به مبحث ' + categories[current].name} </h4>
            </div>
            <Divider />
            <Fade spy={currentQuestion} duration={300}  >

                <span style={{ fontFamily: 'Samim', fontWeight:'500', color: '#b71c1c' }}>
                    {` آنالیز سوال ${currentQuestion + 1}: `}

                </span>
                <span style={{ fontFamily: 'Samim', fontWeight:'500', textAlign: 'center', color: '#26a69a', height: '82px' }}>
                    {questions[current][currentQuestion].title}
                </span>
                <br />
                <span style={{ fontFamily: 'Samim', fontWeight:'500', color: '#b71c1c' }}>
                    {` پاسخ شما به این سوال : `}

                </span>
                <span style={{ fontFamily: 'Samim', fontWeight:'500', textAlign: 'center', color: '#26a69a' }}>
                    {userAnswerToThisQuestion}
                </span>


                <div style={{ width: '100%', minHeight: '186px' }}>
                
                    <MaterialTab data={{ tabs: tabs, content: content }}  insideComponent={insideComponent}/>
                </div>
            </Fade>
            <NextBackButtons currentState={{ currentQuestion, setCurrentQuestion }}
                chooseState={{ userChooseSomething, setUserChooseSomething }}
                question={question}
                oldVersion={true}
                size={questions[current].length} />

        </div>
    )
}

export default withRouter(Question_Analyze);











const tabs = ['مشاوره اجمالی', 'آمار', 'فایل مشاوره'];

const content = [
    'اطلاعات ورودی شما در نوبت آنالیز قرارگرفته است که پس از تکمیل مراحل بررسی، در این قسمت درج خواهد شد.',
    '',
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

