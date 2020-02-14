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
        
        bottom:'0'

    },
    button: {
        fontFamily: 'Vazir'
    }
});

export default function DotsMobileStepper({activeStep, setActiveStep, totalStep}) {
    const classes = useStyles();
    const theme = useTheme();
    

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <MobileStepper
            variant="dots"
            steps={totalStep}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
                <Button size="medium" onClick={handleNext} disabled={activeStep === 3}
                    className={classes.button}
                >
                    بعدی
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