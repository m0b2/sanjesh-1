import React from 'react';
import './question-review.style.css';
import Icon from '@material-ui/core/Icon';
import Fade from 'react-reveal/Fade'
import { useStore, connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import NumberStatic from '../../components/number-static/number-static.component';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';
const Question_Review = ({ match, history, question, loading, categories }) => {

    const store = useStore();
    // if(!question.current){
    //     history.push('/question')
    // }
    const classes = useStyles();
    const { index } = match.params;
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        // store.dispatch({ type: 'SET_CURRENT_QUESTIONS', payload: 0});

        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, [])

    const questions = store.getState().Categories;
    const current = store.getState().question_type;
    if (!question || !question[index]) {
        // console.log(loading)
        // console.log(question)
        if (!loading.categories_review) {
            fetchQuestions(index, store);
        }
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }

    // console.log(question[index])
    if(!categories||!categories[index]){
        history.push('/question');
        return<div></div>;
    }
    return (
        <div className='question-review-wrapper'>
            <Fade top>
                <Icon className={categories[index].icon + ' fa-fw'}
                    style={{ color: '#b71c1c', fontSize: '100px', paddingTop: '20px' }}
                />
            </Fade>

            <h3 style={{ fontFamily: 'Samim' }}
            > {categories[index].name}
            </h3>


            <div>
                <div className='progresss-div' style={{ marginTop: '0', paddingTop: '0' }}>
                    <NumberStatic total={29} current={18} title={'پاسخ داده شده'} />
                    <NumberStatic total={14} current={6} title={'تلاقی'} />
                </div>
            </div>


            <div className='start-analyze-button-container'>

                <Button
                    style={{ fontFamily: 'Samim', width: '140px', marginLeft: '8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-play fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => history.push(`answer`)}> سوالات
                </Button>


                <Button
                    style={{ fontFamily: 'Samim', width: '140px', marginRight: '8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-chart-pie fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => history.push(`analyze`)}>آنالیز
                </Button>


            </div>




        </div>
    )
}


const mapStateToProps = store => {
    return {
        loading: store.loading,
        question: store.question,
        categories: store.Categories
    };
};







export default withRouter(connect(mapStateToProps)(Question_Review));






const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: '#fafafa',
        color: '#0277bd',
        width: '142px',
        height: '48px',
        marginTop: '24px',
        fontFamily: 'Samim',
        fontWeight: '900',
        fontSize: '16px'


    },

}));












const fetchQuestions = (index, store) => {

    store.dispatch({ type: 'SET_LOADING', payload: { categories_review: true } });



    const
        headers = {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Vary': 'Authorization',


        }

    const url = `http://185.55.226.171/api/questions/${index}`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const path = `${index}`
    axios.get(proxyurl + url, { headers: headers })
        .then((response) => {
            if (response.data.status === 200) {
                store.dispatch({ type: 'SET_QUESTIONS', payload: { [`${index}`]: response.data.data } });
                store.dispatch({ type: 'SET_LOADING', payload: { categories_review: false } });
                console.log(response.data)
            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                // console.log('Singed out!!!')
                store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                // console.log('there is an problem')
                store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND' })
            }

        })















}