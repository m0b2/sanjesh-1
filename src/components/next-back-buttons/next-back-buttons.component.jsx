import React from 'react';
import './next-back-buttons.style.css';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useStore } from 'react-redux'


const NextBackButtons = (props) => {

    const {
        currentState, nextActive, size,
        currentAnswer, oldAnswer, setOldAnswer,
        question_id, oldVersion, userDescription,
        setOldUserDescription, oldUserDescription
    } = props;



    const { currentQuestion, setCurrentQuestion } = currentState;
    const store = useStore();

    const useStyles = makeStyles(theme => ({
        button: {
            '& > *': {
                fontFamily: 'Samim',
                fontWeight: '500'
            },
        }

    }));
    const classes = useStyles();





    if (oldVersion) {
        return (
            <div className='answer-buttons-container'>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<NavigateNextIcon />}
                    className={classes.button}
                    onClick={() => {
                        setCurrentQuestion((oldState) => (currentQuestion + 1 !== size ? oldState + 1 : oldState))

                    }
                    }

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
        )
    }












    // NEW VERSION










    return (

        <div className='answer-buttons-container'>

            <Button
                variant="contained"
                color="primary"
                startIcon={<NavigateNextIcon />}
                className={classes.button}
                onClick={() => {
                    setCurrentQuestion((oldState) => (currentQuestion + 2 !== size ? oldState + 1 : oldState + 1))
                    // currentQuestion + 1 !== size && setChoise(false);
                    // console.log(currentAnswer, oldAnswer)
                    if (currentAnswer !== oldAnswer || (currentAnswer === 0 && currentAnswer !== oldAnswer)) {
                        const category_id = store.getState().userAnswer.category_id
                        setOldAnswer((oldState) => ({ ...oldState, [currentQuestion]: currentAnswer }))
                        store.dispatch({
                            type: 'SET_CHANGE_ANSWER'
                            ,
                            current_question: currentQuestion,
                            client_answer: currentAnswer,
                            category_id: category_id,
                            description: userDescription


                        })
                        sendAnswer(category_id, question_id, currentAnswer, userDescription);


                    } else if (oldUserDescription !== userDescription) {
                        const category_id = store.getState().userAnswer.category_id
                        setOldUserDescription((state) => {
                            const newOld = state.slice();
                            newOld[currentQuestion] = userDescription;
                            return newOld;
                        });

                        store.dispatch({
                            type: 'SET_CHANGE_ANSWER'
                            ,
                            current_question: currentQuestion,
                            client_answer: currentAnswer,
                            category_id: category_id,
                            description: userDescription


                        })
                        sendAnswer(category_id, question_id, currentAnswer, userDescription);


                    }
                }
                }
                disabled={!(nextActive || nextActive === 0)}
            >
                {(size === currentQuestion + 1) ? 'پایان' : 'بعدی'}
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
    )


};


export default NextBackButtons;











const sendAnswer = (category_id, questions_id, answer_id, userDescription) => {

    let comment = userDescription ? userDescription : ''
    const headers = {
        'Content-Type': 'application/json',
        'Vary': 'Authorization',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,


    }
    const data = {

    }


    const url = `http://185.55.226.171/api/answers/${category_id}?questions[0][id]=${questions_id}&questions[0][answer]=${answer_id}&questions[0][description]=${comment}`
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(proxyurl + url, data, {
        headers: headers
    })
        .then((response) => {


            // console.log(response);


        })
        .catch((error) => {
            console.log(error);


        })

}