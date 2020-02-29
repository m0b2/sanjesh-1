import React from 'react';
import { connect, useStore } from 'react-redux';
import TextDialog from '../../components/textInput-dialog/textInput-dialog.component'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import CheckBoxDialog from '../../components/dialog-check/dialog-check.component';
import Snackbar from '../../components/snackbar/snackbar.component';

const ProfilView = ({ SideTab, user }) => {

    const classes = useStyles();
    const store = useStore();
    const [roles, setRoles] = React.useState(null);
    const [roleName, setRoleName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isCreated, setisCreated] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const [num, setNum] = React.useState(0);
    React.useEffect(() => {

        if (!roles) {
            setIsLoading(true)
            getRoles(store, setRoles, setIsLoading)
        }



        return () => {

        };
    }, []);





    if (isCreated) {

        setTimeout(() => {
            window.location.reload();

        }, 2000)
        return (<div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>نقش با موفقیت افزوده شد</span>
        </div>)
    }


    if (isLoading || !roles) {
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>

    }




    const arrays = []

    Object.entries(roles).forEach(
        ([key, value]) => {
            let details = roles[key].map(v => (v.value ? v.action : '')).filter(v => v !== "")

            details = (details.length > 0) ? details : "هیچکدام"
            const t = <CheckBoxDialog

                state={"" + details}

                setState={(actions) => {


                    setRoles((state) => {

                        return ({ ...state, [key]: [...actions] })
                    }
                    )



                }

                }
                items={roles[key]}
                title={capitalize(key)}
                key={`cbd-${key}`}
                baseState={roles[key]}

            />
            arrays.push(t)

        }


    )



    return (
        <>
            <div style={{ direction: 'rtl' }}>

                <TextDialog state={roleName} setState={setRoleName} items={[]} title={'عنوان نقش'} />

                {arrays}



            </div>
            <div className='start-analyze-button-container' style={{ minHeight: '10vh' }}>

                <Button
                    style={{ fontFamily: 'Samim', width: '140px', marginLeft: '8px' }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'far fa-check-circle fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        // MIN
                        if (roleName.length < 4) {
                            setMessage('عنوان نقش بسیار کوتاه است')
                            setOpen(true)

                            return;
                        }
                        // MAX
                        if (roleName.length > 40) {
                            setMessage('عنوان نقش بسیار طولانی است')
                            setOpen(true)

                            return;
                        }
                        setIsLoading(true)
                        sendRoles(roles, roleName, store, setIsLoading, setisCreated)
                    }}> ایجاد نقش
                </Button>
            </div>

            <Snackbar open={open} setOpen={setOpen} message={message} severity={'error'} />

        </>

    )


}

const mapStatetoProps = (store) => {
    return (
        {
            SideTab: store.SideTab,
            user: store.user

        }
    )
}

export default connect(mapStatetoProps)(ProfilView);









const getRoles = (store, setRoles, setIsLoading) => {

    // store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });





    const headers = {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
        'Accept': 'application/json',



    }

    const url = `http://185.55.226.171/api/roles`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(url, { headers })
        .then((response) => {

            if (response.data.status === 200) {
                const res = response.data.data.data[0].body;
                let obj = {};
                for (let [key, value] of Object.entries(res)) {

                    const actions = res[key].map((v, i) => {

                        return ({ action: v, value: false })
                    })

                    obj = { ...obj, [key]: actions }
                }
                setRoles(obj);
                setIsLoading(false)

                // store.dispatch({ type: 'SET_CURRENT_USER', payload: response.data.data });
                // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });


            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                //  //console.log('Singed out!!!')
                store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                //  //console.log('there is an problem')
                store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
            }

            //console.log(error)
            //console.log(error.response)

        })












}









const sendRoles = (roles, roleName, store, setIsLoading, setisCreated) => {

    // store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });
    let s = "";
    Object.entries(roles).forEach(
        ([key, value]) => {
            roles[key].map((v, index) => {
                s = s + "".concat(key) + `[${v.action}]=` + (v.value ? "1" : "0") + "&"
            })

        }
    )
    //console.log(s + `title=${roleName}`)




    const headers = {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
        'Accept': 'application/json',



    }

    const url = `http://185.55.226.171/api/roles?` + s + `title=${roleName}`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(url, null, { headers })
        .then((response) => {
            //console.log(response)
            setisCreated(true)
            setIsLoading(false)
            if (response.data.status === 200) {



            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                //  //console.log('Singed out!!!')
                store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                //  //console.log('there is an problem')
                store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
            }

            //console.log(error)
            //console.log(error.response)


        })












}








const sendData = (roles, roleName, store) => {

    // store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });





    // const headers = {
    //     'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
    //     'Accept': 'application/json',



    // }

    // const url = `http://185.55.226.171/api/roles?title=${roleName}`;
    // // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // axios.post(proxyurl + url, null, { headers })
    //     .then((response) => {

    //         // setIsLoading(false)



    //     }).catch((error) => {
    //         if (error && error.response && error.response.status === 401) {
    //             //  //console.log('Singed out!!!')
    //             store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
    //         } else {
    //             //  //console.log('there is an problem')
    //             store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
    //         }

    //          //console.log(error)
    //          //console.log(error.response)

    //     })












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










function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}























