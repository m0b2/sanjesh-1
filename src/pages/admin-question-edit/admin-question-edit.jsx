import React from 'react';
import TextDialog from '../../components/textInput-dialog/textInput-dialog.component';
import { useStore, connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogButton from '../../components/dialog-button/dialog-button.component';
import Snackbar from '../../components/snackbar/snackbar.component';

const Question_Analyze = ({ match, history, admin }) => {
    const store = useStore();
    const { index } = match.params;
    const [message, setMessage] = React.useState('');

    const classes = useStyles();
    const options = (store.getState().admin.questions && store.getState().admin.questions[index]) ? (store.getState().admin.questions[index].answers) : null
    const [question, setQuestion] = React.useState((store.getState().admin.questions) ? (store.getState().admin.questions[index]) : null);
    const [deleted, setDeleted] = React.useState({ deleted: false, deleting: false });
    const [changed, setChanged] = React.useState({ changed: false, changing: false });
    const [option, setOption] = React.useState((options ? [options[0].answer, options[1].answer, options[2].answer,
    options[3].answer, options[4].answer
    ] : []));
    const [open, setOpen] = React.useState(false);


    React.useEffect(() => {
        store.dispatch({ type: 'REMOVE_FOOTER' });
        return () => store.dispatch({ type: 'ADD_FOOTER' });
    }, []);




    if (!question) {
        history.push('/questions')
        return <div></div>;
    }

    if (deleted.deleting) {
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }
    if (deleted.deleted) {
        setTimeout(() => {

            history.push('/questions')
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
            history.push('/questions');
            window.location.reload();
        }, 2000)
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>دسته با موفقیت تغییر یافت شد</span>
        </div>)
    }


    if (!admin || !admin.access) {
        return <div></div>
    }
    let ac = admin.access;

    // let dastrasi = {
    //     category: { view: null, create: null, update: null, delete: null },
    //     notification: { view: null, create: null, update: null, delete: null },
    //     role: { view: null, create: null, update: null, delete: null },
    //     user: { view: null, create: null, update: null, delete: null },
    //     setting: { view: null, create: null, update: null, delete: null },
    //     question: { view: null, create: null, update: null, delete: null },
    // }







    return (
        <>

            <TextDialog state={question.title}
                setState={(value) => {
                    setQuestion((oldstate) => ({ ...oldstate, title: value }))
                }}
                items={[]} title={'متن سوال'} disabled={!ac.question.update} />

            <TextDialog state={option[0]} setState={(value) => {
                const temp = option.slice();
                temp[0] = value;
                setOption(temp)
            }} items={[]} title={'گزینه اول'} disabled={!ac.question.update} />

            <TextDialog state={option[1]} setState={(value) => {
                const temp = option.slice();
                temp[1] = value;
                setOption(temp)
            }} items={[]} title={'گزینه دوم'} disabled={!ac.question.update} />

            <TextDialog state={option[2]} setState={(value) => {
                const temp = option.slice();
                temp[2] = value;
                setOption(temp)
            }} items={[]} title={'گزینه سوم'} disabled={!ac.question.update} />

            <TextDialog state={option[3]} setState={(value) => {
                const temp = option.slice();
                temp[3] = value;
                setOption(temp)
            }} items={[]} title={'گزینه چهارم'} disabled={!ac.question.update} />

            <TextDialog state={option[4]} setState={(value) => {
                const temp = option.slice();
                temp[4] = value;
                setOption(temp)
            }} items={[]} title={'گزینه پنجم'} disabled={!ac.question.update} />



            <div className='start-analyze-button-container' style={{ minHeight: '10vh' }}>

                <Button
                    style={{
                        fontFamily: 'Samim', width: '140px', marginLeft: '8px'
                        , display: `${(ac.question.update ? null : 'none')}`
                    }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'far fa-check-circle fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        //send data to server






                        if (question.title.length < 15) {
                            setMessage('متن سوال بسیار کوتاه است')
                            setOpen(true)
                            return;
                        }
                        if (question.title.length > 300) {
                            setMessage('متن سوال بسیار طولانی است')
                            setOpen(true)
                            return;
                        }
                        let err = false;
                        for (let i = 0; i < option.length; i++) {
                            if (option[i].length < 3) {
                                setMessage(`گزینه شماره ${i + 1} بسیار کوتاه است`)
                                setOpen(true)
                                err = true;
                                return;
                            }
                            if (option[i].length > 60) {
                                setMessage(`گزینه شماره ${i + 1} بسیار طولانی است`)
                                setOpen(true)
                                err = true;
                                return;
                            }
                        }

                        if (err) return;






















                        setChanged((oldState) => {

                            return (
                                { ...oldState, changing: true }
                            )
                        })



                        sendEditState(index, setChanged, question.title, option, question.category_id);
                    }}> ثبت تغییرات
                </Button>

                <DialogButton deleteFunc={() => {
                    sendDeleteState(index, setDeleted, question.category_id)
                    setDeleted((oldState) => {

                        return (
                            { ...oldState, deleting: true }
                        )
                    })
                }}>
                    <Button
                        style={{
                            fontFamily: 'Samim',
                            width: '140px',
                            marginRight: '8px',
                            display: `${(ac.question.delete ? null : 'none')}`
                        }}
                        className={classes.root}
                        variant="outlined"
                        color="primary"
                        startIcon={<Icon className={'far fa-trash-alt fa-fw'} style={{ marginRight: '-32px' }} />}
                        onClick={() => {
                            //send data to server







                        }}>حذف سوال
                </Button>
                </DialogButton>


            </div>
            <Snackbar open={open} setOpen={setOpen} message={message} severity={'error'} />

        </>

    )



}






const sendEditState = (question_id, setDeleted, title, option, category_id) => {

    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = {
        _method: 'PUT',
        category: category_id,
        title,
        answers: option




    }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/questions/${question_id}`;

    axios
        .post(
            url2,
            data,
            {
                headers: headers
            },

        )
        .then(response => {
            //console.log(response)
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

        });



}




const mapStateToProps = store => {
    return {

        admin: store.admin,
    };
};



export default connect(mapStateToProps)(withRouter(Question_Analyze));















const sendDeleteState = (question_id, setDeleted, category_id) => {


    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = { _method: 'DELETE' }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/questions/${question_id}`;

    axios
        .post(
            url2,
            data,
            {
                headers: headers
            },

        )
        .then(response => {
            //console.log(response)
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
