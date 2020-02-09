import React from 'react';
import './next-back-buttons.style.css';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';



const NextBackButtons = ({ currentState, chooseState, question }) => {
    const { currentQuestion, setCurrentQuestion } = currentState;
    const { userChooseSomething, setUserChooseSomething } = chooseState;

    const size = question.length;
    const useStyles = makeStyles(theme => ({
        button: {
            '& > *': {
                fontFamily: 'Vazir',
                


            },

        }


    }));
    const classes = useStyles();
    

    return (

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
    )


};


export default NextBackButtons;