import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './sign_in.style.css';
import axios from 'axios';
import NProgress from 'nprogress';
import { useDispatch, useStore } from 'react-redux';
import Fade from 'react-reveal/Fade';
export default function Sign_in() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('client');
  const [password, setPassword] = useState('1234');
  const [disable, setDisable] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [show, setShow] = useState(true);
  const usernameHandleChange = (e) => setUsername(e.target.value);
  const passwordHandleChange = (e) => setPassword(e.target.value);

  NProgress.configure({ showSpinner: true });




  const Request = async () => {
    NProgress.start();
    setDisable(true);
    if (username.length < 3 || password.length < 3) {
      return;
    }

    // localStorage.setItem('khoda', 'response.data.data.token');
    // console.log(localStorage.getItem('khoda'))




    const headers = {
      'Content-Type': 'application/json',
      'Vary': 'Authorization',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`

    }
    const data = {
      username,
      password
    }


    const url = 'http://185.55.226.171/api/login';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    NProgress.inc();
    axios.post(url, data, {
      headers: headers
    })
      .then((response) => {
        NProgress.set(0.6)
        localStorage.setItem('myBeLovedToken', JSON.stringify(response.data.data.token));

        const url2 = 'http://185.55.226.171/api/profile';
        setShow(false);


        axios.post(proxyurl+url2, null, {
          headers: {...headers,Authorization:`Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}` }
        })
          .then((response) => {
            NProgress.inc();
            console.log(response);
            NProgress.done();

            setDisable(false);

            setTimeout(() => {
              NProgress.remove();
              history.push('/home');
              dispatch({ type: 'USER_LOGGED_IN', payload: response.data.data })
            }, 256)
          })






      })
      .catch((error) => {
        console.log(error);
        setWrong(true);
        setDisable(false);
        NProgress.done();
        NProgress.remove();
        setShow(true);

      })

  }

  const disabledStyle = { opacity: '0.45', pointerEvents: 'none' }
  return (
    <Fade opposite when={show}>
      <div id="log-in">
        <div className="login-form" id="khoda" style={disable ? disabledStyle : null}>
          <h3 className="login-heading" style={{ direction: 'rtl', fontFamily: 'Samim' }}>همین حالا وارد شوید</h3>
          <p className="login-copy">سامانه تفاهم سنجش</p>

          <a className="create-account-link" href style={{ visibility: (wrong ? 'visible' : 'hidden'), color: 'red' }}>
            نام کاربری یا کلمه عبور اشتباه است</a>
          <div className="field-container -username">
            {(username.length < 1) ? <label htmlFor="demo" style={{ direction: 'rtl', fontFamily: 'Samim' }}>نام کاربری</label> : null}
            <input type="text" name="demo" value={username} onChange={usernameHandleChange} style={{ direction: 'rtl' }} />
          </div>
          <div className="field-container -password">
            {(password.length < 1) ? <label htmlFor="demo" style={{ direction: 'rtl', fontFamily: 'Samim' }}>کلمه عبور</label> : null}

            <input type="password" name="demo" value={password} onChange={passwordHandleChange} style={{ direction: 'rtl' }} />
          </div>
          <button className="log-in-button"
            onClick={() => Request()}>وارد شوید</button>
          <button className="log-in-button"
            style={{ background: '#0094CC' }} >خرید اشتراک</button>
          <a className="create-account-link" href>بازگردانی کلمه عبور</a>

        </div>
      </div>
    </Fade>
  );
}





function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}