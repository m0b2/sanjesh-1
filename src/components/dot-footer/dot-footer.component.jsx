import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        background: 'white',

        bottom: '0'

    },
    button: {
        fontFamily: 'Vazir'
    }
});

export default function DotsMobileStepper({ activeStep, setActiveStep, totalStep, states, setMessage,setEnd }) {
    const classes = useStyles();
    const theme = useTheme();


    const handleNext = () => {
        let error = false;
        states[activeStep].map((value, index) => {
            console.log(value, error)
            error = (value.length < 2) ? true : error
        })

        if (!error) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
            setMessage('')
        }
        else setMessage('تکمیل کردن تمامی فیلد ها الزامی میباشد')
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setMessage('')
        // let error = false;
        // states[activeStep].map((value, index) => {
        //     console.log(value, error)
        //     error = (value.length < 2) ? true : error
        // })
        // if (!error) {

        // } else setMessage('تکمیل کردن تمامی فیلد ها الزامی میباشد')
    };

    return (
        <MobileStepper
            variant="dots"
            steps={totalStep}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
                <Button size="medium" onClick={() => {
                    if (activeStep === 3) {
                        setEnd(true)
                    } else {
                        handleNext()
                    }
                }}
                    className={classes.button}
                >
                    {(activeStep === 3) ? 'پایان' : 'بعدی'}
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button size="medium" onClick={handleBack} disabled={activeStep === 0}
                    className={classes.button}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    قبلی
        </Button>
            }
        />
    );
}