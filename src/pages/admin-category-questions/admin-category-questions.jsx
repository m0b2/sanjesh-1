import React from 'react';
import './admin-category-questions.style.css';
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
    const classes = useStyles();
    const [question, setQuestion] = React.useState((store.getState().admin.categories) ? (store.getState().admin.categories[index]) : null);
    const [deleted, setDeleted] = React.useState({ deleted: false, deleting: false });
    const [changed, setChanged] = React.useState({ changed: false, changing: false });
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

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
            history.push('/category');
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

            <TextDialog state={question.title} setState={(value) => {
                setQuestion((oldstate) => ({ ...oldstate, title: value }))
            }} items={[]} title={'عنوان دسته'}
                disabled={!ac.category.update}
            />
            <TextDialog state={question.description} setState={(value) => {
                setQuestion((oldstate) => ({ ...oldstate, description: value }))
            }} items={[]} title={'توضیحات دسته'} disabled={!ac.category.update} />

            <div className='start-analyze-button-container' style={{ minHeight: '50vh' }}>

                <Button
                    style={{
                        fontFamily: 'Samim', width: '140px', marginLeft: '8px',
                        display: `${(ac.category.update ? null : 'none')}`
                    }
                    }
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'far fa-check-circle fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        //send data to server

                        if (question.title.length < 4) {
                            setMessage('عنوان دسته بسیار کوتاه است')
                            setOpen(true)

                            return;
                        }
                        if (question.title.length > 40) {
                            setMessage('عنوان دسته بسیار طولانی است')
                            setOpen(true)

                            return;
                        }
                        if (question.description.length > 40) {
                            setMessage('توضیحات دسته بسیار طولانی است')
                            setOpen(true)

                            return;
                        }
                        if (question.description.length < 4) {
                            setMessage('توضیحات دسته بسیار کوتاه است')
                            setOpen(true)

                            return;
                        }




                        setChanged((oldState) => {

                            return (
                                { ...oldState, changing: true }
                            )
                        })



                        sendEditState(index, setChanged, question.title, question.description);
                    }}> ثبت تغییرات
                </Button>


                <DialogButton deleteFunc={() => {
                    setDeleted((oldState) => {

                        return (
                            { ...oldState, deleting: true }
                        )
                    })



                    sendDeleteState(index, setDeleted);


                }}>
                    <Button
                        style={{
                            fontFamily: 'Samim',
                            width: '140px',
                            marginRight: '8px',
                            display: `${(ac.category.delete ? null : 'none')}`

                        }}
                        className={classes.root}
                        variant="outlined"
                        color="primary"
                        startIcon={<Icon className={'far fa-trash-alt fa-fw'} style={{ marginRight: '-32px' }} />}
                        onClick={() => {
                            //send data to server


                        }}>حذف دسته
                </Button>
                </DialogButton>


                <Button
                    style={{
                        fontFamily: 'Samim',
                        width: '140px',
                        marginRight: '8px',
                        display: `${(ac.category.create ? null : 'none')}`
                    }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'fas fa-plus fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        history.push(`/addQuestion/${index}`)
                    }}> افزودن سوال
                </Button>

            </div>
            <Snackbar open={open} setOpen={setOpen} message={message} severity={'error'} />

        </>

    )



}
const mapStateToProps = store => {
    return {

        admin: store.admin,
    };
};



export default connect(mapStateToProps)(withRouter(Question_Analyze));








const sendEditState = (question_id, setDeleted, title, description) => {

    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = {
        _method: 'PUT',
        title,
        description



    }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/categories/${question_id}`;

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

















const sendDeleteState = (question_id, setDeleted) => {


    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = { _method: 'DELETE' }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/categories/${question_id}`;

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
