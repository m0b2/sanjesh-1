import React from 'react';
import './answer.page.style.css';
import Options from '../../components/option/option.component';
import Divider from '@material-ui/core/Divider';
import Success from '../../components/success/success.component';
import Number from '../../components/number/number.component'
import NextBackButtons from '../../components/next-back-buttons/next-back-buttons.component';
import { useStore, connect } from 'react-redux';
import { useHistory} from 'react-router-dom';

const Answer = ({ }) => {
    const history = useHistory();
    const store = useStore();
    const question = store.getState().question;
    const currentCategory = question.current;
    
    

    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [userAnswer, setUserAnswer] = React.useState(getAllAnswer(question[currentCategory], store,(!question || !currentCategory) ));
    const [oldAnswer, setOldAnswer] = React.useState(getAllAnswer(question[currentCategory], store), (!question || !currentCategory));
    if(!question || !currentCategory || !question[currentCategory]){
        history.push('/question');
        return<div></div>;
    }
    

    const size = question[currentCategory].length;



    console.log(userAnswer[currentQuestion], 'THIS IS SPARTA')

    

    return (
        <div className='answer-container'>
            <Number current={currentQuestion + 1} total={size}
                style={{ paddingTop: '0%', marginTop: '0', height: 'fit-contetnt' }} />

            <Divider variant="middle" />
            {(currentQuestion >= size) ? <Success /> : (
                <>
                    <div className='question-content-container'>
                        <span>

                            {question[currentCategory][currentQuestion].title}
                        </span>
                    </div>

                    <Options
                        options={question[currentCategory][currentQuestion]}
                        userAnswer={userAnswer} setUserAnswer={setUserAnswer}
                        current={currentQuestion} />

                    <NextBackButtons
                        currentState={{ currentQuestion, setCurrentQuestion }}
                        nextActive={userAnswer[currentQuestion]}
                        size={size}
                        currentAnswer={userAnswer[currentQuestion]}
                        oldAnswer={oldAnswer[currentQuestion]}
                        setOldAnswer={setOldAnswer}
                        
                    />
                </>

            )}
        </div>
    )
}





const mapStateToProps = store => {
    return {
        oldAnswer: store.oldAnswer,

    };
};



export default (Answer);







const getAllAnswer = (question, store, act) => {
    if( question){
        let arr = {};
        question.map((value, index) => {
            arr = { ...arr, [index]: value.client_answer }
        })
        // store.dispatch({ type: 'SET_USER_OLD_ANSWER', payload: arr })
        return arr;
    }
    
}