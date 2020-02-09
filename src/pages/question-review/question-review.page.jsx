import React from 'react';
import './question-review.style.css';
import Icon from '@material-ui/core/Icon';
import Fade from 'react-reveal/Fade'
import Category from '../../components/category/category.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';

const Question_Review = ({ match, history }) => {
    const store = useStore();
    const classes = useStyles();
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])
    const { index } = match.params;
    const questions = store.getState().question;
    const current = store.getState().question_type;


    return (
        <div className='question-review-wrapper'>
            <Fade top>
                <Icon className={questions[current][index].icon + ' fa-fw'}
                    style={{ color: '#b71c1c', fontSize: '100px', paddingTop: '20px' }}
                />
            </Fade>

            <h3 style={{ fontFamily: 'Samim' }}
            > {questions[current][index].name}
            </h3>


            <div>
                <div className='progresss-div' style={{marginTop:'0', paddingTop:'0'}}>
                    <NumberStatic total={29} current={18} title={'پاسخ داده شده'} />
                    <NumberStatic total={14} current={6} title={'تلاقی'} />
                </div>
            </div>


            <div className='start-analyze-button-container'>

                <Button
                    style={{ fontFamily: 'Samim',  width:'140px',marginLeft:'8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-play fa-fw'} style={{marginRight:'-32px'}} />}
                    onClick={() => history.push(`answer`)}> سوالات
                </Button>


                <Button
                    style={{ fontFamily: 'Samim', width:'140px',marginRight:'8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-chart-pie fa-fw'} style={{marginRight:'-32px'}} />}
                    onClick={() => history.push(`analyze`)}>آنالیز
                </Button>


            </div>




        </div>
    )
}

export default withRouter(Question_Review);






const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor:'#fafafa',
        color:'#01579b',
        width:'142px',
        height:'48px',
        marginTop:'24px',
        fontFamily:'Samim',
        fontWeight:'900',
        fontSize:'16px'
        
    
      },

}));