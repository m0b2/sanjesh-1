import React from 'react';
import './admin-add-question.style.css';
import TextDialog from '../../components/textInput-dialog/textInput-dialog.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';

const Question_Analyze = ({ match, history }) => {
    const store = useStore();
    const { index } = match.params;
    const [question, setQuestion] = React.useState((store.getState().admin.categories) ? (store.getState().admin.categories[index]) : null);

    const [title, setTitle] = React.useState('');
    const [option, setOptions] = React.useState(['', '', '', '', '']);
    const classes = useStyles();
    const [deleted, setDeleted] = React.useState({ deleted: false, deleting: false });
    const [changed, setChanged] = React.useState({ changed: false, changing: false });

    const temp = {
        title: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: ''
    }
    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, []);





    if (!question) {
        history.push('/category')
        return <div></div>;
    }

    if (deleted.deleting) {
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }
    if (deleted.deleted) {
        setTimeout(() => {

            history.push('/category')
            window.location.reload();
        }, 2000)
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>دسته با موفقیت حذف شد</span>
        </div>)
    }

    if (changed.changing) {
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }
    if (changed.changed) {
        setTimeout(() => {
            history.goBack();

        }, 2000)
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>سوال با موفقیت افزوده شد</span>
        </div>)
    }





    return (
        <>


            <TextDialog state={title} setState={(value) => {
                setTitle(value)
            }} items={[]} title={'متن سوال'} />

            <TextDialog state={option[0]} setState={(value) => {
                const temp = option.slice();
                temp[0] = value;
                setOptions(temp)
            }} items={[]} title={'گزینه اول'} />

            <TextDialog state={option[1]} setState={(value) => {
                const temp = option.slice();
                temp[1] = value;
                setOptions(temp)
            }} items={[]} title={'گزینه دوم'} />

            <TextDialog state={option[2]} setState={(value) => {
                const temp = option.slice();
                temp[2] = value;
                setOptions(temp)
            }} items={[]} title={'گزینه سوم'} />

            <TextDialog state={option[3]} setState={(value) => {
                const temp = option.slice();
                temp[3] = value;
                setOptions(temp)
            }} items={[]} title={'گزینه چهارم'} />

            <TextDialog state={option[4]} setState={(value) => {
                const temp = option.slice();
                temp[4] = value;
                setOptions(temp)
            }} items={[]} title={'گزینه پنجم'} />






            <div className='start-analyze-button-container' style={{ minHeight: '50vh', marginTop: '-96px' }}>

                <Button
                    style={{ fontFamily: 'Samim', width: '140px', marginLeft: '8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-plus fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        //send data to server
                        setChanged((oldState) => {

                            return (
                                { ...oldState, changing: true }
                            )
                        })



                        sendEditState(index, setChanged, title, option);
                    }}> افزودن سوال
                </Button>





            </div>
        </>

    )



}

export default withRouter(Question_Analyze);





const sendEditState = (category_id, setDeleted, title, answers) => {

    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = {

        category: category_id,
        title,
        answers



    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/questions`;

    axios
        .post(
            proxyurl + url2,
            data,
            {
                headers: headers
            },

        )
        .then(response => {
            console.log(response)
            setDeleted((oldState) => {

                return (
                    { ...oldState, changed: true, changing: false }
                )
            })

        })
        .catch(error => {
            setDeleted((oldState) => {

                return (
                    { ...oldState, deleting: false, deleted: false }
                )
            })
            console.log(error);
        });



}

















const sendDeleteState = (question_id, setDeleted) => {


    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = { _method: 'DELETE' }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/categories/${question_id}`;

    axios
        .post(
            proxyurl + url2,
            data,
            {
                headers: headers
            },

        )
        .then(response => {
            console.log(response)
            setDeleted((oldState) => {

                return (
                    { ...oldState, deleting: false, deleted: true }
                )
            })

        })
        .catch(error => {
            setDeleted((oldState) => {

                return (
                    { ...oldState, deleting: false, deleted: false }
                )
            })
            console.log(error);
        });

}


















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
