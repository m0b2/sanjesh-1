import "./notification.style.css";
import Dialog from '../../components/full-screen-dialog/full-screen-dialog.component';
import React from "react";
import NotificationCom from "../../components/notification/notification.component";
import axios from 'axios';
import { useStore, connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom'

const notification = [
  { from: 'admin', type: 'message', title: 'پیغام', content: 'به پایگاه سنجش تفاهم خوش آمدید', isChecked: null },
  { from: 'system', type: 'request', title: 'درخواست قیاس', content: 'درخواست قیاس شما توسط فلانی پذیرفته شد', isChecked: null },
  { from: 'admin', type: 'analyze', title: 'آنالیز سوالات', content: 'آنالیز سوالات فردی اتمام یافت و اینک در بخش مربوطه در دسترس است ', isChecked: null }
];



const Notification = ({ loading, notification }) => {
  const store = useStore();
  const history = useHistory();


  React.useEffect(() => {



    const insideUseEffect = async () => {
      if (!notification) {
        store.dispatch({ type: 'SET_LOADING', payload: { notification: true } });


        await fetchNotification(store, 1);
        await store.dispatch({ type: 'SET_LOADING', payload: { notification: false } });




      }

    }

    insideUseEffect();










  }, [])



  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [component, setComponent] = React.useState('');


  if (!notification || loading.notification) {
    return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress color="secondary" style={{ margin: '24px' }} />
    </div>
  }


  const MyNotification = notification.map((value, index) => (

    <NotificationCom
      title={value.title}
      subheader={value.content}
      key={`notif${index}`}
      type={value.type}
      onClick={() => {
        setTitle(value.title);
        setComponent(<span className={'dialog-span-content'}>{value.content}</span>);
        setOpen(true);
        history.push(`/notification/#/${index}`);
      }}
    />

  ));

  return <div style={{ minHeight: '90vh' }}>
    {MyNotification}
    <Dialog component={component} title={title} open={open} setOpen={setOpen}
      onClose={() => { history.goBack(); }}
    />
  </div>;
};






const mapStateToProps = store => {
  return {
    loading: store.loading,
    notification: store.Notification
  };
};



export default connect(mapStateToProps)(Notification);











const fetchNotification = async (store, page) => {








  const d = [
    {
      "id": 2,
      "title": "rtyjhnjhc",
      "text": "desclkmkfmf",
      "created_at": "2020-02-19 11:50:57"
    },]



  const
    headers = {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Vary': 'Authorization',
      'Access-Control-Allow-Origin':'*'

    }

  const url = `http://185.55.226.171/api/notifications?page=${page}`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  axios.get( url, { headers: headers })
    .then((response) => {
      if (response.data.status === 200) {

        const filtered = response.data.data.data.map(
          (value, index) => (
            {
              title: value.title, type: 'message', id: value.id,
              content: value.text, index: index, created_at: value.created_at
            }))
        store.dispatch({ type: 'SET_NOTIFICATION', payload: filtered });
        store.dispatch({ type: 'SET_LOADING', payload: { categories: false } });
        //  //console.log(response.data)
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

    })
















}