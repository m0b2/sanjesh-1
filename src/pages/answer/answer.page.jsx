import React from 'react';
import './answer.page.style.css';
import Options from '../../components/option/option.component';
import Divider from '@material-ui/core/Divider';
import Success from '../../components/success/success.component';
import Number from '../../components/number/number.component'
import NextBackButtons from '../../components/next-back-buttons/next-back-buttons.component';
import { useStore } from 'react-redux';
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




const Answer = () => {
    const store = useStore()
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [userChooseSomething, setUserChooseSomething] = React.useState(false);
    const size = question.length;







    return (
        <div className='answer-container'>
            <Number current={currentQuestion + 1} total={size} style={{ paddingTop: '0%', marginTop: '0', height: 'fit-contetnt' }} />

            <Divider variant="middle" />
            {(currentQuestion >= size) ? <Success /> : (
                <>
                    <div className='question-content-container'>
                        <span>

                            {question[currentQuestion]}
                        </span>
                    </div>

                    <Options options={inputs[currentQuestion]} setUserChooseSomething={setUserChooseSomething} />

                    <NextBackButtons currentState={{ currentQuestion, setCurrentQuestion }}
                        chooseState={{ userChooseSomething, setUserChooseSomething }}
                        question={question} />
                </>

            )}
        </div>
    )
}





export default Answer;