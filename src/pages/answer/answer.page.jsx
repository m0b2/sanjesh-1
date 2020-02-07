import React from 'react';
import './answer.page.style.css';
import Options from '../../components/option/option.component';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Success from '../../components/success/success.component';
import { makeStyles } from '@material-ui/core/styles';
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



const useStyles = makeStyles(theme => ({
    button: {
        '& > *': {
            fontFamily: 'Vazir',



        },

    }


}));



const Answer = () => {
    const store = useStore()
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [userChooseSomething, setUserChooseSomething] = React.useState(false);
    const size = question.length;
    const classes = useStyles();







    return (
        <div className='answer-container'>
            <div className='static-number' style={{paddingTop:'0%', marginTop:'0', height:'fit-contetnt'}}>

                <div className='static-total'>{size + '/'}</div>
                <div className='static-current' style={{ color: "#b71c1c" }}>{currentQuestion + 1}</div>

            </div>
            <Divider variant="middle" />
            {(currentQuestion >= size) ? <Success /> : (
                <>
                    <div className='question-content-container'>
                        <span>

                            {question[currentQuestion]}
                        </span>
                    </div>

                    <Options options={inputs[currentQuestion]} setUserChooseSomething={setUserChooseSomething} />

                    <div className='answer-buttons-container'>

                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<NavigateNextIcon />}
                            className={classes.button}
                            onClick={() => {
                                setCurrentQuestion((oldState) => (oldState + 1))
                                currentQuestion + 1 !== size && setUserChooseSomething(false);
                            }
                            }
                            disabled={!userChooseSomething}
                        >
                            بعدی
                </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<NavigateBeforeIcon />}
                            className={classes.button}
                            onClick={() => setCurrentQuestion((oldState) => (oldState > 0 ? oldState - 1 : oldState))}
                        >
                            قبلی
                </Button>

                    </div>
                </>

            )}
        </div>
    )
}





export default Answer;