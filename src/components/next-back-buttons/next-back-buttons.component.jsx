import React from 'react';
import './next-back-buttons.style.css';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';



const NextBackButtons = ({ currentState, nextActive, size }) => {
    const { currentQuestion, setCurrentQuestion } = currentState;



    const useStyles = makeStyles(theme => ({
        button: {
            '& > *': {
                fontFamily: 'Samim',
                fontWeight: '500'
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
                    setCurrentQuestion((oldState) => (currentQuestion !== size ? oldState + 1 : oldState))
                    // currentQuestion + 1 !== size && setChoise(false);
                }
                }
                disabled={!(nextActive || nextActive === 0) || size === currentQuestion + 1}
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