import React from 'react';
import TextDialog from '../../components/textInput-dialog/textInput-dialog.component';
import { useStore } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '../../components/dialog/dialog.component';

const Question_Analyze = ({ match, history }) => {
    const store = useStore();
    const { index } = match.params;
    const classes = useStyles();
    const [roles, setRoles] = React.useState();
    const [saveRoles, setSaveRoles] = React.useState();
    const [deleted, setDeleted] = React.useState({ deleted: false, deleting: false });
    const [changed, setChanged] = React.useState({ changed: false, changing: false });
    const [full_name, setfull_name] = React.useState('');
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [role, setrole] = React.useState('');

    const temp = {
        title: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: ''
    }
    React.useEffect(() => {

        if (!roles) {
            getRoles(setRoles, store, setSaveRoles)
        }



    }, []);





    if (!roles) {
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }
    // if (deleted.deleted) {
    //     setTimeout(() => {
    //         history.push('/category')
    //     }, 2000)
    //     return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //         <span>دسته با موفقیت حذف شد</span>
    //     </div>)
    // }

    if (changed.changing) {
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)
    }
    if (changed.changed) {
        setTimeout(() => {

            window.location.reload();
        }, 2000)
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>مدیر با موفقیت اضافه شد</span>
        </div>)
    }





    return (
        <>
            <TextDialog state={full_name} setState={setfull_name} items={[]} title={'نام کامل'} />

            <TextDialog state={username} setState={setusername} items={[]} title={'نام کاربری'} />

            <TextDialog state={password} setState={setpassword} items={[]} title={'رمز عبور'} />


            <Dialog state={role} setState={setrole} items={roles} title={'نقش'} />





            <div className='start-analyze-button-container' style={{ minHeight: '50vh' }}>

                <Button
                    style={{ fontFamily: 'Samim', width: '140px', marginLeft: '8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'far fa-check-circle fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        //send data to server
                        setChanged({ changed: false, changing: true })
                        sendCreateUser({ full_name, username, password, role }, saveRoles, store, setChanged)




                        // sendEditState(index, setChanged, question.title, question.text, store);
                    }}> افزودن کاربر
                </Button>





            </div>
        </>

    )



}

export default withRouter(Question_Analyze);





const getRoles = (setRoles, store, setSaveRoles) => {

    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/roles`;

    axios
        .get(
            proxyurl + url2,
            { headers }

        )
        .then(response => {
            // console.log(response.data.data.data.map(v=>v.title))
            setRoles(response.data.data.data.map(v => v.title))
            setSaveRoles(response.data.data.data)
            // setDeleted((oldState) => {

            //     return (
            //         { ...oldState, changed: true, changing: false }
            //     )
            // })

        })
        .catch(error => {
            // setDeleted((oldState) => {

            //     return (
            //         { ...oldState, deleting: false, deleted: false }
            //     )
            // })
            console.log(error);
        });



}

















const sendCreateUser = ({ full_name, username, password, role }, saveRoles, store, setChanged) => {

    let role_id = saveRoles.filter(v => v.title === role)
    role_id = role_id[0].id
    console.log(role_id)
    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = {
        full_name, username, password, role
    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/users`;

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
            setChanged({ changed: true, changing: false })

        })
        .catch(error => {
            
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
