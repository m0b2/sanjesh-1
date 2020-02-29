import React from 'react';
import { connect, useStore } from 'react-redux';
import TextDialog from '../../components/textInput-dialog/textInput-dialog.component'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Snackbar from '../../components/snackbar/snackbar.component';

const ProfilView = ({ admin }) => {





    const [message, setMessage] = React.useState('');

    const classes = useStyles();
    /**
     * Moshakhas mikone in page be sideList niaz dare ya na!
     */
    const store = useStore();
    const [price, setPrice] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        // dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
        // dispatch({ type: 'ADD_SIDE_LIST' });
        // dispatch({ type: 'REMOVE_FOOTER' });
        // dispatch({ type: 'EDIT_PAGE' });

        if (!price) {
            setIsLoading(true)
            getProfileInformation(store, setPrice, setIsLoading)
        }



        return () => {
            // dispatch({ type: 'REMOVE_SIDE_LIST' })
            // dispatch({ type: 'ADD_FOOTER' });
            // dispatch({ type: 'EDIT_PAGE_DONE' });
        };
    }, []);








    if (isLoading) {
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>

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

            <div style={{ direction: 'rtl' }}>

                <TextDialog
                    number
                    state={price}
                    setState={setPrice}
                    items={[]} title={'هزینه ثبت نام'}
                    disabled={!ac.setting.update} />


            </div>
            <div className='start-analyze-button-container' style={{ minHeight: '10vh' }}>

                <Button
                    style={{
                        fontFamily: 'Samim',
                        width: '140px',
                        marginLeft: '8px'
                        , display: `${(ac.setting.update ? null : 'none')}`
                    }}
                    className={classes.root}
                    variant="outlined"
                    color="primary"
                    startIcon={<Icon className={'far fa-check-circle fa-fw'} style={{ marginRight: '-32px' }} />}
                    onClick={() => {
                        //send data to server

                        if (price === '' || parseInt(price) < 1000) {
                            setMessage('هزینه ثبت نام ورودی مجاز نیست')
                            setOpen(true)

                            return;
                        }

                        setIsLoading(true)
                        sendData(price, store, setIsLoading)


                    }}> ثبت تغییرات
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
            user: store.user,
            admin: store.admin

        }
    )
}

export default connect(mapStatetoProps)(ProfilView);









const getProfileInformation = (store, setPrice, setIsLoading) => {

    // store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });





    const headers = {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
        'Accept': 'application/json',



    }

    const url = `http://185.55.226.171/api/settings`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(url, { headers })
        .then((response) => {

            if (response.data.status === 200) {
                setPrice("".concat(response.data.data.register_price));
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


















const sendData = (price, store, setIsLoading) => {

    // store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });





    const headers = {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
        'Accept': 'application/json',



    }

    const url = `http://185.55.226.171/api/settings/main?_method=PUT&register_price=${price}`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(url, null, { headers })
        .then((response) => {

            setIsLoading(false)



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


































