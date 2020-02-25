import React from 'react';
import './profile-view.style.css';
import { connect, useDispatch, useStore } from 'react-redux';
import MaterialTab from '../../components/material-tab/material-tab.component';
import FormProfile from '../../components/form/form.component';
import StudentProfile from '../../components/student-profile/student-profile.component';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const tabs = ['مشخصات', 'ویژه دانشجویان']
const ProfilView = ({ SideTab, user }) => {


  /**
   * Moshakhas mikone in page be sideList niaz dare ya na!
   */
  const store = useStore();
  const dispatch = useDispatch();
  const city = user.city;
  React.useEffect(() => {
    dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
    dispatch({ type: 'ADD_SIDE_LIST' });
    dispatch({ type: 'REMOVE_FOOTER' });

    if (!city) {



      getcity(store)

      getProfileInformation(store)
    }























    return () => {
      dispatch({ type: 'REMOVE_SIDE_LIST' })
      dispatch({ type: 'ADD_FOOTER' });
    };
  }, [dispatch]);
  const content = [
    '',
    ''
  ]







  if (!city) {
    return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress color="secondary" style={{ margin: '24px' }} />
    </div>

  }






  const tabComponent = [<FormProfile disabled={true} user={user} />, <StudentProfile disabled={true} />]
  const SwipeContianer = <MaterialTab data={{
    tabs: ['مشخصات', 'ویژه دانشجویان'],
    content: content,
  }} insideComponent={tabComponent} >
  </MaterialTab>;





  return (
    <div >




      {window.screen.width < 800 ? SwipeContianer : tabComponent[SideTab.current]}




    </div>

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









const getProfileInformation = (store, ) => {

  store.dispatch({ type: 'SET_LOADING', payload: { profile: true } });





  const headers = {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Vary': 'Authorization',
    'Access-Control-Allow-Origin': '*'

  }

  const url = `http://185.55.226.171/api/user`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  axios.get(url, { headers: headers })
    .then((response) => {
      if (response.data.status === 200) {


        store.dispatch({ type: 'SET_CURRENT_USER', payload: response.data.data });
        store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
        // console.log(response.data)

      }

    }).catch((error) => {
      if (error && error.response && error.response.status === 401) {
        // console.log('Singed out!!!')
        store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
      } else {
        // console.log('there is an problem')
        store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
      }

      console.log(error)

    })












}









const getcity = (store) => {


  const headers = {


  }

  const url = `http://185.55.226.171/api/provinces`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  axios.get( url, { headers: headers })
    .then((response) => {
      if (response.data.status === 200) {
        // console.log(response.data)
        let arr = [];
        Object.entries(response.data.data).forEach(
          ([key, value]) => {
            arr.push(value)
          }
        )

        store.dispatch({ type: 'SET_CITY', payload: arr });
        // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
        // console.log(response.data)

      }

    }).catch((error) => {
      if (error && error.response && error.response.status === 401) {
        // console.log('Singed out!!!')
        store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
      } else {
        // console.log('there is an problem')
        store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
      }

      console.log(error)

    })



}

























